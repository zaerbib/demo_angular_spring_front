import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/api/product.service';
import { Router } from '@angular/router';
import { NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';

@Component({
	selector: 's-product_stats-pg',
	templateUrl: './product-stats.component.html',
    styleUrls: [ './product-stats.component.scss'],
})

export class ProductStatsComponent {


    public productByQuantityData=[];
    public barColorScheme = {
      domain: ['#007cbb'],
      group: ScaleType.Ordinal,
      selectable: true,
      name: 'Customer Usage'
    };

    constructor(private router: Router, private productService: ProductService ) { }
    ngOnInit() {
        var me = this;
        this.getPageData()
    }

    getPageData() {
        var me = this;
        me.productService.getProductStatsByQuantityOrdered()
        .subscribe(function(countryData){
            me.productByQuantityData = countryData.items;
            console.log("Received Orders By Country");
        });
    }

}