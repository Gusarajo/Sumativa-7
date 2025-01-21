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
  descripcion = new FormControl('');
  fecha = new FormControl('');
  tasks: any = [];
  constructor() { }
  buttonclick() {
    if (this.Titulo.value && this.descripcion.value && this.fecha.value) {
      const newTask = {
        titulo: this.Titulo.value,
        descripcion: this.descripcion.value,
        fecha: this.fecha.value
      };
      this.tasks.push(newTask);
      console.log('se agrego');
      this.Titulo.setValue('');
      this.descripcion.setValue('');
      this.fecha.setValue('');

    }
  }
}
