import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComboBoxComponent } from './shared/combo-box/combo-box.component';
import { PrincipalAutoCompleteComponent } from './principal/principal-auto-complete/principal-auto-complete.component';
import { PrincipalComboboxComponent } from './principal/principal-combobox/principal-combobox.component';
import { GridComponent } from './shared/grid/grid.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutoCompleteComponent } from './shared/auto-complete/auto-complete.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PrincipalTableComponent } from './principal/principal-table/principal-table.component';
import { MascaraCnpjPipe } from './pipes/mascara-cnpj.pipe';
import { MascaraCPFPipe } from './pipes/mascara-cpf.pipe';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ComboBoxComponent,
    AutoCompleteComponent,
    PrincipalAutoCompleteComponent,
    PrincipalComboboxComponent,
    PrincipalComboboxComponent,
    GridComponent,
    PrincipalTableComponent,
    MascaraCnpjPipe,
    MascaraCPFPipe,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
