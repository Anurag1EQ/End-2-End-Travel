import { Component } from '@angular/core';
import {RouterModule, RouterOutlet } from '@angular/router';
import { DynamicModule } from '../dynamic/dynamic.module';
import { Page1Component } from '../dynamic/page1/page1.component';
import { TrainComponent } from '../dynamic/train/train.component';
import { BusComponent } from '../dynamic/bus/bus.component';
import { SelectRouteComponent } from '../dynamic/select-route/select-route.component';
import { TrainGoogleMapComponent } from '../dynamic/train-google-map/train-google-map.component';
import { TrainStatusComponent } from '../dynamic/train-status/train-status.component';
import { FilterBoxComponent } from '../dynamic/filter-box/filter-box.component';
import { DarkThemeComponent } from '../dynamic/dark-theme/dark-theme.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet ,DynamicModule, TrainComponent,Page1Component,BusComponent,SelectRouteComponent,TrainGoogleMapComponent, TrainStatusComponent,FilterBoxComponent,DarkThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'railYatri';
}
