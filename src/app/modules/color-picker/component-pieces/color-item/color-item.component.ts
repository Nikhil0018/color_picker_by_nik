import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.scss'],
})
export class ColorItemComponent implements OnInit {
  @Input() value: string;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() index: number;

  @Output() emitColorChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitMoveChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public onMove(direction: string): void {
    this.emitMoveChange.emit(direction);
  }

  public selectColor(): void {
    this.emitColorChange.emit(this.value);
  }
}
