import { Component, OnInit } from '@angular/core';
import { ActiviteService } from "../shared/activite.service";

@Component({
  selector: 'app-activites-list',
  templateUrl: './activites-list.component.html',
  styleUrls: ['./activites-list.component.scss']
})
export class ActivitesListComponent implements OnInit {

Activite: any = [];

  constructor(
    public activiteservice: ActiviteService
  ) { }

  ngOnInit() {
    this.loadActivites()
  }

  // Get activities list
  loadActivites() {
    return this.activiteservice.getActivites().subscribe((data: {}) => {
      this.Activite = data;
    })
  }

  // Delete activity
  deleteActivite(idActivite) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.activiteservice.deleteActivite(idActivite).subscribe(data => {
        this.loadActivites()
      })
    }
  }

}

