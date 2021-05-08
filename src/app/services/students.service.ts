import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  readonly baseURL:string = 'http://localhost:3000/students';

  constructor(private myClient:HttpClient) { }

  isChange:boolean = false; 
  isEmailExists:boolean = false;

  getStudents(){
    let response = this.myClient.get(this.baseURL,{ observe: 'response'});
    return response;
  }

  getStudentById(id:string){
    return this.myClient.get(`${this.baseURL}/${id}`);
  }

  addStudent(student:Student){
    let response = this.myClient.post(this.baseURL, student);
    return response;
  }

  editStudent(student: Student) {
    let response = this.myClient.patch(`${this.baseURL}/${student.id}`, student);
    return response;
  }

  deleteStudent(id:string){
    return this.myClient.delete(`${this.baseURL}/${id}`);
  }
}
