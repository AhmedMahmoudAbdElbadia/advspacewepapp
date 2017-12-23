import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';

import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AdvspaceService } from "app/advspace.service";
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserRequestComponent } from './user-request/user-request.component';
import { PartenrComponent } from './partenr/partenr.component';
import { AddCityComponent } from './add-city/add-city.component';
import { FilterPipe } from './filter.pipe';
import { UserTypeComponent } from './user-type/user-type.component';
import { UploadFileService } from "app/upload-file.service";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { QuotationForPartenrComponent } from './quotation-for-partenr/quotation-for-partenr.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    LoginComponent,
    RegisterComponent,
    UserRequestComponent,
    PartenrComponent,
    AddCityComponent,
    FilterPipe,
    UserTypeComponent,
    QuotationForPartenrComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot(),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
   
    FormsModule,HttpModule

  ],
  providers: [AdvspaceService,HttpModule,UploadFileService, AngularFireDatabase,],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
