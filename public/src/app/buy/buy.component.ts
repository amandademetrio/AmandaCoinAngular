import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  coinValue = 0;
  current_balance = 0;
  buyingNumber = 0;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.coinValue = this._httpService.shareValue();
    this.current_balance = this._httpService.shareBalanceNumber();
  }
  onBuy() {
    this.current_balance += this.buyingNumber;

    this._httpService.addToValue(this.buyingNumber/2);

    this.coinValue = this._httpService.shareValue();

    var id = this._httpService.shareCount()
    this._httpService.addTransaction({action:'bought',amount:this.buyingNumber,value:this.coinValue,id:id})
    this._httpService.addToCount(1);
    
    this._httpService.addToBalance(this.buyingNumber);

    this.buyingNumber = 0;
  }

}
