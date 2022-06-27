import { Component, OnInit, Input } from '@angular/core';
@Component({
	selector: 's-badge',
  template: `<span class="s-badge {{badgeCls}}">{{text}}</span>`
})

export class BadgeComponent implements OnInit {
    @Input() 
    public text:string | undefined;
    
    @Input() 
    public badgeCls:string | undefined;

	constructor() { }

	ngOnInit() {

	}
}