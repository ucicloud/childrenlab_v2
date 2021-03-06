import {Component, OnInit} from '@angular/core';
import {ServerService} from '../server.service';
import {FWVersion} from '../model/fw-version';
import {environment} from 'environments/environment';

@Component({
  selector: 'app-fw',
  templateUrl: './fw.component.html',
  styleUrls: ['./fw.component.scss']
})
export class FWComponent implements OnInit {

  uploading = false;
  hasFile = false;
  fileA: File;
  fileB: File;
  fwListAll: FWVersion[];
  fwListFiltered: FWVersion[];
  env = environment;
  filterValue: string;
  showUploadSection = false;
  filterList = [
    'All',
    'Japanese',
    'English',
    'OLD'
  ];

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {

    const fileInputA = <HTMLInputElement>document.getElementById('file_input_file_1');
    const fileInputB = <HTMLInputElement>document.getElementById('file_input_file_2');
    const fileInputTextA = <HTMLInputElement>document.getElementById('file_input_text_1');
    const fileInputTextB = <HTMLInputElement>document.getElementById('file_input_text_2');
    const uploadButtonA = <HTMLButtonElement>document.getElementById('upload_button_1');
    const uploadButtonB = <HTMLButtonElement>document.getElementById('upload_button_2');
    const submitButton = <HTMLButtonElement>document.getElementById('submit_button');
    const versionInput = <HTMLButtonElement>document.getElementById('fw_version_name');
    const fileInputContainer = document.getElementsByClassName('file_input_container');


    uploadButtonA.addEventListener('click', () => {
      fileInputA.click();
    });

    uploadButtonB.addEventListener('click', () => {
      fileInputB.click();
    });

    submitButton.addEventListener('click', () => {
      this.uploading = true;
      this.fileA = fileInputA.files[0];
      this.fileB = fileInputB.files[0];
      this.serverService.uploadFWFile(versionInput.value, this.fileA, this.fileB)
        .then(() => {
          this.updateFWList();
        });
    });

    fileInputA.addEventListener('change', () => {
      this.hasFile = true;
      const str = fileInputA.value;
      let i;
      if (str.lastIndexOf('\\')) {
        i = str.lastIndexOf('\\') + 1;
      } else if (str.lastIndexOf('/')) {
        i = str.lastIndexOf('/') + 1;
      }
      fileInputTextA.value = str.slice(i, str.length);
      fileInputTextA.classList.remove('none');
      fileInputContainer[0].classList.add('with-text');
    });

    fileInputB.addEventListener('change', () => {
      this.hasFile = true;
      const str = fileInputB.value;
      let i;
      if (str.lastIndexOf('\\')) {
        i = str.lastIndexOf('\\') + 1;
      } else if (str.lastIndexOf('/')) {
        i = str.lastIndexOf('/') + 1;
      }
      fileInputTextB.value = str.slice(i, str.length);
      fileInputTextB.classList.remove('none');
      fileInputContainer[1].classList.add('with-text');
      versionInput.focus();
    });

    this.updateFWList();
  }

  updateFWList() {
    this.serverService.getFWList()
      .then(fwList => {
        this.fwListAll = fwList;
        this.fwListFiltered = fwList;
        this.showUploadSection = false;
      })
      .catch(err => {
        console.error(err);
      });
  }

  updateFilter() {
    if (this.filterValue === 'English') {
      this.fwListFiltered = this.fwListAll.filter(
        fw => fw.version.indexOf('-E') !== -1
      );
    } else if (this.filterValue === 'Japanese') {
      this.fwListFiltered = this.fwListAll.filter(
        fw => fw.version.indexOf('-J') !== -1
      );
    } else if (this.filterValue === 'OLD') {
      this.fwListFiltered = this.fwListAll.filter(
        fw => fw.version.indexOf('-A') !== -1
      );
    } else {
      this.fwListFiltered = this.fwListAll;
    }
  }

}
