import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'map', loadChildren: () => import('./map/map.module').then(mod => mod.MapModule) }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
