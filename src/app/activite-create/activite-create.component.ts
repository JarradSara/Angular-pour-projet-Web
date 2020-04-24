import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteService } from "../shared/activite.service";

@Component({
  selector: 'app-activite-create',
  templateUrl: './activite-create.component.html',
  styleUrls: ['./activite-create.component.scss']
})
export class ActiviteCreateComponent implements OnInit {

@Input() activiteDetails = { nomActivite:'', descriptionActivite: '', niveauActivite: ''}

  constructor(
    public activiteservice: ActiviteService,
    public router: Router
  ) { }

  ngOnInit() { }

  addActivite(dataActivite) {
    this.activiteservice.createActivite(this.activiteDetails).subscribe((data: {}) => {
      this.router.navigate(['/activites-list'])
    })
  }

}
