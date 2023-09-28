const init = () => {
  createList();
}


const createList = () => {
    vip_ar.forEach((item) => {
      let vip1 = new VipClass("#id_row",item.name,item.image,item.worth,item.source);
      vip1.render();  
    })
    
}


init();