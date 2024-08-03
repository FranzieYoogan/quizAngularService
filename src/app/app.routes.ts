import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'result', component: ResultComponent },

];
