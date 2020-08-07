import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { UserWService } from "../../services/user-w.service";
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(
 public _uw:UserWService,
 	private location: Location,
    private router: Router, 
  private dataApi: DataApiService
  	) { }

  ngOnInit() {
  }

}
