import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
  
  id:string="";
  student:any;
  subscriber:any;
  
  constructor(private myService:StudentsService, myAR:ActivatedRoute, private router: Router) {
    this.id = myAR.snapshot.params.id    
  }

  ngOnDestroy(): void{
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(){
    this.subscriber = this.myService.getStudentById(this.id).subscribe({
      next:(student)=>this.student=student,
      error:(err)=>console.log(err)
    });
  }
}
