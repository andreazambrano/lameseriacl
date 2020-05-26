import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-testapp',
  templateUrl: './testapp.component.html',
  styleUrls: ['./testapp.component.css']
})
export class TestappComponent implements OnInit {

  constructor(
     public _uw:UserWService
     ) { }
   loadAPI = null;  
  
   url= "assets/assetslameseria/plugins/jquery-1.12.4.min.js";
   url2= "assets/assetslameseria/plugins/owl-carousel/owl.carousel.min.js";
    url2b= "assets/assetslameseria/plugins/popper.min.js";



   url3= "assets/assetslameseria/plugins/slick/slick/slick.min.js";
   url4= "assets/assetslameseria/plugins/slick-animation.min.js";
   url5= "assets/assetslameseria/plugins/jquery-ui/jquery-ui.min.js";
   url6= "assets/assetslameseria/plugins/sticky-sidebar/dist/sticky-sidebar.min.js";

   url7 = "assets/assetslameseria/js/main.js";
   
  ngOnInit() {
    // this._uw.tixPreview.quantity=1;
 if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
            this.loadScript2b();

            this.loadScript3();
            this.loadScript4();
            this.loadScript5();
            this.loadScript6();
            this.loadScript7();
          });
        }
        this._uw.loaded=true;
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

}
