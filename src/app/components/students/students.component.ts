import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {

  constructor(private myService:StudentsService) { }

  subscriber:any;
  students:Student[]=[];
  searchValue:string = "";
  isEmailExists:boolean = false;

  ngOnDestroy(): void{
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.loadPage();
    
  }

  ngDoCheck(): void {
    if(this.myService.isChange){
      this.loadPage();
      this.isEmailExists=false;
      this.myService.isEmailExists=false;
      this.myService.isChange=false;
    }
    else if(this.myService.isEmailExists){
      this.isEmailExists=true;
    }
  }

  loadPage(){
    this.subscriber = this.myService.getStudents()
    .subscribe({
      next:(response)=>{
        this.students = response.body as Student[];
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  search(event:Event){
    this.subscriber = this.myService.getStudents()
    .subscribe({
      next:(response)=>{
        let studentsArray:Student[] = response.body as Student[];
        if(studentsArray.length>0){
          this.students = studentsArray.filter((element:Student)=>{
            return element.name.toLowerCase().includes(this.searchValue.toLowerCase());
          });
        }
      },
      error:(err)=>{
        console.log(err);
      }
    });
    
  }

}
