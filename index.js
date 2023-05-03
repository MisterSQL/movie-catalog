let CatalogBooks = [
    {cover: "Philosof.jpg", name: "Философский камень", year: 2002, author: "Джоан Роулинг",  genre: "Фантистика", description: "Приключение мальчика в Хогвартсе!"},
    {cover: "Alibi.jpg", name: "Мое прекрасное алиби", year: 1999, author: "Абдулаев", genre: "Детектив", description: "У меня есть такое прекрасное, абсолютное алиби – моя левая рука."},
    {cover: "GoodBeQuite.jpg",name: "Робинзон Крузо", year: 1985, author: "Даниель Дефо",  genre: "Приключение", description: "Мужчина который прожил на необитаемом острове 30 лет."},
    {cover: "Robinzon.jpg",name: "Хорошо быть тихоней", year: 1999, author: "Стивен Чбокси", genre: "Роман", description: "История о мальчики и его воспитание."},
];
let flexBox = document.getElementById("flex");
let getDivClass = document.getElementsByClassName("decoration");
let getImgClass = document.getElementsByClassName("images");
let arrKeys =  Object.keys(CatalogBooks[0])

for (let i = 0; i < CatalogBooks.length; i++) {
    let div = document.createElement("div")
    let img = document.createElement("img")
    flexBox.append(div)
    div.setAttribute("class", "decoration")
    div.append(img)
    img.setAttribute("class","images")
    img.style.width ="60%"
    img.style.height ="400px"
    img.style.margin = "0 auto";
    img.style.borderRadius = "20px";
    img.style.display = "block";
}

for (let key of getDivClass) {
    key.style.background = "Red"
    key.style.padding = "1em"
    key.style.margin = "0.1em"
}

function sort(boolSort){
    if(boolSort === false){
        CatalogBooks.sort((a,b) => a.year - b.year);
        showCatalog();
    }
    else{
        CatalogBooks.sort((a,b) => b.year - a.year);
        showCatalog();
    }
}

function showCatalog(){
    let indexForTitle = 0;
    let indexForImg = 0;
    let arrTitles = ["Имя книги: ","Год выпуска: ", "Автор: ", "Жанр: ", "Описание: "];
    CatalogBooks.forEach((item,index) =>{
        for(let key of arrKeys){
            if(key !="cover"){
                getDivClass[index].innerHTML += arrTitles[indexForTitle++] + item[key] + "<br>"
            }
            else{
                getImgClass[indexForImg++].setAttribute("src",item[key])
            }
        }
        indexForTitle = 0
    })
}

sort(false)