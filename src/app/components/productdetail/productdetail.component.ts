import { AddInterface } from '../../models/add-interface'; 
import { ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { HttpClient } from  '@angular/common/http';
import { isError } from "util";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';
declare var $: any;
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  constructor(
    public scrollTopService:ScrollTopService,
    private router: Router, 
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService,
    private formBuilder: FormBuilder
  	) { }
    public tix:TixInterface;








    loadAPI = null;
    url = "assets/assetslameseria/plugins/jquery-1.12.4.min.js";
    url2 = "assets/assetslameseria/plugins/owl-carousel/owl.carousel.min.js";
    url3 = "assets/assetslameseria/plugins/popper.min.js";
    url4 = "assets/assetslameseria/plugins/imagesloaded.pkgd.js";
    url5 = "assets/assetslameseria/plugins/masonry.pkgd.min.js";
    url6 = "assets/assetslameseria/plugins/isotope.pkgd.min.js";
    url7 = "assets/assetslameseria/plugins/jquery.matchHeight-min.js";
    url8 = "assets/assetslameseria/plugins/slick/slick/slick.min.js";   
    url9= "assets/assetslameseria/plugins/jquery-bar-rating/dist/jquery.barrating.min.js";
    url10= "assets/assetslameseria/plugins/slick-animation.min.js";
    url11= "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.3.2/js/lightgallery.js";
    url12="assets/assetslameseria/plugins/jquery-ui/jquery-ui.min.js";
      url13 = "assets/assetslameseria/plugins/sticky-sidebar/dist/sticky-sidebar.min.js";
      url14="assets/assetslameseria/plugins/YTPlayer/dist/jquery.mb.YTPlayer.min.js";
    url15="assets/assetslameseria/plugins/gmap3.min.js";
    url16 = "assets/assetslameseria/js/main.js";
  ngOnInit() {
    if (this._uw.loaded==true){
        this.loadAPI = new Promise(resolve => {
          this.loadScript();
          this.loadScript11();
          this.loadScript2();
          this.loadScript3();
          this.loadScript4();
          this.loadScript5();
          this.loadScript6();
          this.loadScript7();
          this.loadScript8();
          this.loadScript9();
          this.loadScript10();
          this.loadScript12();
          this.loadScript13();
          // this.loadScript14();
          // this.loadScript15();
          this.loadScript16();
        });
      }
       this._uw.loaded=true;
  	 this.getDetails(this.route.snapshot.paramMap.get('id'));
  }

    getDetails(id: string){
    this.dataApi.getTixById(id).subscribe(tix => (this._uw.tixPreview = tix));
  }
     public loadScript() {
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
    public loadScript2() {
      let node = document.createElement("script");
      node.src = this.url2;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
     public loadScript3() {
      let node = document.createElement("script");
      node.src = this.url3;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
     public loadScript4() {
      let node = document.createElement("script");
      node.src = this.url4;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
     public loadScript5() {
      let node = document.createElement("script");
      node.src = this.url5;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
     public loadScript6() {
      let node = document.createElement("script");
      node.src = this.url6;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
      public loadScript7() {
      let node = document.createElement("script");
      node.src = this.url7;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
     public loadScript8() {
      let node = document.createElement("script");
      node.src = this.url8;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
     public loadScript9() {
      let node = document.createElement("script");
      node.src = this.url9;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
     public loadScript10() {
      let node = document.createElement("script");
      node.src = this.url10;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
     public loadScript11() {
      let node = document.createElement("script");
      node.src = this.url11;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
      public loadScript12() {
      let node = document.createElement("script");
      node.src = this.url12;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
     public loadScript13() {
      let node = document.createElement("script");
      node.src = this.url13;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
      public loadScript14() {
      let node = document.createElement("script");
      node.src = this.url14;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
      public loadScript15() {
      let node = document.createElement("script");
      node.src = this.url15;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
      public loadScript16() {
      let node = document.createElement("script");
      node.src = this.url16;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
}
