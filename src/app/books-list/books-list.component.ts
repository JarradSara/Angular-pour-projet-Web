import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

Book: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadBooks()
  }

  // Get books list
  loadBooks() {
    return this.restApi.getBooks().subscribe((data: {}) => {
      this.Book = data;
    })
  }

  // Delete book
  deleteBook(codeBarre) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteBook(codeBarre).subscribe(data => {
        this.loadBooks()
      })
    }
  }

}
