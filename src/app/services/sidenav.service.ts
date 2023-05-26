import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }
  private sidebarVisibilitySource = new BehaviorSubject<boolean>(true);
  sidebarVisibility = this.sidebarVisibilitySource.asObservable();

  setSidenavVisibility(visibility: boolean) {
    this.sidebarVisibilitySource.next(visibility);
  }

}
