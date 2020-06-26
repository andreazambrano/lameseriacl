import { Component, OnInit } from '@angular/core';
import { DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { Location } from '@angular/common';
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
  	private dataApi: DataApiService,
  	private location: Location,
    private route:ActivatedRoute,
    private router: Router,
    public _uw:UserWService

  	) { }


  public tixs:TixInterface;

  getAllTixs(){
        this.dataApi.getAllTixs().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
       }else{
        this.tixs=res;            
        }
     });  
    }

  ngOnInit() {
  	this.getAllTixs();
  }




}
