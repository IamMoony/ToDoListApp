import { Component, OnInit } from '@angular/core';
import { TodoitemService  } from "../shared/todoitem.service";

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  constructor(private todoitemService: TodoitemService) { }


  ngOnInit() {
  }

}
