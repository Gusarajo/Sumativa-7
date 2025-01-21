import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  Titulo = new FormControl('');
  fecha = new FormControl('');
  tasks: any = [];
  constructor() { }
  buttonclick() {
    if (this.Titulo.value && this.fecha.value) {
      const newTask = {
        titulo: this.Titulo.value,
        fecha: this.fecha.value
      };
      this.tasks.push(newTask);
      console.log('se agrego');
      this.Titulo.setValue('');
      this.fecha.setValue('');

    }
  }
}
