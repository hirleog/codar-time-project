import { MessagesService } from './../../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messsages',
  templateUrl: './messsages.component.html',
  styleUrls: ['./messsages.component.css']
})
export class MesssagesComponent implements OnInit {

  faTimes = faTimes;
  constructor(public messageService: MessagesService) { }

  ngOnInit(): void {
  }

}
