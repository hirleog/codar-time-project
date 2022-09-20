import { MomentService } from './../../../services/moment.service';
import { Moment } from './../../../interfaces/Moment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  public btnText = 'Compartilhar!'
  public testandoInputData = 'testeeeeeeeeeeeeee'
  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
  }

  //metodo usado para tratar os dados do formulario vindo do component pai (moment-form)
  public async createHandler(moment: Moment) {
    const formData = new FormData();

    //formData é um metodo de tratar dados do formulario
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }
    //to-do
    console.log("deu boa")
    await this.momentService.createMoment(formData).subscribe();
  }

  //metodo para testar emissão de eventos de pai para filho
    //new moment é o pai
  public createHandler2(moment:Moment) {
    console.log('emitindo evento')
  }

  // enviar para o servico

  // exibir msg 

  // redirect

}
