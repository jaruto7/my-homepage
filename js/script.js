console.log(`O! Widzę dobry ziomek. Skoro tu wszedłeś to już umiesz klikać w devtoolsy ;)
Pozdro!`);

const footerTitle = document.querySelector('.footer__paragraph--js');


IdentifyPerson = (age, name) => {
  const matured = age >= 35 && age <= 40;
  const old = age >= 41 && age <= 70 || age >= 70;

  // if(matured) {
  //   console.log(`Witaj, ${name} dorosły człowieku! Twój obecny wiek to ${age}.`);
  // } else if(old) {
  //   console.log(`Witaj, ${name} starszy człowieku! Twój obecny wiek to ${age}.`);
  // } else {
  //   console.log(`Witaj, ${name} młody człowieku! Twój wiek to ${age}.`);
  // }

  switch(age, name) {
    case age >= 35 && age <= 40:
      console.log(`Witaj, ${name} dorosły człowieku! Twój obecny wiek to ${age}.`);
    break;
    case age >= 41 && age <= 70 || age >= 70:
      console.log(`Witaj, ${name} starszy człowieku! Twój obecny wiek to ${age}.`);
    break;
    
    default:
      console.log(`Witaj, ${name} młody człowieku! Twój wiek to ${age}.`);
  }
}

IdentifyPerson(36, 'Paweł');

// console.log(footerTitle.innerHTML);
footerTitle.innerHTML = 'Strona domowa Jarka Kajko, wszystkie treści są własnością autora, ale śmiało można kopiować na pełnym legalu.';