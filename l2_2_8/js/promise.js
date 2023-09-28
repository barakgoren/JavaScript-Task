const init = () =>{
  isRoomClean(false)
  // אם יש הצלחה
  // כלומר אם הופעל הריסולב
  .then((data) => {
    console.log(data);
  })
  // אם יש טעות כולמר הופעל הריג'קט
  .catch((err) => {
    console.log(err);
  })
}

const isRoomClean = (isClean) => {
  // resolve -> רטרן של הצלחה של הפרומיס
  // reject -> רטרן של כשלון /אי הצלחה של הפרומיס
  return new Promise((resolve,reject) => {
    if(isClean){
      resolve("Good, go play ps 5");
    }
    else{
      // שגיאה /טעות
      reject("Go clean the all house, bad boy !!!");
    }
  })
}

init();