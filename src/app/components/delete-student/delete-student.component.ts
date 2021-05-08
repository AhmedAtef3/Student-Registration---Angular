import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
})
export class DeleteStudentComponent implements OnInit {

  id:string="";
  subscriber:any;

  constructor(private myService:StudentsService, myAR:ActivatedRoute, private router: Router) {
    this.id = myAR.snapshot.params.id 
  }

  ngOnInit(): void {
  }

  deleteStudent(){
    this.subscriber = this.myService.deleteStudent(this.id).subscribe({
      next: ()=>{
        this.subscriber.unsubscribe();
        this.router.navigateByUrl("");
      }
    });
  }

}
