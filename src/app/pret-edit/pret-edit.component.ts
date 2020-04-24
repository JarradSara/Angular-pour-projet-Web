import { Component, OnInit } from '@angular/core';
import { PretService } from '../shared/pret.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pret-edit',
  templateUrl: './pret-edit.component.html',
  styleUrls: ['./pret-edit.component.scss']
})
export class PretEditComponent implements OnInit {

  idpret = this.actRoute.snapshot.params['idpret'];
  pretData: any = {};

  constructor(
    public pretService: PretService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.pretService.getPret(this.idpret).subscribe((data: {}) => {
      this.pretData = data;
    })
  }

  // Update Pret data
  updatePret() {
    if(window.confirm('Are you sure, you want to update?')){
      this.pretService.updatePret(this.idpret, this.pretData).subscribe(data => {
        this.router.navigate(['/prets-list'])
      })
    }
  }

}
