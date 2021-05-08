import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styles: [
  ]
})
export class StudentRegisterComponent implements OnInit, OnDestroy {

  constructor(private myService:StudentsService, private router: Router) { }

  id:any = "";
  name:string = "";
  email:string = "";
  subscriber:any;
  formWithId:any;

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.subscriber.unsubscribe();
  }

  addStudent(myForm:any){
    this.subscriber = this.myService.getStudents()
    .subscribe({
      next:(response)=>{
        let students:Student[] = response.body as Student[];
        if(students.length===0){
          this.id=1;
        }
        else{
          this.id = students[students.length-1].id+1;
        }
        //Check if email exists
        let emailExistance:any = students.find(student=>student.email===myForm.form.value.email);
        if(!emailExistance){
          //Post data
          let formWithId = {...{id:this.id}, ...myForm.form.value}
          this.subscriber = this.myService.addStudent(formWithId).subscribe({
            next: ()=>{
              this.myService.isChange=true;
            }
          });
        }
        else{
          this.myService.isEmailExists=true;
        }
        this.name="";
        this.email="";
        this.id="";
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

}
