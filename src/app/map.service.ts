import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MapService {
  url="http://cricapi.com/0z3s7qoN8hbB2lwDfGyvNXeT73n1/cricketScore";

  constructor(private http:HttpClient) { }


  getMatches(){
    return this.http.get(this.url);
  }

}
