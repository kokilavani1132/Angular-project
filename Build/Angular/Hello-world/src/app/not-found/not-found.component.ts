import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{
  
  @Input() visible:boolean = false;
  @Input() notFoundMessage: string = "Nothing Found!";
  @Input() resetLinkText: string = "Reset";
  @Input() resetLinkRoute: String="/";

  constructor() { }

  ngOnInit(): void {

  }

}
