import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  list_of_transactions = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.list_of_transactions = this._httpService.shareTransactionsList();
  }

}
