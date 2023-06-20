import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginationComponent } from './pagination/pagination/pagination.component';
import { PageGeneralityComponent } from "./page.generality.component";

@NgModule ({
    imports: [CommonModule],
    declarations: [
      PaginationComponent,
      PageGeneralityComponent
    ],
    exports: [PaginationComponent, PageGeneralityComponent]
})

export class PaginationModule {}