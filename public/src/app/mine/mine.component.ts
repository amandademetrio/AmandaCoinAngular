import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  miningAnswer = "";
  coinValue = 1;

  //attributes to display alerts
  success = false;
  failure = false;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.coinValue = this._httpService.shareValue();
  }

  onMine() {
    if (this.miningAnswer == "snakes") {
      this._httpService.addToBalance(1);
      this._httpService.addToValue(2);

      var id = this._httpService.shareCount()

      this._httpService.addTransaction({action:'mined',amount:1,value:this.coinValue,id:id})

      this._httpService.addToCount(1);

      this.failure = false;
      this.success = true;
      return;

    }
    else {
      this.success = false;
      this.failure = true;
      this.miningAnswer = "";
      return;
    }
  }

}
