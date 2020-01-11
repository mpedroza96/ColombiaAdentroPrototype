import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import {RouterModule} from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [DetailComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgbModule
  ]
})
export class DestinoModule { }
