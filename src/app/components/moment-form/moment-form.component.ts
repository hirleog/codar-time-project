import { Moment } from './../../interfaces/Moment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {

  //output serve para passar o evento de click com os dados do MomentForm para o component new-moment
  @Output() onSubmit = new EventEmitter<Moment>();
  @Output() Enviando = new EventEmitter<Moment>();

  @Input() btnText!: string;
  @Input() testandoInputData!: string;
  //criando form group
  momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    //inicializando form group
    //iniciando os campos com string vazia (''), pois posteriormente vão vir preenchidas com a responsta da requisição
    this.momentForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      image: new FormControl(''),
    })
  }

  get title() {
    return this.momentForm.get('title')!;
  }
  get description() {
    return this.momentForm.get('description')!;
  }

  //evento responsavel por carregar uma imagem - é conectada ao html atraves de um event
  public onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file })
  }

  public submit() {
    if (this.momentForm.invalid) {
    }
    console.log(this.momentForm.value);
    console.log(this.testandoInputData, 'deu certo')
    this.onSubmit.emit(this.momentForm.value); 
  }
  public enviar (){
    this.Enviando.emit(this.momentForm.value)
  }

}
