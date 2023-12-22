import { Component, EventEmitter, Output } from '@angular/core';
import { file_upload_error } from 'src/app/core/constants/defines';

@Component({
  selector: 'app-file-loader',
  templateUrl: './file-loader.component.html',
  styleUrls: ['./file-loader.component.css']
})
export class FileLoaderComponent {
  @Output() fileContent = new EventEmitter<string>();
  error: string | undefined;

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = () => this.fileContent.emit(reader.result as string);
        reader.onerror = () => this.error = file_upload_error.error_upload;
        reader.readAsText(file);
        this.error = '';
      } else {
        this.error = file_upload_error.type_file;
      }
    } else {
      this.error = file_upload_error.file_selected;
    }
  }
}