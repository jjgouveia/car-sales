import { Component, OnInit } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { // A classe LoginComponent implementa a interface OnInit;
  faCar = faCar;

  public requestLogin!: RequestLogin;

  constructor(private loginService: LoginService) { }

  // ngOnInit é o primeiro método invocado assim que o componente for construído;

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  // doLogin é um método público que não retorna nada (void) e não recebe parâmetros (void);
  // Ele é invocado quando o usuário clicar no botão de login;
  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe((data) => console.log(data), (error) => console.error(error));

  }

}
