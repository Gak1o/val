import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 username ="";

 getUserName(event:Event){
  this.username = (event.target as HTMLInputElement).value
  
 }
 setUserName(){
  this.username="Anto";
 }
 getUserNamewithTemplate(val:string){
  this.username=val;
  console.log(val);
 }
}
