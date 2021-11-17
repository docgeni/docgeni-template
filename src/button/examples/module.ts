import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlibButtonBasicExampleComponent } from './basic/basic.component';
import { AlibButtonModule } from '@docgeni/alib/button';
const COMPONENTS = [AlibButtonBasicExampleComponent];

@NgModule({
    declarations: COMPONENTS,
    imports: [CommonModule, AlibButtonModule],
    exports: COMPONENTS,
    providers: []
})
export class AlibButtonExamplesModule {}
