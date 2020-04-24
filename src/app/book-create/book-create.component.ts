import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  @Input() bookDetails = { nomOuvrage:'', nomAuteur: '', numEdition: ''}

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() { }

  addBook(dataBook) {
    this.restApi.createBook(this.bookDetails).subscribe((data: {}) => {
      this.router.navigate(['/books-list'])
    })
  }

}
