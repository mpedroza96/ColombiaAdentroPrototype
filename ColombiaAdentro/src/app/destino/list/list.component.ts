import { Component, OnInit } from '@angular/core';
import {DestinoService} from '../destino.service';
import {Destino} from '../../shared/destino';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private destinoService: DestinoService) { }

  destinos: Destino[];

  searchText;

  getDestinos(){
    this.destinoService.getDestinos()
      .subscribe(
        destinos => {
          this.destinos = destinos;
          console.log(this.destinos)
        }
      )
  }

  ngOnInit() {
    this.getDestinos();
  }

}
