import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-page-wrapper',
  templateUrl: './list-page-wrapper.component.html',
  styleUrls: ['./list-page-wrapper.component.scss']
})
export class ListPageWrapperComponent implements OnInit {
    @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
