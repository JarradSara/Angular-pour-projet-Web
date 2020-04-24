import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdherantService } from '../shared/adherant.service';


@Component({
  selector: 'app-adherant-edit',
  templateUrl: './adherant-edit.component.html',
  styleUrls: ['./adherant-edit.component.scss']
})
export class AdherantEditComponent implements OnInit {

 idAdherant = this.actRoute.snapshot.params['idAdherant'];
  adherantData: any = {};

  constructor(
    public adherantservice: AdherantService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.adherantservice.getAdherant(this.idAdherant).subscribe((data: {}) => {
      this.adherantData = data;
    })
  }

  // Update adherant data
  updateAdherant() {
    if(window.confirm('Are you sure, you want to update?')){
      this.adherantservice.updateAdherant(this.idAdherant, this.adherantData).subscribe(data => {
        this.router.navigate(['/adherants-list'])
      })
    }
  }

}

