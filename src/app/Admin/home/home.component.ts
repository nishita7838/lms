import { Component ,ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  val: string = "example-sidenav-0";
  proceedTo!: string;
  mouseenter() {
    if (this.isExpanded) {
      this.isShowing = true;
      this.showSubmenu = true;
      this.val = "example-sidenav";
    }
  }
  onClick() {
    this.isExpanded = !this.isExpanded;
    this.isShowing = !this.isShowing;
    this.showSubmenu = !this.showSubmenu;
    this.proceedTo = !this.isExpanded ? "" : this.proceedTo;
    this.val = this.val === 'example-sidenav' ? 'example-sidenav-0' : 'example-sidenav';
  }
  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
      this.showSubmenu = false;
      this.val = "example-sidenav-0"
    }
  }
 
}
