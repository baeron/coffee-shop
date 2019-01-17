import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', redirectTo: '/about', pathMatch: 'full' },

  { path: 'product', redirectTo: '/product', pathMatch: 'full' },

  { path: 'profile', redirectTo: '/profile', pathMatch: 'full' },

  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', redirectTo: '/register', pathMatch: 'full' },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
