class VipClass{
    static numOfInstances = 0;
    constructor(_name,_img,_money,_company, _rate, _bios){
      this.name = _name;
      this.img = _img;
      this.money = _money;
      this.company = _company;
      this.rate = _rate;
      this.bios = _bios;
      VipClass.numOfInstances++;
    }
  
    render(){
      let div = document.createElement("div");
      div.id = this.rate;
      div.className = "item border-2 rounded border-info col-md-6 border";
      document.querySelector("#id_row").append(div);
      div.innerHTML = `
        <div class="rate float-start h1">${this.rate}</div>
        <img src="${this.img}" class="w-25 float-start me-2">
        <h2>${this.name}</h2>
        <div>Money: $${this.money} B</div>
        <div class="row justify-content-between">
          <p class="p-0 col-6">Company: ${this.company}</p>
          <p id="readMore-${this.rate}" class="col-4 ps-4 text-end" style="color:gray">read more</p>
        </div>
        <div class="info row h-100 mt-4">
          <div class="">${this.bios}</div>
        </div>
      `;
    }
  }