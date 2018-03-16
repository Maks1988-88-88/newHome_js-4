let alphabet = "qwertyuiop[]asdfghjkl;'\zxcvbnm,./";
let key_1;
let key_2;
let key_3;
let newAlphabet = alphabet.split("");

				// Ex1 Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet) которая на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.


function addKeyboardLayout(alphabet) {
  
  // let newAlphabet = alphabet.split("");
  console.log(newAlphabet);
  key_1 = newAlphabet.slice(0,12);
  console.log(key_1);
  key_2 = newAlphabet.slice(12,23);
  console.log(key_2);
  key_3 = newAlphabet.slice(23,33);
  console.log(key_3); 
  
}
addKeyboardLayout(alphabet);


				// Ex2 Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и возвращает случайную букву из этой строки.

function getRandCharInRow(row) {
  let ask = prompt('Choose keyboard 1-3');
  if ( ask == 1 ) {
    let line_1 = key_1[Math.floor(Math.random()*key_1.length)];
    alert('Случайная клавиша первой строки ' + line_1);
  }
   else if ( ask == 2 ) {
    let line_2 = key_2[Math.floor(Math.random()*key_2.length)];
    alert('Случайная клавиша второй строки ' + line_2);
  }
  
    else if ( ask == 3 ) {
     let line_3 = key_3[Math.floor(Math.random()*key_3.length)];
    alert('Случайная клавиша третей строки '+ line_3);
  }
  
  else {
    alert('Error');
  }
  
  console.log(ask)
    
  // console.log(aks_key);
}

getRandCharInRow();

					// Ex3 Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.

function getRandCharInAlph(){
	let line_all = newAlphabet[Math.floor(Math.random()*newAlphabet.length)];
	alert('Случайнай клавиша всех строк ' + line_all);
}

getRandCharInAlph();