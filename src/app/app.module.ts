import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoitemService } from "./shared/todoitem.service";
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoitemComponent,
    TodoListComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
	  AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
   	AngularFireDatabaseModule, // we will import the classes here too
    FormsModule
  ],
  providers: [TodoitemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
