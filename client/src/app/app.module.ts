import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarComponent } from './views/projetoMedico/cadastrar/cadastrar.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from'@angular/common/http';
import { ListagemComponent } from './views/projetoMedico/listagem/listagem.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    ListagemComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
