import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';
import { AuthService } from './auth.service';

// @Injectable é um decorator que indica que a classe pode ser injetada em outras classes;
@Injectable({
  //providedIn: 'root' indica que a classe será injetada em toda a aplicação;
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }



  // doLogin é um método público que retorna um Observable de ResponseLogin e recebe um RequestLogin como parâmetro;
  // Ele é invocado quando o usuário clicar no botão de login;
  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    // Será necessário fazer uma requisição HTTP para o servidor com o HTTPClient;
    // O método post recebe dois parâmetros: o primeiro é a URL da requisição e o segundo é o objeto que será enviado no corpo da requisição;
    // O método post retorna um Observable de ResponseLogin;
    return this.httpClient.post<ResponseLogin>(
      "http://localhost:8080/api/login",
      requestLogin).pipe(
        tap((jwt)=> this.authService.loginResponse = jwt));
  }
}
