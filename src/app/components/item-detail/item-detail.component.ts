import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from './../../service/list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  animal?: Animal;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {

    //metodo que será executado quando o usuario entrar na rota
    this.getAnimal();
  }

  ngOnInit(): void {
  }

  getAnimal() {

    //utilizando o route.snapshow.paramMap para dar um 'get' no ID do animal.
    //afim de mostra-lo
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id)
      .subscribe((animal) => (this.animal = animal));

  }
}

