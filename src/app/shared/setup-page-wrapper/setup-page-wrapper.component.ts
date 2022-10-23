import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-setup-page-wrapper',
  templateUrl: './setup-page-wrapper.component.html',
  styleUrls: ['./setup-page-wrapper.component.scss']
})
export class SetupPageWrapperComponent implements OnInit {
    @Input() title: string = '';
    @Input() flow1ButtonText: string = '';
    @Input() flow2ButtonText: string = '';

    public flow: string | null = null

  constructor() { }

  ngOnInit(): void {
  }

  public startFlow(flow: string) {
      this.flow = flow
  }

}
