import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AgmMap, LatLngBounds, MapsAPILoader } from '@agm/core';
import { LatLngBoundsLiteral } from '@agm/core/services/google-maps-types';

import { NodeService } from '../shared/node.service';
import { Node } from '../shared/node.model';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.sass']
})
export class MapDetailsComponent implements OnInit, AfterViewInit, OnDestroy {

  nodeList: Node[] = [];
  latlngBounds: LatLngBoundsLiteral | LatLngBounds | boolean = false;
  height: any;
  @ViewChild(AgmMap, { static: false }) agmMap: AgmMap;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private nodeService: NodeService
  ) { }

  ngOnInit() {
    this.setHeight();
  }

  @HostListener('window:resize')
  setHeight() {
    this.height = window.innerHeight;
  }

  getNodes() {
    this.nodeService.getNodes().subscribe((nodes: Node[]) => {
      this.nodeList = nodes;
      this.adjustMap(nodes);
    });
  }

  openDetails(node) {
    console.log(node);
  }

  adjustMap(nodes: Node[]) {
    const latlngBounds = new window['google'].maps.LatLngBounds();
    nodes.forEach((node) => {
      latlngBounds.extend(new window['google'].maps.LatLng(node.localisation.latitude, node.localisation.longitude));
    });
    this.latlngBounds = latlngBounds;
  }

  ngAfterViewInit() {
    this.getNodes();
  }

  ngOnDestroy() {
  }
}
