console.log(`O! Widzę dobry ziomek. Skoro tu wszedłeś to już umiesz klikać w devtoolsy ;)
Pozdro!`);

const footerTitle = document.querySelector('.footer__paragraph--js');


const IdentifyPerson = (age, name) => {
  const matured = age >= 18 && age <= 60;
  const old = age >= 61 && age <= 75 || age >= 75;

  if(matured) {
    console.log(`Witaj ${name}, dorosły człowieku! Twój obecny wiek to ${age}.`);
  } else if(old) {
    console.log(`Witaj ${name}, starszy człowieku! Twój obecny wiek to ${age}.`);
  } else {
    console.log(`Witaj ${name}, młoda osóbko! Twój wiek to ${age}.`);
  }

  // switch(true) {
  //   case (age >= 35 && age <= 40):
  //     console.log(`Witaj, ${name} dorosły człowieku! Twój obecny wiek to ${age}.`);
  //   break;
  //   case (age >= 41 && age <= 70 || age >= 70):
  //     console.log(`Witaj, ${name} starszy człowieku! Twój obecny wiek to ${age}.`);
  //   break;
    
  //   default:
  //     console.log(`Witaj, ${name} młody człowieku! Twój wiek to ${age}.`);
  // }
}

IdentifyPerson(61, 'Paweł');
IdentifyPerson(32, 'Jarek');
IdentifyPerson(17, 'Natalia');

// console.log(footerTitle.innerHTML);
footerTitle.innerHTML = 'Strona domowa Jarka Kajko, wszystkie treści są własnością autora, ale śmiało można kopiować na pełnym legalu.';

const navigationBurger = document.querySelector('.hamburger__icon--js');

navigationBurger.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.navigation__list--js');
  const buttonActive = document.querySelector('.button');
  navigationList.classList.toggle('navigation__list--visible');
  buttonActive.classList.toggle('active');
  buttonActive.classList.toggle('not-active');

});