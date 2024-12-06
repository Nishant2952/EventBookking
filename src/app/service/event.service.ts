import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../model/event';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  apiUrl:string = 'https://6740af4bd0b59228b7f0ff11.mockapi.io/events';

  getAllEvents():Observable<IEvent[]>{
    return this.http.get<IEvent[]>(this.apiUrl);
  }

}
