import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string = 'Guilerme';
  age = 30;
  hobbies = ["Correr", "Estudar", "Bater"]

  public parents = {
    pai: 'norton',
    mae: 'zilda'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
