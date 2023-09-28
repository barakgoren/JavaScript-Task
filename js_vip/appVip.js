const init = () => {
    createList();
  }

  async function richPersons(num) {
    const response = await fetch(`https://forbes400.onrender.com/api/forbes400?limit=400`);
    const persons = await response.json();
    return persons;
  }
  
  const list = richPersons(100);
  let persons = "";

  list.then((data) => {
    persons = data;
    createList();
    console.log(persons);
  });
  
  
  const createList = () => {
    persons.forEach((item) => {
      let intPrice = parseInt(item.estWorthPrev) / 1000;
      let worth = intPrice.toFixed(2);
      let vip1 = new VipClass(item.person.name,item.person.squareImage,worth,item.source, item.rank, item.bios);
      vip1.render();
    });
    let blocks = document.querySelectorAll(".item");

    blocks.forEach(block => {
      block.addEventListener('click', infoAnim);
    });
  }
  
  const infoAnim = (event) => {
    let mainDiv = document.getElementById(event.currentTarget.id);
    let readMore = document.getElementById(`readMore-${event.currentTarget.id}`);
    if(mainDiv.classList.contains("infoAnim")){
      mainDiv.classList.remove("infoAnim");
      mainDiv.classList.add("infoAnimReverse");
      mainDiv.scrollTop = 0;
      readMore.innerHTML = 'read more'
    } else {
      readMore.innerHTML = 'read less'
      mainDiv.classList.remove("infoAnimReverse");
      mainDiv.classList.add("infoAnim");
    }
    // console.log("infoAim happend");
  }
  

  let blocks = document.querySelectorAll(".item");

    blocks.forEach(block => {
      block.addEventListener('click', infoAnim);
    });