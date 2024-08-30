import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames : string [] = ['SpiderMan','Iroman', 'Hulk', 'She Hulk', 'Thor'];
    //public deletedHero : string = ''; // inicaliso en blanco es correcto
    public deletedHero? : string; // inicaliso en blanco es correcto no nesario exista

    removeLastHero() : void {
      //this.heroNames.shift(); //elimina priumer elemento de la lista
      //this.heroNames.pop(); // eliminaultimo elemento de la listo.
      //const deletedHero = this.heroNames.pop();
      //console.log (deletedHero );
        this.deletedHero = this.heroNames.pop(); //tendra el nombre eliminado "public deletedHero"
    }

}
