import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { MiniMenuComponent } from './mini-menu/mini-menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import { VerticalCalendarComponent } from './vertical-calendar/vertical-calendar.component';
import { WeatherComponent } from './weather/weather.component';
import { LuxuryComponent } from './luxury/luxury.component';
import { SocialMediaFooterComponent } from './social-media-footer/social-media-footer.component';
import { LunchComponent } from './lunch/lunch.component';
import { RateTrendComponent } from './rate-trend/rate-trend.component';
import { CommentsComponent } from './comments/comments.component';
import { VideoComponent } from './video/video.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    MiniMenuComponent,
    CalendarComponent,
    VerticalCalendarComponent,
    WeatherComponent,
    LuxuryComponent,
    SocialMediaFooterComponent,
    LunchComponent,
    RateTrendComponent,
    CommentsComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
