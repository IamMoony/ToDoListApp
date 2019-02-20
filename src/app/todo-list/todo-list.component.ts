import { Component, OnInit } from '@angular/core';
import { TodoitemService } from "../shared/todoitem.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	 todoitemArray =[];
	 showDeletedMessage : boolean;
	 searchText:string = "";
  constructor(private todoitemService: TodoitemService) { }

  ngOnInit() {
  	 this.todoitemService.getItem().subscribe(
                 (list) => {
                         this.todoitemArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });

}


onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.todoitemService.deleteItem($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }

   filterCondition(item){
     return item.task.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
   }

   priority(item) {
     if(item.priority == 'high') {
       return 'red';
     }
       else if(item.priority == 'medium') {
         return 'yellow';
       }
       else 
         return 'green';
       }
     }


