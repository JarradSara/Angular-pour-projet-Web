import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

codeBarre = this.actRoute.snapshot.params['codeBarre'];
  bookData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getBook(this.codeBarre).subscribe((data: {}) => {
      this.bookData = data;
    })
  }

  // Update book data
  updateBook() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateBook(this.codeBarre, this.bookData).subscribe(data => {
        this.router.navigate(['/books-list'])
      })
    }
  }

}
