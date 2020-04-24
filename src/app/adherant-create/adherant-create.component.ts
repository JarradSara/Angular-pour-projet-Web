import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdherantService } from '../shared/adherant.service';

@Component({
  selector: 'app-adherant-create',
  templateUrl: './adherant-create.component.html',
  styleUrls: ['./adherant-create.component.scss']
})
export class AdherantCreateComponent implements OnInit {

 @Input() adherantDetails = { nomAdherant:'', prenomAdherant: '', ageAdherant: '', emailAdherant: '', adresseAdherant: ''}

  constructor(
    public adherantservice: AdherantService,
    public router: Router
  ) { }

  ngOnInit() { }

  addAdherant(dataAdherant) {
    this.adherantservice.createAdherant(this.adherantDetails).subscribe((data: {}) => {
      this.router.navigate(['/adherants-list'])
    })
  }

}

