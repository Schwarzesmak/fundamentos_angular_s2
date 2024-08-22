import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HolaComponent } from './pages/hola/hola.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  
  {
    path:'',
    component:ContactoComponent
  },
  {
    path:'hola',
    component:HolaComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
