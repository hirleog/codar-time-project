import { HttpClient } from '@angular/common/http';
import { Animal } from 'src/app/interfaces/Animal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = "http://localhost:3000/animalList"
  constructor(
    private http: HttpClient,
  ) { }

  // ===================== FILTER =====================   
  // O método FILTER() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
  //outro exemplo de FILTER: 

  // function isBigEnough(value) {
  //   return value >= 10;
  // }

  // var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // // filtrado é [12, 130, 44]
  // ===================== FILTER =====================   

  //O 'animalList' tras a lista de animais que contem o membro que queremos remover
  //o 'animal' é o o membro em si que será removido

  // remove(animalList: Animal[], animal: Animal) {
  //   return animalList.filter((a) => animal.name !== a.name)
  // }

  delete(id: number): Observable<Animal[]> {
    return this.http.delete<Animal[]>(`${this.apiUrl}/${id}`)
      .pipe((res: any) => {
        return res;
      })
  }


  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id:number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
    .pipe((res:any) => {
      return res;
    })
  }
  // getItem(id: number): Observable<Animal> {
  //   return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  // }


}