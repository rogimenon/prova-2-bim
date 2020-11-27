import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { medico } from 'src/app/models/medico';
import { ProjetoMedicoService } from 'src/app/services/projeto-medico.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  medColumns: string[] = ["MedID", "NomedoMedico", "CRM" , "Especialidade"];
  meds: medico[] = []
  medsTable: MatTableDataSource<medico> = new MatTableDataSource(this.meds);
  constructor(private service: ProjetoMedicoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.Listar().subscribe((medsList)=>{
    this.meds = medsList;
    this.medsTable = new MatTableDataSource<medico>(medsList);
  });
  }
  navigateCadastrar():void{
    this.router.navigate(['']);
  }
  }

