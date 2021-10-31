import { Component } from '@angular/core';

@Component({
  //html'in datasını yönettiğimiz yer. {} süslü parentez demek obje demek.  [] -> aray demek
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'car';
  user: string = 'Kadir Gültekin';
  

  
}
