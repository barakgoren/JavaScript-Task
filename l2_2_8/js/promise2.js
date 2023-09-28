// פרומיס כפקודה אסיכרונית שיודעת לעבוד בג'יי אס

const init = () => {
  let usdPrice = chekUsd();
  console.log(usdPrice);

  // פרומיס יתרון נוסף שלו 
  // שניתן לקבל מפונקציה מידע ברגע שהיא מסיימת את הפעולה
  // גם אם זה פעולה אסינכורנית
  checkUsdPromise()
  .then(data => {
    console.log(data+" USD");
  })
}


const checkUsdPromise  = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("promise work");
      resolve(3.67)
    }, 1500)
  })
}

// הדמיה לפונקציה שמחזירה ערך של דולר

const chekUsd = () => {
  setTimeout(() => {
    console.log("async command");
    return 3.65
  }, 1500)
}


init();