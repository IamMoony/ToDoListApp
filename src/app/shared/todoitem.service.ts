import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators} from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
	providedIn: 'root'
})
export class TodoitemService {

	constructor(private firebase: AngularFireDatabase) { }
		todoList: AngularFireList<any>;
		form = new FormGroup({
		$key: new FormControl(null),
		task: new FormControl('', Validators.required),
		status: new FormControl(''),
		deadline: new FormControl('', [Validators.required, Validators.minLength(8)]),
		incharge: new FormControl(''),
    priority: new FormControl('')

	});

 getItem(){
                 this.todoList = this.firebase.list('todoitem');
                 return this.todoList.snapshotChanges();
         }


insertItem(item){
                 this.todoList.push({
                         task: item.task,
                         status: item.status,
                         deadline: item.deadline,
                         incharge: item.incharge,
                         priority: item.priority
                  });
         }

populateForm(item){
    this.form.setValue(item);
  }


updateItem(item){
    this.todoList.update(item.$key,{
       task: item.task,
        status: item.status,
        deadline: item.deadline,
        incharge: item.incharge,
        priority: item.priority
    });
  }

  deleteItem($key: string){
    this.todoList.remove($key);
  }
};



