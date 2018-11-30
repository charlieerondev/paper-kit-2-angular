import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
// import { NgbdModalComponent } from '../components/modal/modal.component';
// import { NgbdModalContent } from '../components/modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        // HomeComponent
    ],
    declarations: [
        // HomeComponent,
        // NgbdModalComponent,
        // NgbdModalContent
    ],
    exports: [
        // HomeComponent,
        // NgbdModalContent
    ],
    // entryComponents: [NgbdModalContent],
    providers: []
})
export class HomeModule { }
