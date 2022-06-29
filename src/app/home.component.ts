import { Component, ViewEncapsulation } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';

import { LoginService   } from './services/api/login.service';
import { UserInfoService} from './services/user-info.service';

import { mergeMap } from 'rxjs/operators';
import { map } from 'rxjs/operators'; 
import { filter } from 'rxjs/operators';

@Component({
  selector   : 'home-comp',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent   {

    public showAppAlert:boolean = false;
    public appHeaderItems=[
        {
            label   : 'Dashboard',
            href    : '/home/dashboard',
            subNav  : [
                { label:"Order Stats"  , href:"/home/dashboard/order"  },
                { label:"Product Stats", href:"/home/dashboard/product"}
            ]
        },
        { label: 'Orders'   , href: '/home/orders'    , subNav: []},
        { label: 'Products' , href: '/home/products'  , subNav: []},
        { label: 'Customers', href: '/home/customers' , subNav: []},
        { label: 'Employees', href: '/home/employees' , subNav: []}
    ];

    public selectedHeaderItemIndex:number=0;
    public selectedSubNavItemIndex:number=1;
    public userName: string="";

    constructor(
        private router:Router,
        private activeRoute:ActivatedRoute,
        private loginService:LoginService,
        private userInfoService:UserInfoService
    ) {
        // This block is to retrieve the data from the routes (routes are defined in app-routing.module.ts)
        router.events
        .pipe(
          filter((event: any) => event instanceof NavigationEnd),
          map( _ => this.router.routerState.root),
          map((route: { firstChild: any; }) => {
            while (route.firstChild) route = route.firstChild;;
            return route;
          })
        )
        .pipe(mergeMap( (route: { firstChild: any; }) => route.firstChild))
        .subscribe(data  => {
            console.log("Route data===: ", data);
            
        });
        this.userName = this.userInfoService.getUserName();

    }

    navbarSelectionChange(val: any){
        // console.log(val);
    }

    closeAppAlert(){
        this.showAppAlert=false;
    }

}