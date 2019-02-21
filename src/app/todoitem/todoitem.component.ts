import { Component, OnInit } from '@angular/core';
import { TodoitemService  } from "../shared/todoitem.service";

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  constructor(private todoitemService: TodoitemService) { }
	submitted: boolean;
 	formControls = this.todoitemService.form.controls;
 	showSuccessMessage: boolean;

  ngOnInit() {
  }

   onSubmit(){
   this.submitted = true;
   if(this.todoitemService.form.valid){
           if(this.todoitemService.form.get("$key").value == null ){                    
           	this.todoitemService.insertItem(this.todoitemService.form.value);
           	   } else 
        this.todoitemService.updateItem(this.todoitemService.form.value);
       this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.todoitemService.form.reset();// the form will be empty after new record created
         } else {
                 //update
         }
   }
   
 }

