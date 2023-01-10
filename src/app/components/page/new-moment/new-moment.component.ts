import { MessagesService } from './../../../services/messages.service';
import { MomentService } from './../../../services/moment.service';
import { Moment } from './../../../interfaces/Moment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  public btnText = 'Compartilhar!'
  public testandoInputData = 'testeeeeeeeeeeeeee'
  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router
    ) { }

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
    this.messageService.add("Momento adicionado com sucesso!")
    this.router.navigate([' '])
  }

  //metodo para testar emissão de eventos de pai para filho
  //new moment é o pai
  public createHandler2(moment: Moment) {
    console.log('emitindo evento')
  }

  

  // redirect

}
