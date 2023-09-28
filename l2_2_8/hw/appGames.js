const data = xbox_ar;
console.log(data);

const init = () => {
    createList();
}

const createList = () => {
    data.forEach(item => {
        let newGame = new GameClass(item.Game, item.Year, item.PlatformLink);
        newGame.render();
    })

}

init()