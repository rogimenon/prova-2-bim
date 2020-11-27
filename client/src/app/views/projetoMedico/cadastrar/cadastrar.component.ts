import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { medico } from 'src/app/models/medico';
import { ProjetoMedicoService } from 'src/app/services/projeto-medico.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  NomedoMedico: string;
  CRMmedico: string;
  SkillMedico: string;
  constructor(private service: ProjetoMedicoService, private route: ActivatedRoute, private router: Router) { }
  Medico: medico = new medico();
 
  ngOnInit(): void {
  }
  Cadastrar():void { 
    this.Medico.crm = this.CRMmedico;
    this.Medico.especialidade = this.SkillMedico;
    this.Medico.nome = this.NomedoMedico;
    this.service.cadastrar(this.Medico).subscribe((med)=>{
      console.log(med);
    }); 
  }
  navigateListagem():void{
    this.router.navigate(['/listar']);
  }
  }

