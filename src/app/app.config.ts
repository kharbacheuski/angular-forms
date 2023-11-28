import { provideRouter, Routes } from "@angular/router";
import { ApplicationConfig } from "@angular/core";
 
import { LoginComponent } from "../pages/login/login.component";
import { NotFoundComponent } from "../pages/not-found/not-found.component";
import { AboutComponent } from "src/pages/about/about.component";
import { PostComponent } from "src/pages/post/post.component";
import { BlogComponent } from "src/pages/blog/blog.component";
import { HomeComponent } from "src/pages/home/home.component";
import { provideAnimations } from '@angular/platform-browser/animations';
 
const routes: Routes =[
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "about", component: AboutComponent },
    { path: "blog", component: BlogComponent },
    { path: "blog/:postId", component: PostComponent },
    { path: "**", component: NotFoundComponent }
];
 
export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideAnimations()]
};