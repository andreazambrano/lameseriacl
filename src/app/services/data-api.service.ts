import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TixInterface } from '../models/tix-interface';
import { SaleInterface } from '../models/sale-interface';
import { OrderInterface } from '../models/order-interface';
import { InfoInterface } from '../models/info-interface';
import { UserWService } from "./user-w.service";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	info: Observable<any>;
	tixs: Observable<any>;
	tix: Observable<any>;
	sale: Observable<any>;
	order: Observable<any>;
  constructor(
  	public _uw:UserWService,
  	private http: HttpClient, 
  	private authService:AuthService
  	) {}


//   const httpOptions = {
//   headers: new HttpHeaders({ 
//     'Access-Control-Allow-Origin':'*'
//   })
// };
	// headers : HttpHeaders = new HttpHeaders({
 //  		"Content-Type":"application/json",
 //  		Authorization: this.authService.getToken()
 //  		});

	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json",
  		"Access-Control-Allow-Origin":"*"
  		});
	

  	// headers : HttpHeaders = new HttpHeaders({
  	// 	"Content-Type":"application/json",
  	// 	  'Access-Control-Allow-Origin':'*',
  	// 	Authorization: this.authService.getToken()
  	// 	});
	getAllTixs(){
		const url_api = 'https://db.lameseria.cl:3029/api/tixes?filter[where][status]=activated';
		return this.http.get(url_api);
	}
	// getAllTixsNew(){
	// 	const url_api = 'https://db.lameseria.cl:3029/api/tixes?filter[where][and][0][status]=activated&filter[where][and][1][colection]=new';
	// 	return this.http.get(url_api);
	// }
	getInfo(){
		const url_api=`https://db.lameseria.cl:3029/api/infos/`;
		this.info = this.http.get(url_api);
		return (this.info);
	}
	saveSale(sale :SaleInterface){
		const url_api='https://db.lameseria.cl:3029/api/sale';
		return this.http
		.post<SaleInterface>(url_api, sale)
		.pipe(map(data => data));
	}
	saveOrder(order :OrderInterface){
		const url_api='https://db.lameseria.cl:3029/api/order';
		return this.http
		.post<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
	sendMailNewBookAppToAdmin(book){
		const url_api='https://db.lameseria.cl:3006/newBookAppToAdmin';
		return this.http
		.post(url_api, book)
		.pipe(map(data => data));
	}
	updateOrder(order :OrderInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.lameseria.cl:3029/api/order/${id}`;
		return this.http
		.put<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
	getOrderByNpedido(npedido: string){
		const url_api = `https://db.lameseria.cl:3029/api/order?filter[where][npedido]=${npedido}`;
		this.order = this.http.get(url_api);
		return (this.order);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}
		getTixById(id:string){
		let indice = id;
		const url_api=`https://db.lameseria.cl:3029/api/tixes/${indice}`;
		this.tix = this.http.get(url_api);
		return (this.tix);
	}
	sendPay(pay){
		let amount = pay.amount;
		const url_api=`http://localhost:9000/index.php?amount=${amount}`;
		// this.router.navigate(['http://localhost:9000']);
		return this.http
		.post(url_api, pay,{headers: this.headers})
		.pipe(map(data => data));
	}

		// let indice = id;
		// const url_api=`https://db.lameseria.cl:3018/api/book/${indice}`;
		// this.book = this.http.get(url_api);
		// return (this.book);


		// this.info = this.http.get(url_api);
		// return (this.info);
}