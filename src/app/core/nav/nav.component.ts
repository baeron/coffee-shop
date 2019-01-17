import { Component } from '@angular/core';
import Tab from './tab';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isStaticTabsShow = true;
  isAuthTabShow = true;
  isRegisterTabShow = true;
  isProfileShow = true;
  staticTabs: Tab[] = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Shop', url: '/product' }
  ];
  authTab: Tab = { name: 'Sign In', url: '/login' };
  registerTab: Tab = { name: 'Register', url: '/register' };
  profileTab: Tab = { name: 'Profile', url: '/profile' };

  constructor() { }

}
