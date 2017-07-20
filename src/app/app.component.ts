import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedIndex: number;
  selectedIndexTeste2: number;

  title = 'app works!';

  input1: string;
  input2: string;
  input3: string;
  input4: string;

  selecionouAba2(tab) {
    console.log(tab.heading);
  }

  selecionouAba(tab) {
    console.log('Evento principal ' + tab.heading);
  }

  activeTab(index) {
    this.selectedIndex = index;
  }

  ngOnInit() {
    this.selectedIndexTeste2 = 1;
  }

  imAlert(str) {
    console.log(str + new Date());
  }
}
