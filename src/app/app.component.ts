import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  activiteiten: string[] = [
    'Pannenkoeken bakken',
    'Skaten',
    'Monsters tekenen',
    'Tekenen',
    'lego',
    'duplo',
    'programmeren',
    'voetballen',
    'schaken',
    'bordspellen',
    'muziek luisteren',
    'lezen',
    'verhaaltje luisteren',
    'verhaal(tje) schrijven',
    'pokemon gevecht',
    'eten',
    'pokemonkaarten ruilen',
    'zwemmen',
    'fietsen/steppen',
    'dingen creëren bv.knutselen',
    'piano spelen',
  ]

  activiteit: string | undefined;

  ngOnInit(){
    this.activiteit = this.activiteiten[this.randomTussen(0, this.activiteiten.length-1)]
  }

  randomTussen(min: number, max: number): number {
    return Math.floor(Math.random()*(max - min + 1) + min)
  }
}
