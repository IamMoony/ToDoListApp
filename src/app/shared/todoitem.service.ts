import { Injectable } from '@angular/core';
import { FormControl , FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TodoitemService {

  constructor() { }
  form = new FormGroup({
     $key: new FormControl(null),
     task: new FormControl(''),
     status: new FormControl(''),
     deadline: new FormControl(''),
     incharge: new FormControl('')
         });
}
