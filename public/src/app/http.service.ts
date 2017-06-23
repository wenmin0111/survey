import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  retrieveAll() {
    return this._http.get('/users')
    .map( data => data.json() )
    .toPromise();
  }
  getOneUser(user){
    console.log("getOne", user);
    return this._http.post('/getuser', user)
    .map(data=>data.json())
    .toPromise()
  }
  getAllPolls() {
    return this._http.get('/polls')
    .map( data => data.json() )
    .toPromise();
  }
  getOnePoll(poll_id){
    // console.log(topic_id);
    return this._http.post('/getpoll',poll_id)
    .map(data=>data.json())
    .toPromise();
  }
  createUser(user){
    console.log("user:",user);
    return this._http.post("/new", user)
    .map(data => data.json())
    .toPromise();
  }
  createPoll(poll){
    console.log("parse to create poll:",poll);
    return this._http.post("/newpoll", poll)
    .map(data => data.json())
    .toPromise();
  }
  vote1(voted_poll){
    return this._http.post('/vote1', voted_poll)
    .map(data=>data.json())
    .toPromise()
  }
  vote2(voted_poll){
    return this._http.post('/vote2', voted_poll)
    .map(data=>data.json())
    .toPromise()
  }
  vote3(voted_poll){
    return this._http.post('/vote3', voted_poll)
    .map(data=>data.json())
    .toPromise()
  }
  vote4(voted_poll){
    return this._http.post('/vote4', voted_poll)
    .map(data=>data.json())
    .toPromise()
  }
  delete(poll){
    console.log("parse to delete poll:", poll);
    return this._http.post("/deletepoll", poll)
    .map(data => data.json())
    .toPromise();
  }
}
