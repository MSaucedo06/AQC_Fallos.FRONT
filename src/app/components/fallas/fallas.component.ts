import { Component, OnInit } from '@angular/core';
import { FallasService } from '../../services/fallas.service';
import { Falla } from '../../models/falla.model';

@Component({
  selector: 'app-fallas',
  standalone: true,
  imports: [],
  templateUrl: './fallas.component.html',
  styleUrl: './fallas.component.css'
})
export class FallasComponent implements OnInit {

  fallas: Falla[] = [];

  constructor(private fallasService: FallasService) { }

  ngOnInit(): void {
    this.loadFallas();
  }

  loadFallas(): void {
    this.fallasService.getFallas().subscribe(data => {
      this.fallas = data;
      console.log(data);
    });
  }

  // Puedes agregar métodos para crear, actualizar y eliminar fallas
}