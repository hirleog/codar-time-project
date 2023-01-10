import { UserDTO } from './../../../interfaces/UserDTO';
import { environment } from './../../../../environments/environment';
import { MomentService } from './../../../services/moment.service';
import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allMoments: Moment[] = [];
  public moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  fasearch = faSearch;
  searchTerm: String = '';

  constructor(
    private momentService: MomentService,
  ) { }

  ngOnInit(): void {
    this.momentService.getMoments()
      .subscribe((items) => {
        const data = items.data

        data.map((item) => {
          item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
        })
        this.allMoments = data;
        this.moments = data;
        console.log('allallala')
      });

    // this.getUsers()
  }

  public search(e: Event): void {

    const target = e.target as HTMLInputElement;
    const value = target.value;
    const results = value.toString();

    console.log("testeeee", value)
    console.log("testeeee2", target.value)
    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(results);
      // console.log("testeeee222", results)
    });
  }
  // public get(){
  //   this.momentService.getMomentById()
  //   .subscribe(( res => {
  //     console.log("lalalal",res)
  //   }))
  // }

  public getUsers(): any {
    this.momentService.getAllUsers()
      .subscribe((res: any) => {

        console.log(res);
      })
  }

  public createUser () {

    const user = {
      email: 'Guilherme.hirl@prservicos.com',
      password: 'Masterfut123',
      name: 'Guilherme Hirlllll'
    }
    this.momentService.createUser(user)
    .subscribe(res => {
      console.log('Create user successfully!', user)
    })
  }


}
