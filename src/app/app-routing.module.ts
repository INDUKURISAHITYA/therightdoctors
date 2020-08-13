import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GeneralformsComponent } from './generalforms/generalforms.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import {SimpletableComponent} from './simpletable/simpletable.component'

export const routingcomponent = [HomeComponent,AboutComponent,ContactComponent,GeneralformsComponent, MycomponentComponent ,SimpletableComponent]

const routes: Routes = [
                       {path:'',redirectTo:'/home',pathMatch:'full'},
                       {path:'home',component:HomeComponent},
                       {path:'about',component:AboutComponent},
                       {path:'contact',component:ContactComponent},
                       {path:'generalforms',component:GeneralformsComponent},
                       {path:'General',component: MycomponentComponent},
                       {path:'simpletable',component:SimpletableComponent}
                     ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
