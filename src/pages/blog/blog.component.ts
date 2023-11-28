import { Component, EventEmitter, Input, Output} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: "blog-component",
    standalone: true,
    imports: [RouterLink],
    templateUrl: "./blog.component.html",
	styleUrls: ["./blog.component.scss"]
})
export class BlogComponent { 
    name= "";
	password = "";
	title = "Blog";
    
    @Input() age: number = 0;
    @Output() setAge = new EventEmitter<number>();

    public incrementAge(){
       this.setAge.emit(this.age+10);
    }
}