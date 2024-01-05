import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkMode = false;
  darkModeChanged = new EventEmitter<boolean>();

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
    this.darkModeChanged.emit(this.darkMode);
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
