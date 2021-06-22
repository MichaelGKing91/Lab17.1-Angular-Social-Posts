import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() aPost: Post = { title: '', thought: ''}
  @Output() deleted: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }

  deletePost(){
    this.deleted.emit(this.aPost);
  }

}
