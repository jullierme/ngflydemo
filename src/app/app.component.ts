import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedIndex:number;
  selectedIndexTeste2:number;

  title = 'app works!';

  selecionouAba2(tab) {
    console.log(tab.heading);
  }

  selecionouAba(tab) {
    console.log('Evento principal ' + tab.heading);
  }

  activeTab(index) {
    this.selectedIndex = index;
  }

  ngOnInit(){
    this.selectedIndexTeste2 = 1;
  }
}
