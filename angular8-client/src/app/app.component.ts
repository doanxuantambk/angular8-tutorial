import {Component, OnInit} from '@angular/core';
// import * as $ from 'jquery';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  title = "Xin chao";

  ngOnInit() {
    $(document).ready(function() {

      $('.multi-item-carousel').carousel({
        interval: false
      });

      $('.multi-item-carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length>0) {
          next.next().children(':first-child').clone().appendTo($(this));
        } else {
          $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
      });

    });
  }
}
