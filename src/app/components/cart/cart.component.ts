import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService} from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 
import { AddInterface } from '../../models/add-interface'; 
import { ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from  '@angular/common/http';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ScrollTopService }  from '../../services/scroll-top.service';

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
    public scrollTopService:ScrollTopService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder
  	) { }
  public tixs:TixInterface;
  remove(i){
      this._uw.subTotal=this._uw.subTotal-(this._uw.car[i].cantidad*this._uw.car[i].globalPrice);
      this._uw.car.splice(i, 1);
      this._uw.numProd=this._uw.numProd-1;
      if(this._uw.numProd<1){
        this.router.navigate(['/']);
      }
    } 
   public down(index){
      let id=index;
      if(this._uw.car[id].cantidad>1){      
      this._uw.car[id].cantidad=this._uw.car[index].cantidad-1;
      this._uw.subTotal=this._uw.subTotal-(1*this._uw.car[id].globalPrice);
      }
    }
    public up(index){
      let id=index;
      this._uw.car[id].cantidad=this._uw.car[index].cantidad+1;
      this._uw.subTotal=this._uw.subTotal+(1*this._uw.car[id].globalPrice);
    }
  ngOnInit() {
  }

}
