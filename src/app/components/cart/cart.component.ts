import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService} from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
  	 public _uw:UserWService,
  	 private dataApi: DataApiService,
  	 private location: Location,
    private router: Router, 
  	) { }
  public tixs:TixInterface;

  ngOnInit() {
  	
  }

}
