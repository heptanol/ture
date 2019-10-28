import {Component, HostListener, Input, OnInit} from '@angular/core';
import {LatLngBounds, MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.sass']
})
export class MapDetailsComponent implements OnInit {

  @Input() nodeList: any[] = [
    {latitude: 51.678418, longitude: 7.709007},
    {latitude: 51.678510, longitude: 7.899007},
    {latitude: 51.618418, longitude: 7.809007},
    {latitude: 51.678418, longitude: 7.879007},
    {latitude: 51.628418, longitude: 7.889007},
  ];
  latlngBounds: LatLngBounds;
  height: any;

  constructor(
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.setHeight();
    this.mapCenter();
  }

  @HostListener('window:resize')
  setHeight() {
    this.height = window.innerHeight;
  }

  mapCenter() {
    this.mapsAPILoader.load().then(() => {
      this.latlngBounds = new window['google'].maps.LatLngBounds();
      this.nodeList.forEach((node: any) => {
        this.latlngBounds.extend(new window['google'].maps.LatLng(node.latitude, node.longitude));
      });
    });
  }

  openDetails(node) {
    console.log(node);
  }


}
