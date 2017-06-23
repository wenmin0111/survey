import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name = '';
  user_id = '';

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

  polls=[];

  constructor(private _httpService:HttpService, private _cookieService:CookieService, private _route:Router) { 
    if(!this._cookieService.get("loginuserName")){
      this._route.navigate(['/']);
    }
    this.name = this._cookieService.get("loginuserName");
    this.user_id = this._cookieService.get("loginuserId");
    this.poll._user = this.user_id; 
    this.poll.username = this.name;
    // console.log(this.user_id); 
    this._httpService.getAllPolls()
    .then(allpolls=>{
      console.log("all polls: ", allpolls);
      this.polls = allpolls;
    })
  }

  delete(poll_id){
    console.log("poll need to delete: ", poll_id);
    var delete_poll = {
     id: poll_id
   }
    this._httpService.delete(delete_poll)
    .then(deleted => {
      console.log("poll has been deleted: ", deleted);
      this._httpService.getAllPolls()
      .then(allpolls => {
        console.log("all polls after delete: ", allpolls);
        this.polls = allpolls;
      })
    })
    .catch()
  }

  ngOnInit() {
  }

  logOut(){
    this._cookieService.remove("loginuserName");
    this._cookieService.remove("loginuserId");
    this._route.navigate(['/']);
  }
}
