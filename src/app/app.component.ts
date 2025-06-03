import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Maria';

  // Step1: One way binding of data
    
  person ={
    givenName:'Maria',

    surName:'Vracha',
    age:27,
    email: 'mariavrx36@auebr.gr'
  }
  // Step3: Component Input
  person0: Person ={
    givenName:'Christodoulos',

    surName:'Fragkoylakis',
    age:50,
    email: 'chfra36@auebr.gr',
    address: 'athens'

  
}
 person1: Person  ={
    givenName:"Giannis",

    surName:"Fragkos",
    age:32,
    email: "chfratt36@auebr.gr",
    address:"New york"
 }
 users: Person[] =
  
  [{
  "givenName": "Moselle",
  "surName": "Andrewartha",
  "email": "mandrewartha0@smugmug.com",
  "age": 1,
  "address": "Apt 168"
}, {
  "givenName": "Othelia",
  "surName": "McIlwreath",
  "email": "omcilwreath1@elpais.com",
  "age": 2,
  "address": "Room 857"
}, {
  "givenName": "Clarine",
  "surName": "Gibbens",
  "email": "cgibbens2@deliciousdays.com",
  "age": 3,
  "address": "PO Box 44872"
}, {
  "givenName": "Tootsie",
  "surName": "MacGray",
  "email": "tmacgray3@fda.gov",
  "age": 4,
  "address": "Apt 744"
}, {
  "givenName": "Pearl",
  "surName": "Crilley",
  "email": "pcrilley4@addthis.com",
  "age": 5,
  "address": "Suite 46"
}, {
  "givenName": "Grethel",
  "surName": "Dymick",
  "email": "gdymick5@oaic.gov.au",
  "age": 6,
  "address": "Apt 141"
}, {
  "givenName": "Georgianna",
  "surName": "Biscomb",
  "email": "gbiscomb6@arstechnica.com",
  "age": 7,
  "address": "Suite 91"
}, {
  "givenName": "Kym",
  "surName": "Perillo",
  "email": "kperillo7@amazon.de",
  "age": 8,
  "address": "PO Box 80027"
}, {
  "givenName": "Karin",
  "surName": "Goldhill",
  "email": "kgoldhill8@google.de",
  "age": 9,
  "address": "PO Box 15627"
}, {
  "givenName": "Jecho",
  "surName": "Elby",
  "email": "jelby9@epa.gov",
  "age": 10,
  "address": "16th Floor"
}, {
  "givenName": "Courtnay",
  "surName": "Stampe",
  "email": "cstampea@unc.edu",
  "age": 11,
  "address": "Room 1142"
}, {
  "givenName": "Oriana",
  "surName": "Ewart",
  "email": "oewartb@wisc.edu",
  "age": 12,
  "address": "5th Floor"
}, {
  "givenName": "Diann",
  "surName": "Evemy",
  "email": "devemyc@shutterfly.com",
  "age": 13,
  "address": "Suite 62"
}, {
  "givenName": "Shalna",
  "surName": "Rasch",
  "email": "sraschd@w3.org",
  "age": 14,
  "address": "PO Box 5599"
}, {
  "givenName": "Elspeth",
  "surName": "Boni",
  "email": "ebonie@mediafire.com",
  "age": 15,
  "address": "Suite 46"
}, {
  "givenName": "Carly",
  "surName": "Strauss",
  "email": "cstraussf@cbslocal.com",
  "age": 16,
  "address": "Suite 95"
}, {
  "givenName": "Shoshanna",
  "surName": "Vinau",
  "email": "svinaug@patch.com",
  "age": 17,
  "address": "13th Floor"
}, {
  "givenName": "Garrick",
  "surName": "Zorzetti",
  "email": "gzorzettih@arstechnica.com",
  "age": 18,
  "address": "Suite 96"
}, {
  "givenName": "Jarib",
  "surName": "Clurow",
  "email": "jclurowi@umn.edu",
  "age": 19,
  "address": "Room 187"
}, {
  "givenName": "Vassily",
  "surName": "Barritt",
  "email": "vbarrittj@army.mil",
  "age": 20,
  "address": "15th Floor"
}]
 }
