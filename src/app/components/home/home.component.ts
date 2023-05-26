import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private serviceNav: SidenavService) {
  }

  ngOnInit(): void {
    this.serviceNav.setSidenavVisibility(false);


  }

}
