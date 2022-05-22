import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variaveis declaras no pai, que são chamadas no HTML, afim de passar as infos para o fihlo.
  //Após passar as infos por property binding ao HTML, faça o @Input no filho.
  public userName: string = 'Joaquin';
  public lastName = 'Amaral';
  public title = 'moments';

  public userData = {
    email: 'joaquin@gmail.com',
    role: 'Admin',
  }
  public parentData = {
    mae: 'giovana',
    pai: 'jorge'
  }
}
