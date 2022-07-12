import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {

  @Input() btnText!: string;

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

  public submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log("Enviou form")
  }
}
