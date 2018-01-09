import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Input() element: number;
  inc = 0;
  interval;
  @Output() startGame = new EventEmitter<{inc: number}>();
  @Output() stopGame = new EventEmitter<{interval: number}>();
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => { this.startGame.emit({inc: ++this.inc}); }, 1000);
  }

  onStopGame() {
    this.stopGame.emit({interval: this.interval});
  }
}
