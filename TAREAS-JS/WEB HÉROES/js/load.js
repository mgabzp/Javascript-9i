let table =JSON.parse (localStorage.getItem ('table')) || []

class Superhero {
    constructor(name, alias, superpower, team, imageUrl){
        this.name = name
        this.alias = alias
        this.superpower = superpower
        this.team = team
        this.imageUrl = imageUrl
    }
}


function addHero(){
    let name = document.querySelector ("#name");
    let alias = document.querySelector ("#alias");
    let superpower = document.querySelector ("#superpower");
    let team = document.querySelector ("#team");
    let imageUrl = document.querySelector ("#imageUrl");
    

    if (!name.value || !alias.value || !superpower.value || ! team.value || ! imageUrl.value){
        alert ('Missing data. Please complete all the fields.')
    } else {
        let verify = verifyHero (name.value)
    
    if (verify){
            alert ('This hero already exists.')
    } else {
        table.push (new Superhero(name.value.toUpperCase(), alias.value.toLowerCase(), superpower.value.toLowerCase(), team.value.toUpperCase(), imageUrl.value.toLowerCase()));
        localStorage.setItem ('table', JSON.stringify(table));
        alert ('NEW HERO ADDED!')
    } 
    updateTable ()
}
}



function verifyHero (name){
    let verify= table.find (function(hero){
        return hero.name.toUpperCase() === name.toUpperCase ()
    })
    if (verify){
        return true
    } else {
        false
    }
}

function updateTable(){
    document.querySelector ("#name").value = "";
    document.querySelector ("#alias").value = "";
    document.querySelector ("#superpower").value = "";
    document.querySelector ("#team").value = "";
    document.querySelector ("#imageUrl").value = "";
    

    // document.querySelector ("#name").focus() = "";
    table = JSON.parse (localStorage.getItem ("table"));

}
