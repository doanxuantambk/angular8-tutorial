import { Component, OnInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {

      $('ul.nav li a').click( function() {
        $('.nav li.active').removeClass('active');
        $(this).parent().addClass('active');
      } );
    });
  }

}