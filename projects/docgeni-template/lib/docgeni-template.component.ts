import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-docgeni-template',
  template: ` <p>{{ title }} works!</p> `,
  styles: [],
})
export class DocgeniTemplateComponent implements OnInit {
  @Input() title = 'docgeni-template';
  constructor() {}

  ngOnInit(): void {}
}
