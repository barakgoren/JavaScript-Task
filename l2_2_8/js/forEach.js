const fruits_ar = ["apple","banana","melon","kiwi"];
const products_ar = [
  {name:"bamba",price:5},
  {name:"cola",price:8},
  {name:"milk",price:6},
]

const init = () => {
  for(let i = 0; i< fruits_ar.length;i++){
    let val = fruits_ar[i]
    console.log(val);
  }

  // זהה לפור שנמצא למעלה
  // forEach -> עובר בלולאה על כל התאים במערך
  // ובכל אינטרציה מפעיל פונקציה שמקבל כפרמטר את הערך שיש בתוך המערך
  fruits_ar.forEach((val) => {
    console.log(val);

  })

  products_ar.forEach((item) => {
    console.log(item);
  })
  
}


init();