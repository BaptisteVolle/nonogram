import { Component, ViewChild } from '@angular/core';
import { PuzzleComponent } from './puzzle/puzzle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PuzzleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild (PuzzleComponent) puzzleComponent!: PuzzleComponent; 

  constructor() {};

  generateRandomGrid(size:number) {
    this.puzzleComponent.generateRandomGrid(size);
  }
}

