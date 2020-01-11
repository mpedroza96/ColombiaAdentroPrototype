import { Component, OnInit } from '@angular/core';
import {DestinoService} from '../destino.service';
import {Destino} from '../../shared/destino';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private destinoService: DestinoService,
              private route: ActivatedRoute) { }

  destino: Destino;

  id: string;

  imagenes: string[];

  getDestino(){
    this.destinoService.getDestino(this.id)
      .subscribe(
        destino => {
          this.destino = destino;
          console.log(destino);
          this.imagenes = destino.rutas[0].imagenes;
        }
      )
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.destino = new Destino();
    this.getDestino();
    console.log(this.imagenes);
  }

}
