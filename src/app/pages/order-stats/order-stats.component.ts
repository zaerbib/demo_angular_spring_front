import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/api/order.service';
import { Router } from '@angular/router';
import { NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';
import {mergeMap} from 'rxjs/operators';


@Component({
	selector: 's-order_stats-pg',
	templateUrl: './order-stats.component.html',
    styleUrls: [ './order-stats.component.scss'],
})

export class OrderStatsComponent implements OnInit {
    view: [number,number] = [460, 180];
    ordersByStatusData : any[] = [];
    ordersByPaymentData: any[] = [];
    ordersByCountryData: any[] = [];
    colorScheme = {
        domain: ['#007cbb', '#61c673', '#ff8e28', '#ef2e2e'],
        group: ScaleType.Ordinal,
        selectable: true,
        name: 'Customer Usage'
    };
    barColorScheme = {
        domain: ['#007cbb'],
        group: ScaleType.Ordinal,
        selectable: true,
        name: 'Customer Usage'
    }

    constructor(private router: Router, private orderService: OrderService) { }

    ngOnInit() {
        var me = this;
        this.getPageData()
    }

    getPageData() {
        var me = this;

        /**
         * This is an Example of sequencing RxJS observable using mergeMap
         * (We are sequencing the API calls as the H2 DB used by the backend is failing to serve multiple request at once)
         */
        me.orderService.getOrderStats("status")
        .pipe(
          mergeMap(function(statusData: { items: any[]; }) {
            me.ordersByStatusData = statusData.items;
            console.log("Received Orders By Status");
            return me.orderService.getOrderStats("paytype");
        })).pipe(
          mergeMap( function(payTypeData: { items: any[]; }) {
            me.ordersByPaymentData = payTypeData.items;
            console.log("Received Orders By Payment Type");
            return me.orderService.getOrderStats("country")
        })).subscribe(function(countryData: { items: any[]; }){
            me.ordersByCountryData = countryData.items;
            console.log("Received Orders By Country");
        });
    }


  }