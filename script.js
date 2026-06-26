function startGame(){
  const secretNumber = Math.floor( Math.random() * 100 + 1);
  let attempts = 7;
  let isWin = false;

  do {
    const rawInput = prompt("Введи число от 1 до 100");

    if(rawInput =="" || rawInput == null){
      alert("Ошибка! Вы ничего не ввели!");
      continue;
    }

    const userNumber = Number(rawInput);
    
    if(Number.isNaN(userNumber)) {
      alert("Ошибка! Введите число!");
      continue;
    }

    --attempts;

    if(userNumber < secretNumber) {
      alert(`Моё число больше!`);
    }
    else if(userNumber > secretNumber) {
      alert(`Моё число меньше!`);
    }
    else {
      isWin = true;
      break;
    }

    break;
  } while (true);

    if(isWin) {
      alert("Поздравляю! Вы отгадали число!");
    }
    else {
      alert(`К сожалению вы проиграли. Было загадано число ${secretNumber}`);
    }
    
}


startGame();

