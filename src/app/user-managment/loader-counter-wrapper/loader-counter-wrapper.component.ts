import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loader-counter-wrapper',
  templateUrl: './loader-counter-wrapper.component.html',
  styleUrls: ['./loader-counter-wrapper.component.css']
})
export class TextLoaderCounterWrapperComponent {
  content: string | null = null;

  onFileLoaded(fileContent: string) {
    this.content = fileContent.trim() ? fileContent : null;
  }
}
