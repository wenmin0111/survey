import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll_id = {
    id:''
  };
  poll={
    question:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    option1_count: 0,
    option2_count: 0,
    option3_count:0,
    option4_count:0,
    _user:'',
    username:'',
  }

  constructor(private _httpService:HttpService, private _cookieService:CookieService, private _route:ActivatedRoute, private _router:Router) { 
    if(!this._cookieService.get("loginuserName")){
      this._router.navigate(['/']);
    }
    this._route.params.subscribe(param=>{
     this.poll_id.id = param._id;
     console.log("get params", param);
     console.log("get poll_id",this.poll_id.id);
   })
   this._httpService.getOnePoll(this.poll_id)
   .then(finded_poll=>{
     console.log("Fined Poll in poll component: ", finded_poll);
     this.poll = finded_poll;
   })
   .catch(err=>{
     console.log("Get one poll in poll component constructor error: ", err);
   })    
  }



  option1Vote(poll_id){
   console.log("Voted poll id: ", poll_id);
   var voted_poll = {
     id: poll_id
   }
   this._httpService.vote1(voted_poll)
   .then(updated_poll=>{
     console.log("Voted opton1: ", updated_poll);
     this._httpService.getOnePoll(this.poll_id)
      .then(finded_poll=>{
        console.log("Fined Poll in poll component: ", finded_poll);
        this.poll = finded_poll;
      })
      .catch(err=>{
        console.log("Get one poll in poll component constructor error: ", err);
      })
   })
   .catch()
 }
 option2Vote(poll_id){
   console.log("Voted poll id: ", poll_id);
   var voted_poll = {
     id: poll_id
   }
   this._httpService.vote2(voted_poll)
   .then(updated_poll=>{
     console.log("Voted opton2: ", updated_poll);
     this._httpService.getOnePoll(this.poll_id)
      .then(finded_poll=>{
        console.log("Fined Poll in poll component: ", finded_poll);
        this.poll = finded_poll;
      })
      .catch(err=>{
        console.log("Get one poll in poll component constructor error: ", err);
      })
   })
   .catch()
 }
 option3Vote(poll_id){
   console.log("Voted poll id: ", poll_id);
   var voted_poll = {
     id: poll_id
   }
   this._httpService.vote3(voted_poll)
   .then(updated_poll=>{
     console.log("Voted opton3: ", updated_poll);
     this._httpService.getOnePoll(this.poll_id)
      .then(finded_poll=>{
        console.log("Fined Poll in poll component: ", finded_poll);
        this.poll = finded_poll;
      })
      .catch(err=>{
        console.log("Get one poll in poll component constructor error: ", err);
      })
   })
   .catch()
 }
 option4Vote(poll_id){
   console.log("Voted poll id: ", poll_id);
   var voted_poll = {
     id: poll_id
   }
   this._httpService.vote4(voted_poll)
   .then(updated_poll=>{
     console.log("Voted opton4: ", updated_poll);
     this._httpService.getOnePoll(this.poll_id)
      .then(finded_poll=>{
        console.log("Fined Poll in poll component: ", finded_poll);
        this.poll = finded_poll;
      })
      .catch(err=>{
        console.log("Get one poll in poll component constructor error: ", err);
      })
   })
   .catch()
 }

  ngOnInit() {
  }

}
