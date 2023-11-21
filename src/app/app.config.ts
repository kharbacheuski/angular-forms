import { provideRouter, Routes } from "@angular/router";
import { ApplicationConfig } from "@angular/core";
 
import { LoginComponent } from "../pages/login/login.component";
import { NotFoundComponent } from "../pages/not-found/not-found.component";
import { AboutComponent } from "src/pages/about/about.component";
 
const routes: Routes =[
    { path: "login", component: LoginComponent},
    { path: "about", component: AboutComponent },
    { path: "*", component: NotFoundComponent }
];
 
export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
};