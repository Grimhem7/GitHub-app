import { Component } from '@angular/core';

@Component({
  selector: 'app-page-generality',
  templateUrl: './page.generality.component.html',
  styleUrls: ['./page.generality.component.css']
})
export class PageGeneralityComponent {
  currentPage: number= 1;

  changePage(page: number) : void {
    this.currentPage = page;
  }
}
