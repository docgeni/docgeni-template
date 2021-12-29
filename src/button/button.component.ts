import { Component, OnInit, HostBinding, Input, ElementRef } from '@angular/core';

/**
 * Button component
 */
@Component({
    selector: 'alib-button,[alibButton]',
    template: '<ng-content></ng-content>'
})
export class AlibButtonComponent implements OnInit {
    @HostBinding(`class.dg-btn`) isBtn = true;

    private type: string;

    /**
     * Alias for Button type, `'primary' | 'info' | 'success' | 'waring' | 'danger'`
     */
    @Input() set alibButton(value: string) {
        if (this.type) {
            this.elementRef.nativeElement.classList.remove(`dg-btn-${this.type}`);
        }
        this.type = value;
        this.elementRef.nativeElement.classList.add(`dg-btn-${this.type}`);
    }

    /**
     * Button type, `'primary' | 'info' | 'success' | 'waring' | 'danger'`
     * @type string
     */
    @Input() alibType: 'primary' | 'info' | 'success' | 'waring' | 'danger' = 'primary';

    constructor(private elementRef: ElementRef<HTMLElement>) {}

    ngOnInit(): void {}
}
