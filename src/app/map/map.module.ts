import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';
import {AgmCoreModule} from '@agm/core';
import {MapComponent} from './map.component';
import {RouterModule, Routes} from '@angular/router';
import { MapDetailsComponent } from './map-details/map-details.component';
import { NodeComponent } from './node/node.component';
import {NodeService} from './shared/node.service';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

const appRoutes: Routes = [
  { path: '', component: MapComponent,
    children: [
      { path: '', component: MapDetailsComponent },
    ]
  }
];

@NgModule({
  declarations: [
    MapComponent,
    MapDetailsComponent,
    NodeComponent
  ],
  providers: [
    NodeService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(
      appRoutes
    ),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3TWIbC60GZFx0_E0m2Fb7x7SSLVQ-kuw'
    }),
    AgmJsMarkerClustererModule,
  ],
  exports: [
    MapComponent
  ],
  bootstrap: [MapComponent]
})
export class MapModule { }
