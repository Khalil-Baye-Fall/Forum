import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './Shared/top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './Shared/left-navigation/left-navigation.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoomsComponent } from './Features/rooms/rooms.component';
import { SingleRoomComponent } from './Features/single-room/single-room.component';
import { FortoForComponent } from './forto-for/forto-for.component';
import { MainPageComponent } from './Home/main-page/main-page.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { CreateRoomComponent } from './Features/create-room/create-room.component';
import { UpdateRoomComponent } from './Features/update-room/update-room.component';
import { DeleteRoomComponent } from './Features/delete-room/delete-room.component';
import { CreateTopicComponent } from './Features/create-topic/create-topic.component';


const appRoutes: Routes = [

  // main page
  { path: ' ' , component:MainPageComponent },
  { path: 'home' , component:MainPageComponent },

  //  Authentication
  { path:"login", component: SignInComponent },
  { path:"register", component: SignUpComponent },

  // Features activity
  { path:"rooms", canActivate:[AuthGuardService],  component: RoomsComponent},
  { path:"single_room", component: SingleRoomComponent },
  { path:"create_room", canActivate:[AuthGuardService], component: CreateRoomComponent},
  { path:"delete_room", canActivate:[AuthGuardService], component: DeleteRoomComponent},

  { path:"create_topic", canActivate:[AuthGuardService], component: CreateTopicComponent},



  // capture for unexcept request or page

  {path: 'not-found', component: FortoForComponent},
  {path: '**', redirectTo: '/not-found'}

]

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LeftNavigationComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    RoomsComponent,
    SingleRoomComponent,
    FortoForComponent,
    MainPageComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    DeleteRoomComponent,
    CreateTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
