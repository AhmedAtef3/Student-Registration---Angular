import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
})
export class EditStudentComponent implements OnInit {

  constructor(private myService: StudentsService) {}
  
  subscriber: any;

  @Input("studentInfo") student: Student = {
    id: "",
    name: "",
    email: "",
  };

  ngOnInit(): void {
  }

  updateStudent(myForm: any) {
    this.subscriber = this.myService.editStudent(this.student).subscribe({
      next: () => {
        this.subscriber.unsubscribe();},
      error: (err) => {
        console.log(err);
      },
    });
  }

}
