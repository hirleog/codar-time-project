import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from './../../service/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  public hideThem: boolean = false;

  // é uma variavel balababa
  animalsData: any = ''
  animalDetails = '';
  space = '1em'

  animalList!: Animal[];

  // animal: Animal = {
  //   id: 0,
  //   name: '',
  //   type: '',
  //   age: 0,
  // }


  constructor(private listService: ListService) {
    this.getAllAnimals();
  }

  ngOnInit(): void {
  }

  //O 'animalList' é um array de objetos que porta todos os animais que foram criados baseados na interface.

  //O 'animalDetails' é uma variavel vazia que recebe um valor atravez deste metodo, possibilitando a exibição no HTML (mostra o atributo 'age') 
  showAge(animal: Animal): void {

    if (animal.age === 1) {
      this.animalDetails = `O pet ${animal.name}, tem ${animal.age} ano!`
    } else {
      this.animalDetails = `O pet ${animal.name}, tem ${animal.age} anos!`
    }
  }

  // o parametro representa um animal cujo queremos remover
  // removeAnimal(animal: Animal) {
  //   console.log('Removendo animal...');
  //   this.animalList = this.listService.remove(this.animalList, animal);
  // }

  deleteAnimal(id: number) {
    this.listService.delete(id)
    .subscribe((res) => {
      return res;
    },
    this.getAllAnimals
    )
  }


  getAllAnimals(): void {
    this.listService.getAll()
      .subscribe((res) => {
        this.animalsData = res;
      })

  }

}























// getAnimals(): void {
//   this.listService.getAll()
//     .subscribe((animalsList) => (this.animalsData = animalsList));
// }
