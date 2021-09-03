import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  todos: string [] = [];
  todoItem: any='';

  addTodo(ttoddo:string){
    this.todos.push(ttoddo);
  }

  deleteTodo(ind:any){
    this.todos.splice(ind,1);
  }

}
