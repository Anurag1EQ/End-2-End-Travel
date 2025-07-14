import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { Page1Component } from './dynamic/page1/page1.component';
import { BusComponent } from './dynamic/bus/bus.component';
import { TrainComponent } from './dynamic/train/train.component';
import { SelectRouteComponent } from './dynamic/select-route/select-route.component';
import { TrainGoogleMapComponent } from './dynamic/train-google-map/train-google-map.component';
import { TrainStatusComponent } from './dynamic/train-status/train-status.component';


const routes: Routes = [
  { path: '', component: Page1Component },  
  { path: 'page1', component: Page1Component },
  { path: 'bus', component: BusComponent },
  { path: 'train', component: TrainComponent },
  { path: 'selectRoute', component: SelectRouteComponent },
  { path: 'googleMap', component: TrainGoogleMapComponent },
  { path: 'trainStatus', component: TrainStatusComponent },

];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));