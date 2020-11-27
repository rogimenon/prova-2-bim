import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './views/projetoMedico/cadastrar/cadastrar.component';
import { ListagemComponent } from './views/projetoMedico/listagem/listagem.component';

const routes: Routes = [{
  path:'',
  component: CadastrarComponent
},
{
  path: 'listar',
  component: ListagemComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
