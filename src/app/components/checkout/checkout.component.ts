import { Component, OnInit } from '@angular/core';
import { PagoInterface } from '../../models/pago-interface'; 
import { OrderInterface } from '../../models/order-interface'; 
import { UserWService } from "../../services/user-w.service";
import { DataApiService} from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from  '@angular/common/http';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ScrollTopService }  from '../../services/scroll-top.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 ngFormCheckout: FormGroup;
   submitted = false;
  constructor(
  	 	public _uw:UserWService,
  	private dataApi: DataApiService,
  	private location: Location,
    private router: Router, 
    public scrollTopService:ScrollTopService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder
  	) { }
 public aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }

  public order : OrderInterface={
    amount:0,
    idOrder:0,
      name:"",
      lastName:"",
      companyName:"",
      provincia:"",
      address:"",
      city:"",
      // check:[],
      phone:"",
      email:"",
      // globalPrice:0,
      // images:[],
      notes:""
      // presentacion:"",
      // new:true,
      // status:"",
      // tallas:[],
      // typePrice:"global",
      // weight:""
    };
 public pay : PagoInterface ={
        pagoImage:[],
      npedido:""
    };

    public sendCheckout(){

      
         this.order = this.ngFormCheckout.value;
         this.order.amount=this._uw.subTotal;
         this.order.idOrder=this.aleatorio(10000,99999);



               this.dataApi.saveOrder(this.order)
        .subscribe(
        );
      //      this.dataApi.sendPay(this.order).subscribe(
      // );
      let amount = this._uw.subTotal;
      this.router.navigate(['http://localhost:9000/index.php?amount=${amount}']);

    }

    public setTransf(){
    	this._uw.transf=true;
    	this._uw.webpay=false;
    	this._uw.methodSeted=true;
    }
	public setWebpay(){
    	this._uw.transf=false;
    	this._uw.webpay=true;
	    this._uw.methodSeted=true;
    }

    public payment(){
      this.pay.amount = this._uw.subTotal;
      this.dataApi.sendPay(this.pay).subscribe(
      );
      console.log("monto enviado:"+this.pay.amount);
      // this.router.navigate(['http://localhost:9000']);

    }


 get fval() {
  return this.ngFormCheckout.controls;
  }
  ngOnInit() {
    this.ngFormCheckout = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      // provincia:['', [Validators.required]],
      address: ['',[Validators.required]],
      city: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      email: ['',[Validators.required]],
      notes: ['',[Validators.required]]
      });

  	this._uw.methodSeted=false;
  }

}
