import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', //<courses>
    template: `
        <h2>{{getTitle()}}</h2>
        <h3>{{numberOfCourses}} Course Available</h3>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        ` //interpolation
})
export class CoursesComponent {
    title = "List of Courses";
    courses: any;
    numberOfCourses = 0;
    // courses; = ["UI/UX", "Java", "JavaScript"];
     getTitle() {
         return this.title;
     }
    
    constructor(service: CoursesService){
        //let service = new CoursesService;
        this.courses = service.getCourses();
        this.numberOfCourses = service.getNumberCourses();
    }
}