import { Component, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements AfterViewInit {


  constructor(private router: Router) {}
  ngAfterViewInit(): void {
  }
  isDashboard() {
    return this.router.url == '/dashboard';
  }
  isSubscription() {
    return this.router.url == '/subscription';
  }
  isCustomer() {
    return this.router.url == '/customer';
  }
  isProduct() {
    return this.router.url == '/product';
  }
  isBill() {
    return this.router.url == '/bill';
  }
  isreports() {
    return this.router.url == '/reports';
  }
  isHelp() {
    return this.router.url == '/help';
  }
}
