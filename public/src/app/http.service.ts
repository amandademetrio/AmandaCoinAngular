import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  transactions = [];
  balance = 0;
  coinValue = 1;
  transaction_count = 1;

  constructor(private _http: HttpClient) { }

  shareCount() {
    return this.transaction_count;
  }
  addToCount(number) {
    this.transaction_count += 1
  }

  shareTransactionsList() {
    return this.transactions;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
    console.log(this.transactions)
  }

  findTransaction(tId) {
    for (var i = 0;i<this.transactions.length;i++) {
      if (this.transactions[i].id == tId) {
        console.log(this.transactions[i]);
        return this.transactions[i];
      }
      else {
        console.log("can't find transaction")
      }
    }

  }

  shareBalanceNumber() {
    return this.balance;
  }

  addToBalance(number) {
    this.balance = this.balance + number;
  }

  removeFromBalance(number) {
    this.balance = this.balance - number;
  }

  shareValue() {
    return this.coinValue;
  }

  addToValue(number) {
    this.coinValue = this.coinValue + number;
    console.log("Coin value is",this.coinValue)
  }
  removeFromValue(number) {
    this.coinValue = this.coinValue - number;
    console.log("Coin value is",this.coinValue)
  }
}
