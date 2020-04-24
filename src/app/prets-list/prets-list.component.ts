import { Component, OnInit } from '@angular/core';
import { PretService } from "../shared/pret.service";

@Component({
  selector: 'app-prets-list',
  templateUrl: './prets-list.component.html',
  styleUrls: ['./prets-list.component.scss']
})
export class PretsListComponent implements OnInit {

Pret: any = [];

  constructor(
    public pretService: PretService
  ) { }

  ngOnInit() {
    this.loadPrets()
  }

  // Get prets list
  loadPrets() {
    return this.pretService.getPrets().subscribe((data: {}) => {
      this.Pret = data;
    })
  }

  deletePret(idpret) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.pretService.deletePret(idpret).subscribe(data => {
        this.loadPrets()
      })
    }
  }

}

