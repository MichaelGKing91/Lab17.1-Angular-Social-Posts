import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() aPost: Post = { title: '', thought: ''}
  //@Input() addTitle: string = '';
  //@Input() addThought: string = '';
  
  @Output() submitted: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }

  submitPost(){
    //this.aPost = { title: this.addThought, thought: this.addThought}
    this.submitted.emit(this.aPost);
  }


}
