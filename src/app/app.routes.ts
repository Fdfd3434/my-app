import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
    {path: '',component: CarComponent},
    {path: 'about',component: ContactsComponent},  
    
];


