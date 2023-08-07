import { Component, OnInit, ElementRef } from '@angular/core';

const fireRefreshEventOnWindow = function () {
    const evt = document.createEvent('HTMLEvents');
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};

@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html',
    styleUrls: ['./full-layout.component.scss']
})

export class FullLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() {
       
    }

  
}
