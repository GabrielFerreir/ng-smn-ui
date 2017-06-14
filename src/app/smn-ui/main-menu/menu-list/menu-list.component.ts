import { Component, Input, ViewEncapsulation, OnInit, Output, EventEmitter, Injectable } from '@angular/core';

@Component({
	selector: 'ui-menu-list',
	templateUrl: './menu-list.component.html',
	styleUrls: ['./menu-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class MenuListComponent implements OnInit {
	@Input() list: any = '';
	@Input() parentLevel: any = '';

	level: any;
	item: any;
	isOpened: boolean;

	constructor() {}

	ngOnInit() {
		this.level = this.parentLevel + 1;
	}

	menuEvent(event) {
		this.isOpened = event.menuOpened;
	}
}