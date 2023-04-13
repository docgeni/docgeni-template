import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlibButtonModule } from '@docgeni/alib/button';

@Component({
    selector: 'alib-button-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css'],
    standalone: true,
    imports: [CommonModule, AlibButtonModule]
})
export class AlibButtonBasicExampleComponent {
    constructor() {}
}
