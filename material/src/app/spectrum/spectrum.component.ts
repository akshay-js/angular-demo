import { Component, OnInit } from '@angular/core';
import { ApiService } from '../auth/api.service';
import { Spectrum } from '../db/model';

@Component({
  selector: 'app-spectrum',
  templateUrl: './spectrum.component.html',
  styleUrls: ['./spectrum.component.css']
})
export class SpectrumComponent implements OnInit {
  spectrumsList: Spectrum[] = [];
  isList: boolean = true;
  spectrumDetails = new Spectrum();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getSpectrums().subscribe((data: Spectrum[]) => {
      this.spectrumsList = data;

    });
  }

  logout() {
    this.apiService.logout();
  }

  viewDetail(item: Spectrum) {
    this.isList = false;
    this.spectrumDetails = item;

  }
  list() {
    // this.spectrumDetails = ;
  }
}
