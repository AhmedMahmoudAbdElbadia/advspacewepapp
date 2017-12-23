import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';

import { LoginComponent } from "app/login/login.component";
import { RegisterComponent } from "app/register/register.component";
import { UserRequestComponent } from "app/user-request/user-request.component";
import { PartenrComponent } from "app/partenr/partenr.component";
import { AddCityComponent } from "app/add-city/add-city.component";
import { UserTypeComponent } from "app/user-type/user-type.component";
import { QuotationForPartenrComponent } from "app/quotation-for-partenr/quotation-for-partenr.component";

export const AppRoutes: Routes = [{
    
    
    path: 'login',
  component: LoginComponent,
  
},
{
    
    
    path: 'quotations',
  component: QuotationForPartenrComponent,
  
},

{
path:'add-city',
component:AddCityComponent
},
{
    path:'user-type',
    component:UserTypeComponent
    },
{
 path:'partenr',
 component:PartenrComponent

},
{
    path:'user-request',
    component:UserRequestComponent
},

{
    path: 'register',
  component: RegisterComponent,
  
},
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
   
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    
]
