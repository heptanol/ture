import { Component, HostListener, Input, OnInit } from '@angular/core';
import { LatLngBounds, MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  @Input() nodes: {latitude: number, longitude: number}[];
  latlngBounds: LatLngBounds;
  height: number;

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
      this.nodes.forEach((node: any) => {
        this.latlngBounds.extend(new window['google'].maps.LatLng(node.latitude, node.longitude));
      });
    });
  }

  openDetails(node) {
    console.log(node);
  }

}
