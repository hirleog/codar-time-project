import { Employee } from './../../interfaces/Employees';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employeeData: any; // usado no get

  formValue!: FormGroup; //usado no formulario POST
  employeeDetail: Employee = new Employee();

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      email: [''],
    })

  }

  showEmployee() {
    this.api.getEmployee()
      .subscribe(res => {
        this.employeeData = res;
        console.log(res);
      })
  }

  postEmployeeDetail() {
    this.employeeDetail.firstName = this.formValue.value.firstName;
    this.employeeDetail.firstName = this.formValue.value.lastName;
    this.employeeDetail.firstName = this.formValue.value.age;
    this.employeeDetail.firstName = this.formValue.value.email;

    this.api.postEmployee(this.employeeDetail)
    .subscribe( res => {
      console.log('adicionado')
      alert('Employee added successfully')

    })
  }

}
