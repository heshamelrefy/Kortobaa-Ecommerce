import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items!: any[] ;
  activeItem!: any;
  ngOnInit(): void {
      
    this.items = [
      { label: 'الاقسام',item:[
        {label:'حريمى'},
        {label:'رجالى'},
      ] },
      { label: 'الرئيسية' },
      { label: 'قائمة الامنيات'},
      { label: 'تواصل معنا' },
      { label: 'من نحن' }
  ];

  this.activeItem = this.items[0];

  }
}
