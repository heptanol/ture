import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  nodes = [
    {latitude: 51.678418, longitude: 7.709007},
    {latitude: 51.678510, longitude: 7.899007},
    {latitude: 51.618418, longitude: 7.809007},
    {latitude: 51.678418, longitude: 7.879007},
    {latitude: 51.628418, longitude: 7.889007},
  ];
}
