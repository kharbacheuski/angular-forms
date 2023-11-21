import { Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
    selector: "login-component",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent { 
    name= "";
	password = "";
	title = "Login";
    
    @Input() age: number = 0;
    @Output() setAge = new EventEmitter<number>();

    public incrementAge(){
       this.setAge.emit(this.age+10);
    }
}