import { Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "post-component",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "./post.component.html",
	styleUrls: ["./post.component.scss"]
})
export class PostComponent { 
	title = "Post";
    id: string = "";
    
    constructor(private route: ActivatedRoute) {
        this.id = this.route.snapshot.params["postId"];
    }
}