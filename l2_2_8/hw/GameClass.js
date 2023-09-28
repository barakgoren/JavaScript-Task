class GameClass {
    constructor(name, year, link) {
        this.name = name;
        this.year = year;
        this.link = link;
    }

    render() {
        let div = document.createElement('div');
        div.className = 'col-md-6 border p-3';
        document.querySelector("#id_row").append(div);
        div.innerHTML = `
            <h2>${this.name}</h2>
            <div>Year of release: ${this.year}</div>
            <div>Link: <a href="${this.link}" target="_blank">Click Here</a></div>
        `
        console.log("inside render");
    }
}