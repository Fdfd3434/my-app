import { Component } from '@angular/core';
import internal from 'stream';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
    name:string;
    speed:number;
    model:string;
    colors: Colors;
    options:string[];
    isEdit:boolean = false;

    constructor () {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'M3';

      this.colors = {
        car: 'Білий',
        salon: 'Чорний',
        wheels: 'Срібний'
      }

      this.options = ["ABS", "Автопілот","Autoparking"]

    }


    showEdit() {
      this.isEdit = !this.isEdit;
    }


    addOpt(option:any) {
      this.options.unshift(option);
      return false;
    }


    deleteOpt(option:any) {
      for(let i = 0; i < this.options.length; i++)
      {
        if(this.options[i] == option) 
        {
          this.options.splice(i,1);
          break;
        }
      }
    }



    carSelect(carName:string) {
      if(carName == 'bmw')
      {
        this.name = 'BMW';
        this.speed = 280;
        this.model = 'M5';

        this.colors = {
        car: 'Синій',
        salon: 'Білий',
        wheels: 'Срібний'
        }


        this.options = ["ABS", "Автопілот","Autoparking"]
      }

     
      else if(carName == 'audi'){
        this.name = 'Audi';
        this.speed = 235;
        this.model = 'RS8';

        this.colors = {
        car: 'Білий',
        salon: 'Чорний',
        wheels: 'Срібний'
        }

        this.options = ["ABS", "Автопілот","Autoparking"]
      } else {
        this.name = 'Mercedes';
        this.speed = 180;
        this.model = 'C180';

        this.colors = {
         car: 'Білий',
         salon: 'Чорний',
         wheels: 'Срібний'
        }

        this.options = ["ABS", "Автопілот","Autoparking"]
      }
       
      
    }

    

}


interface Colors {
  car:string;
  salon:string;
  wheels:string;
}
