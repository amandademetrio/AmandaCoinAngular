import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  coinValue = 0;
  current_balance = 0;
  sellingNumber = 0;
  failure = false;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.coinValue = this._httpService.shareValue();
    this.current_balance = this._httpService.shareBalanceNumber();
  }

  onSell() {
    if (this.current_balance >= this.sellingNumber) {

    this.failure = false;

    this.current_balance -= this.sellingNumber;

    this._httpService.removeFromValue(1);

    this.coinValue = this._httpService.shareValue();

    var id = this._httpService.shareCount()
    this._httpService.addTransaction({action:'sold',amount:this.sellingNumber,value:this.coinValue,id:id});
    this._httpService.addToCount(1);


    this._httpService.removeFromBalance(this.sellingNumber);

    this.sellingNumber = 0;

    }
    else {
      this.failure = true;
      this.sellingNumber = 0;
    }
  }
}
