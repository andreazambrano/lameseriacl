import { ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataApiService} from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";
declare var $: any;
@Component({
  selector: 'app-testapp',
  templateUrl: './testapp.component.html',
  styleUrls: ['./testapp.component.css']
})
export class TestappComponent implements OnInit {

  constructor(
       private dataApi: DataApiService,
    private location: Location,
    private route:ActivatedRoute,
    private router: Router, 
    public _uw:UserWService
     ) { }
  public tixs:TixInterface;
public seted=false;
   loadAPI = null;  

   url= "assets/assetslameseria/plugins/jquery-1.12.4.min.js";
   
   url2= "assets/assetslameseria/plugins/owl-carousel/owl.carousel.min.js";
   url2b= "assets/assetslameseria/plugins/popper.min.js";

   url3= "assets/assetslameseria/plugins/slick/slick/slick.min.js";
   url3b= "assets/assetslameseria/plugins/jquery-bar-rating/dist/jquery.barrating.min.js";

   url4= "assets/assetslameseria/plugins/slick-animation.min.js";
   url4b= "assets/assetslameseria/plugins/lightGallery-master/dist/js/lightgallery-all.min.js";
   
   url5= "assets/assetslameseria/plugins/jquery-ui/jquery-ui.min.js";
   
   url6= "assets/assetslameseria/plugins/sticky-sidebar/dist/sticky-sidebar.min.js";

   url7 = "assets/assetslameseria/js/main.js";
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
    // this._uw.tixPreview.quantity=1;
 if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
            this.loadScript2b();
            this.loadScript3();
            this.loadScript3b();
            this.loadScript4();
            this.loadScript4b();
            this.loadScript5();
            this.loadScript6();
            this.loadScript7();
          });
        }
        this._uw.loaded=true;
        this.getAllTixs();
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
    public loadScript2b() {
      let node = document.createElement("script");
      node.src = this.url2b;
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
        public loadScript3b() {
      let node = document.createElement("script");
      node.src = this.url3b;
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
    public loadScript4b() {
      let node = document.createElement("script");
      node.src = this.url4b;
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

}
