import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent  {
  @Output() scrollToFooterEvent = new EventEmitter<void>();

  scrollToFooter() {
    this.scrollToFooterEvent.emit();
  }
}
