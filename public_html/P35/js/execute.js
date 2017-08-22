 class camila {
   constructor (){
     this.array = [];
   }
 

 menu() {
   let option = parseInt(prompt(`1. Enter Book
   2. Search for book by name
   3. Find book by code
   0. Exit Program`));
   return option;
 }
 
 ingresum() {
   let code = parseInt(prompt('What is your new book code?'));
   let name = prompt('What is the name of your new book');
 
   this.data = {
     name,
     code
   };
   if (localStorage.length === 0) {
     this.array = [
       this.data = {
         name,
         code
       }
     ];
   } else {
     this.array.push(this.data);
   }
   console.log(typeof (this.array));
   localStorage.setItem('data', JSON.stringify(this.array));
 
   this.validate();
 }
 
  name() {
   let find = prompt('Which book do you want to search?');
   this.array = JSON.parse(localStorage.getItem('data'));
   let cont = 0;
   for (let arraye in this.array) {
     if (find === this.array[arraye].name) {
       cont++;
     }
   }
   console.log(cont === 0 ? 'book is not registered' : `book is already registered, ${cont} times`);
   this.validate();
 }
  code() {
   let find = parseInt(prompt('Enter the book code to search'));
   this.array = JSON.parse(localStorage.getItem('data'));
   let cont = 0;
   for (let arraye in this.array) {
     if (find === this.array[arraye].code) {
      cont++;
     }
   }
   console.log(cont === 0 ? 'book not registered' : `book is already registered, ${cont} times`);
   this.validate();
 }
  validate() {
    this.option = this.menu();
   switch (this.option) {
     case 1:
       this.ingresum();
       break;
     case 2:
       this.name();
       break;
     case 3:
       this.code();
       break;
     case 0:
       alert('Bye');
       break;
     default:
       this.validate();
       break;
   }
 }
 }
 let agudelo = new camila ();
 
 agudelo.validate();