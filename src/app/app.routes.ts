import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,
	TopbarComponent,
	ShopComponent,
	// FruitproductsComponent,
	// FruitbannerComponent,
	// FruitbannerboxComponent,
	// FruitcestaComponent,
	// FruitfooterComponent,
	// FruittopbarComponent,
	// FruitcartComponent,
	FooterComponent,
	PagoComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'topbar',component:TopbarComponent},
	{path:'shop',component:ShopComponent},
	// {path:'fruittopbar',component:FruittopbarComponent},
	// {path:'fruitproducts',component:FruitproductsComponent},
	// {path:'fruitbanner',component:FruitbannerComponent},
	// {path:'fruitbannerbox',component:FruitbannerboxComponent},
	// {path:'fruitcesta',component:FruitcestaComponent},
	// {path:'fruitfooter',component:FruitfooterComponent},
	// {path:'fruitcart',component:FruitcartComponent},
	{path:'footer',component:FooterComponent},
	{path:'pago',component:PagoComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

