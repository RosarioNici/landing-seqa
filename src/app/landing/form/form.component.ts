import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from './firebase-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {


constructor(private contactMessage: FirebaseServiceService){}


  contactForm!: FormGroup;
  ngOnInit(): void{
    subscribe: this.contactForm = new FormGroup({

  nome: new FormControl(null, Validators.required),
  cognome: new FormControl(null),
  email: new FormControl(null, [Validators.required, Validators.email]),
  messaggio: new FormControl(null , Validators.required),
  provincia: new FormControl(null),
  regione: new FormControl(null, [Validators.required])
})



  }

  onSubmit(){
    this.contactMessage.insertMessage('https://seqa-info-default-rtdb.europe-west1.firebasedatabase.app/contatti.json',
    {nome: this.contactForm.value.nome, cognome: this.contactForm.value.cognome, email: this.contactForm.value.email, messaggio: this.contactForm.value.messaggio,
      regione: this.contactForm.value.regione, provincia: this.contactForm.value.provincia }).subscribe((data)=>{console.log(data)})
      if(this.contactForm.valid){
        this.contactForm.reset()
        alert('Grazei per averci contattato ti risponderemo nel più breve tempo possibile')
      }
  }

form= false
}
