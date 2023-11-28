import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, RouterLink, MatButtonModule, MatToolbarModule],
    templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss", "../styles/base.scss"]
})
export class AppComponent {}