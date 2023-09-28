class FoodClass{
  constructor(_name,_price,_cals){
    this.name = _name;
    this.price = _price;
    this.cals = _cals;
  }

  // renderToHTML() כמו ובקיצור
  render(){
    let div = document.createElement("div");
    div.className = "col-md-4 border";
    document.querySelector("#id_row").append(div);
    div.innerHTML = `
      <h2>${this.name}</h2>
      <div>Price: ${this.price}</div>
      <div>Cals: ${this.cals}</div>
    `
  }
}