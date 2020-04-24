import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../shared/activite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-activite-edit',
  templateUrl: './activite-edit.component.html',
  styleUrls: ['./activite-edit.component.scss']
})
export class ActiviteEditComponent implements OnInit {

idActivite = this.actRoute.snapshot.params['idActivite'];
  activiteData: any = {};

  constructor(
    public activiteservice: ActiviteService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.activiteservice.getActivite(this.idActivite).subscribe((data: {}) => {
      this.activiteData = data;
    })
  }

  // Update activite data
  updateActivite() {
    if(window.confirm('Are you sure, you want to update?')){
      this.activiteservice.updateActivite(this.idActivite, this.activiteData).subscribe(data => {
        this.router.navigate(['/activites-list'])
      })
    }
  }

}

