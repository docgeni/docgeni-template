import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocgeniTemplateLibBasicExampleComponent } from './basic/basic.component';
import { DocgeniTemplateModule } from 'docgeni-template/lib';
const COMPONENTS = [DocgeniTemplateLibBasicExampleComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, DocgeniTemplateModule],
  exports: COMPONENTS,
  providers: [],
})
export class DocgeniTemplateLibExamplesModule {}
