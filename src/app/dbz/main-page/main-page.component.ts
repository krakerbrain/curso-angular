import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public titulo: string = 'Dragon Ball Z';

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  };

  constructor() {}
}
