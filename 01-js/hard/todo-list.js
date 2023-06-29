/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.taskMaster=[];
  }

  add(task){
    this.taskMaster.push(task)
  }

  remove(indexOfTodo){this.taskMaster.splice(indexOfTodo,1)}

  update(indexOfTodo,newTask){
    if (indexOfTodo<this.taskMaster.length){
      this.taskMaster[indexOfTodo]=newTask
    }
  }

  getAll(){return(this.taskMaster)}
  
  get(indexOfTodo){
    if (indexOfTodo>=this.taskMaster.length){
      return null
    }else{
    return(this.taskMaster[indexOfTodo])}
  }
  clear(){this.taskMaster=[]}
}

module.exports = Todo;
