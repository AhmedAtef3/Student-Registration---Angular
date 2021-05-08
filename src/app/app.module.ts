import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsService } from './services/students.service';
import { StudentComponent } from './components/student/student.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    NotFoundComponent,
    StudentComponent,
    StudentRegisterComponent,
    DeleteStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
