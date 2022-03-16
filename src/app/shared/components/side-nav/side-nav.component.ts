import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router) {}
  ngAfterViewInit(): void {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
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
  isTransaction() {
    return this.router.url == '/transaction';
  }
  isreports() {
    return this.router.url == '/reports';
  }
  isHelp() {
    return this.router.url == '/help';
  }
}
