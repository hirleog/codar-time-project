import { MomentService } from './../../../services/moment.service';
import { Moment } from './../../../interfaces/Moment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  moment?: Moment;
  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.momentService
      .getMomentById(this.id)
      .subscribe((item) => (this.moment = item.data));
    console.log("teste", this.moment)

    // this.momentService.getMomentById(this.id).subscribe((data) => {
    //   this.moment = data;
    // })
  }
}

