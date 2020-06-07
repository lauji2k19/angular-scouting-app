import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/home/events/events.component';
import { SimpleEventsComponent } from './pages/home/events/simple-events/simple-events.component';
import { DetailedEventsComponent } from './pages/home/events/detailed-events/detailed-events.component';
import { LoginGuard } from './login_guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: 'simple', component: SimpleEventsComponent, canActivate: [LoginGuard] },
      { path: 'detailed', component: DetailedEventsComponent, canActivate: [LoginGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
