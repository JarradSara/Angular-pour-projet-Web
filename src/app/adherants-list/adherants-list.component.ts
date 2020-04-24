import { Component, OnInit } from '@angular/core';
import { AdherantService } from "../shared/adherant.service";

@Component({
  selector: 'app-adherants-list',
  templateUrl: './adherants-list.component.html',
  styleUrls: ['./adherants-list.component.scss']
})
export class AdherantsListComponent implements OnInit {

Adherant: any = [];

  constructor(
    public adherantservice: AdherantService
  ) { }

  ngOnInit() {
    this.loadAdherants()
  }

  // Get adherants list
  loadAdherants() {
    return this.adherantservice.getAdherants().subscribe((data: {}) => {
      this.Adherant = data;
    })
  }

  // Delete adherant
  deleteAdherant(idAdherant) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.adherantservice.deleteAdherant(idAdherant).subscribe(data => {
        this.loadAdherants()
      })
    }
  }

}

