import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() name : string = '';
  @Input() ultimoNome: string = '';

  @Input() joaquinDaDosDele!: {email: string, role: string};
  @Input() paisDoJoaquin!: {mae: string, pai: string};

  @Input() guilhermeName: string = '';

  
  @Input() seusPais!: {pai: string, mae: string};

  //directives style
  constructor() { }

  ngOnInit(): void {
  }

}
