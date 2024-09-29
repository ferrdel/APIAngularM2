import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [NgIf,NgFor],
  providers: [PersonService],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent  implements OnInit{
  person: any = null;

  constructor(private personService : PersonService){}

  ngOnInit(): void {
    this.personService.getAllPerson().subscribe(
      (data) => {
        this.person = data;
      },
      (error) =>{
        console.error("---> ERROR DE DATOS!::: ",error);
      }
    )
  }
}
