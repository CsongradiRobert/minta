import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  
nev: string ="István";
msg: string;
  constructor(){
    
  }
  

  ngOnInit(): void {

   
  }
  clickEvent(){
    let nev: string = ((<HTMLInputElement>document.getElementById('nev'))!.value).trim(); /* Név beolvasása */
    let kor: string = ((<HTMLInputElement>document.getElementById('kor'))!.value).trim(); /* Kor beolvasása */
    let email: string = ((<HTMLInputElement>document.getElementById('emailCim'))!.value).trim(); /* Email-cím beolvasása */
    let telefonszam: string = ((<HTMLInputElement>document.getElementById('telefonszam'))!.value).trim(); /* Telefonszám beolvasása */

    /* Űrlapból kinyert adatok kiíratása: */
    // console.log(`Név: ${nev} Kor: ${kor} E-mail: ${email} Telefonszám: ${telefonszam}`); 

    /* Adatok érvenyesítése: */
    /* E-mail cím érvényesítő.  Forrás: https://regex101.com/r/oxcj69/1 */
    const emailValidalo = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    /* Telefonszám érvényesítő. Forrás: https://regex101.com/r/Dy4p8L/1 */
    const telefonszamValidalo = new RegExp(/^(\+36)(\d{1,2}|(\(\d{1,2}\)))(\d){7}$/);
    /* Kor érvényesítő. Saját kód: */
    const korErvenyes = 1 <= Number(kor) && Number(kor) <= 200; /* Életkor érvényesítő */

    if (nev === "" || kor === "" || email === "" || telefonszam === "") {
        alert("Hiba: Nincs minden mező kitöltve!");
    }
    else if (!emailValidalo.test(email)) { /* Teszteljük a megadott e-mail cím formátumának helyességét */
        alert("Hiba: A megadott e-mail cím formátuma nem megfelelő!");
    }
    else if (!korErvenyes) { /* Teszteljük a megadott kor helyességét */
        alert("Hiba: Érvénytelen életkor lett megadva!");
    }
    else if (!telefonszamValidalo.test(telefonszam)) { /* Teszteljük a megadott telefonszám formátumának helyességét */
        alert("Hiba: A megadott telefonszám formátuma nem megfelelő!");
    }
    else {
        alert("Regisztráció sikeresen megtörtént!");
    }
  
}
}





