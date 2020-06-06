import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { SimpleEventsComponent } from './simple-events/simple-events.component';
import { DetailedEventsComponent } from './detailed-events/detailed-events.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: 'simple', component: SimpleEventsComponent },
      { path: 'detailed', component: DetailedEventsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
