import {Component, Input, OnInit} from '@angular/core';
import {UploadFileResponse} from "../service/upload-file-response";

@Component({
  selector: 'app-upload-file-details',
  templateUrl: './upload-file-details.component.html',
  styleUrls: ['./upload-file-details.component.css']
})
export class UploadFileDetailsComponent implements OnInit {
@Input()  fileDetails:UploadFileResponse;

  constructor() { }

  ngOnInit() {
  }

}
