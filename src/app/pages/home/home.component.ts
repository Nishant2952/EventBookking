import { Component, inject, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IEvent } from '../../model/event';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  eventService = inject(EventService);
  events:IEvent[]=[];

  categories = [
    { icon: 'music_note', label: 'Music' },
    { icon: 'computer', label: 'Technology' },
    { icon: 'restaurant', label: 'Food & Drink' },
    { icon: 'palette', label: 'Arts' },
    { icon: 'fitness_center', label: 'Sports' },
    { icon: 'school', label: 'Education' }
  ];

  ngOnInit(): void {
    this.getAllEvents();
  }
  getAllEvents(){
    this.eventService.getAllEvents().subscribe((res)=>{
      this.events = res;
    })
    
  }


}
