import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit  {
  public titleName:string='Angular list of prohibited words';
  public classes='header-size ';
  public classes1=' header-words'
  constructor(){}
ngOnInit(): void {
  
}
show():void{

}

}
