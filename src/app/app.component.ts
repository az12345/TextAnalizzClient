import { Component } from '@angular/core';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {UploadFileService} from "./service/upoload-file.service";
import {UploadFileResponse} from "./service/upload-file-response";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }

  constructor(private uploadService: UploadFileService) { }
  uploadFieResponse:UploadFileResponse;
  name:string;
  ngOnInit() {
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe((data) => {
    this.uploadFieResponse= JSON.parse(data.body|| '[]');
    })

    this.selectedFiles = undefined
  }
}
