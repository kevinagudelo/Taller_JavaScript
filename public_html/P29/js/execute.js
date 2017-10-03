var arrangement = [];
function menu() {
  let option = parseInt(prompt(`1. Enter Book
   2. Search for book by name
   3. Find book by code
   0. Exit Program`));
  return option;
}
function ingresum() {
  let code = parseInt(prompt('What is your new book code?'));
  let name = prompt('What is the name of your new book');

  let data = {
    name,
    code
  };
  if (localStorage.length === 0) {
    arrangement = [
      data = {
        name,
        code
      }
    ];
  } else {
    arrangement.push(data);
  }
  console.log(typeof (arrangement));
  localStorage.setItem('data', JSON.stringify(arrangement));

  validate();
}

function name() {
  let find = prompt('Which book do you want to search?');
  arrangement = JSON.parse(localStorage.getItem('data'));
  let cont = 0;
  for (let array in arrangement) {
    if (find === arrangement[array].name) {
      console.log("hola");
      cont++;
    }
  }
  console.log(cont === 0 ? 'book is not registered' : `book is already registered, ${cont} times`);
  validate();
}
function code() {
  let find = parseInt(prompt('Enter the book code to search'));
  arrangement = JSON.parse(localStorage.getItem('data'));
  let cont = 0;
  for (let array in arrangement) {
    if (find === arrangement[array].code) {
      cont++;
    }
  }
  console.log(cont === 0 ? 'book not registered' : `book is already registered, ${cont} times`);
  validate();
}
function validate() {
  let option = menu();
  switch (option) {
    case 1:
      ingresum();
      break;
    case 2:
      name();
      break;
    case 3:
      code();
      break;
    case 0:
      alert('Bye');
      break;
    default:
      validate();
      break;
  }
}
validate();