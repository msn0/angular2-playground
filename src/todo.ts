export class Todo {
  text:string;
  completed:boolean;

  constructor(text:string) {
    this.text = text;
    this.completed = false;
  }
}
