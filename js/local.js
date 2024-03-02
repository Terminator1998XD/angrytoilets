var __localdata__ = {
  "ru":{
    win:"Вы победили!",
    lose: "Вы проиграли!",
    lvl:"Пройди предыдущие уровни, чтобы разблокировать!",
    adv:"Разблокировать следующий уровень, за рекламу",
    tut:"Подсказка",
    inf:"Результаты",
    inf0: "Текущий результат: ",
    inf1: "Рекордный результат: ",
    infs: " звёзд"
  },
  "en":{
    win:"You won!",
    lose: "You lose!",
    lvl: "Complete the previous levels to unlock!",
    adv: "Unlock the next level, for advertising",
    tut:"Hint",
    inf:"Results",
    inf0: "Current result: ",
    inf1:"Record result: ",
    infs: " stars"
  }
}

function TXT(id){
  return __localdata__[lang][id];
}

function getLocalizationButtons(){
  return $('<div>').css({'position':'absolute', 'right': '0', 'top': '0'}).append([
    $('<p>').append($('<button>').text("Русский").click(function(){
      window.lang = 'ru';
      localStorage['savelang'] = window.lang;
      showMainMenu();
      $('#myalert').hide().html('Установлен русский язык').show(100);
    })),
    $('<p>').append($('<button>').text("English").click(function(){
      window.lang = 'en';
      localStorage['savelang'] = window.lang;
      showMainMenu();
      $('#myalert').hide().html('The English language is set').show(100);
    }))
  ]);
}
