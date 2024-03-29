import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { UserModule } from './User/user.module';
import { AuthService } from './Auth/auth.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ObjectivesModule } from './Objectives/objectives.module';
import { EventsModule } from './Events/events.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    UserModule,
    ObjectivesModule,
    EventsModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    RouterModule.forRoot(AppRoutes),
  ],
  bootstrap: [AppComponent],
  providers: [
    ScreenTrackingService,UserTrackingService,AuthService,
  ],
  exports:[
  ]
})
export class AppModule { }
