import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  @Input() showpost: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  allPosts: Post[] = [
    { title: 'Yard sale', thought: 'I am having a yard sale today from 3p-6p.'},
    { title: 'Kick-ball Turney', thought: 'We are going to be playing kick-ball on the large diamond today from 12p-2p.'},
    { title: 'Shananigans', thought: 'Join us for some debauchery at Lou\'s Pub tonight.'},
    { title: 'Pizza Bake-Off', thought: 'Join the fun now. Only 7 fire stone ovens positions left for the turney.'},
  ];

  deleteAPost(aPost: Post){
    for(let i = 0; i < this.allPosts.length; i++){
      if(aPost == this.allPosts[i]){
        this.allPosts.splice(i,1);
        return;
      }
    }
  }


  toggleState = false;
  addAPostToggle() {
    this.toggleState = !this.toggleState;
    /*console.log(this.toggleState);
    if(this.toggleState == false){
      this.toggleState = true;
    }
    if(this.toggleState == true){
      this.toggleState = false;
    }
    console.log(this.toggleState);
    return this.toggleState;
*/
  }

  
  submitAPost(aPost: Post){
    this.allPosts.unshift(aPost);
  }

}
