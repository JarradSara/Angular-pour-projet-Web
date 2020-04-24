import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PretService } from "../shared/pret.service";

@Component({
  selector: 'app-pret-create',
  templateUrl: './pret-create.component.html',
  styleUrls: ['./pret-create.component.scss']
})
export class PretCreateComponent implements OnInit {

 @Input() pretDetails = { begin:'', end: '', book: '', adherant:''}

  constructor(
    public pretService: PretService,
    public router: Router
  ) { }

  ngOnInit() { }

  addPret(dataPret) {
    this.pretService.createPret(this.pretDetails).subscribe((data: {}) => {
      this.router.navigate(['/prets-list'])
    })
  }

}
