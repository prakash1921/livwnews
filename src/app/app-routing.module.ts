import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ExploreComponent } from './explore/explore.component';
import { FollowComponent } from './follow/follow.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},

{
  path:'home',
  // canActivate : [AuthGuard] ,
  // component:HomeComponent,
  // loadChildren:'./home/home.module#HomeModule'
  loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule) 

  
},
{
  path:'login',
  component:LoginComponent
},
// {
//   path:'headline',
//   // component:HeadlinesComponent,
//    loadChildren:'./headlines/headlines.module#HeadlinesModule'
// },
// {
//   path:'explore',
//   loadChildren:'./explore/explore.module#ExploreModule'
// },
// {
//   path:'follow',
//   component:FollowComponent
// },

// {
//   path:'**',
//   component:PagenotfoundComponent,
//   data:{
//     title:'Page not found '
//   }
// },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
