export class IEvent{
    eventName: string
  startDate: Date;
  StartTime: string;
  endDate: Date;
  organizerName: string
  userId: string
  price: number
  location: string
  imageUrl: string
  eventId: string

  constructor(){
  this.eventName = ""
  this.startDate = new Date();
  this.StartTime = "";
  this.endDate =new Date();
  this.organizerName = "";
  this.userId = "";
  this.price = 0;
  this.location = "";
  this.imageUrl = "";
  this.eventId = "";
  }
}