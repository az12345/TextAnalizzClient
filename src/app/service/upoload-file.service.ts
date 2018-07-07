import {Injectable} from '@angular/core';
import {HttpRequest, HttpEvent, HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UploadFileResponse} from "./upload-file-response";
import "rxjs/add/operator/map";
import {Response} from "@angular/http";
const ParseHeaders = {
  headers: new HttpHeaders({
    'Content-Type'  : 'application/json'
    // 'multipart/form-data'
  })
};
@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<any>{
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'https://fileuploadanaliserver.herokuapp.com/uploadFile', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

}
