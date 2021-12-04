import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReadOrderComponent } from './order/read-order/read-order.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { AddOrderComponent } from './product/add-order/add-order.component';
import { SpinnerComponent } from './spinner/spinner.component'

//Angular Material
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTreeModule} from '@angular/material/tree';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule}  from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';

const materialModules = [
  MatRadioModule,
  MatPaginatorModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatBadgeModule,
  MatGridListModule,
  MatTabsModule,
  MatRippleModule,
  MatTreeModule,
  MatTableModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatStepperModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatMenuModule,
  MatSortModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatSortModule,
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatTableModule,
  MatListModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReadOrderComponent,
    ViewOrderComponent,
    AddOrderComponent,
    SpinnerComponent
  ],
  imports: [
    ...materialModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    MatCardModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
