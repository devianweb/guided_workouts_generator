import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  file!: File; // Variable to store file
  workout: String = "";

  constructor(
  
    ) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event: any) {
    console.log(event);
    this.file = event.target.files[0];
  }

  

}
