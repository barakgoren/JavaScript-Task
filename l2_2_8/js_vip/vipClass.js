class VipClass{
  constructor(_parent,_name,_img,_money,_company){
    this.parent = _parent
    this.name = _name;
    this.img = _img;
    this.money = _money;
    this.company = _company;
  }

  render(){
    let div = document.createElement("div");
    div.className = "col-md-6 border";
    // document.querySelector("#id_row").append(div);
    document.querySelector(this.parent).append(div);

    div.innerHTML = `
    <img src="${this.img}" alt="${this.name}" class="w-25 float-start me-2">
    <h2>${this.name}</h2>
    <div>Money: ${this.money} USD</div>
    <div>Company: ${this.company}</div>
    `
  }
}