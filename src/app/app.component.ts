import { Component, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { MatSidenav } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'app';
  private selected: any;

  private data = [{"id": "LK", "text": "Sri Lanka"},
      {"id": "AE", "text": "United Arab Emirates"},
      {"id": "UK", "text": "United Kingdom"},
      {"id": "US", "text": "United States"}];

  ngAfterViewInit() {
    this.setSideNave(window);
  }

  setSideNave(target) {
    if (target.innerWidth < 960) {
      if (this.sidenav.opened)
        this.sidenav.close();
    }
    else {
      if (!this.sidenav.opened)
        this.sidenav.open();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      this.setSideNave(event.target);
  }

  @HostListener('window:ready', ['$event'])
  onLoad(event) {
    this.setSideNave(event.target);
  }
}
