

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './shared/modal.service';
import { JobsService } from './services/job.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        NgbPaginationModule,
        CommonModule,
        FormsModule,
        MatTableModule,
        NgbModalModule,
        ReactiveFormsModule,
        
    ],
    providers: [
        JobsService,
        ModalService,
    ],
    bootstrap: [],
})
export class AppModule {
    ngDoBootstrap() {
    }
}
