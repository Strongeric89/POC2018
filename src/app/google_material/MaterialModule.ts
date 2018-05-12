import {MatToolbarModule, MatMenuModule} from '@angular/material';
import { MatIconModule } from "@angular/material/icon"
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  imports: [MatToolbarModule,
            MatMenuModule,
            MatFormFieldModule,
            MatProgressSpinnerModule,
            MatTabsModule,
            MatButtonToggleModule,
            MatSnackBarModule,
            MatCardModule,
            MatButtonToggleModule,
            MatSelectModule,
            MatInputModule,
            MatIconModule,
            MatButtonToggleModule,
            MatDialogModule,
            BrowserAnimationsModule],
  exports: [MatToolbarModule,
            MatMenuModule,
            MatCardModule,
            MatSelectModule,
            MatProgressSpinnerModule,
            MatTabsModule,
            MatButtonToggleModule,
            MatInputModule,
            MatFormFieldModule,
            MatIconModule,
            MatButtonToggleModule,
            MatDialogModule,
            BrowserAnimationsModule],
})
export class MaterialModule { }