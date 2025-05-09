import { Routes } from '@angular/router';
import { TinyComponent } from './tiny/tiny.component';
import { EtherComponent } from './ether/ether.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tiny', component: TinyComponent },
  { path: 'ether', component: EtherComponent }
];
