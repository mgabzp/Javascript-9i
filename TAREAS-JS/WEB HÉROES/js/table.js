let table =JSON.parse (localStorage.getItem ('table')) || []
loadTable (table)

function loadTable (array){
    clearTable()
    document.querySelector ('#body-table').innerHTML= ""
    array.forEach(function(element, index){
        let row = document.createElement ('tr')
        row.classList = 'text-center'
        
        let data = `
        <td> ${element.name} </td>
        <td> ${element.alias} </td>
        <td> ${element.superpower} </td>
        <td> ${element.team} </td>
        <td>
        <button class="btn btn-warning" onclick='seeHero(${index})'>See</button>
        </td>
        `

        row.innerHTML= data;

        let body = document.querySelector ('#body-table');
        body.appendChild(row)
    });
}

function seeHero(id){
    // console.log (id);

    document.querySelector("#title_modal").innerText = table[id].alias;
    document.querySelector(".card-title").innerText = table[id].name;
    document.querySelector("#image_hero").src = table[id].imageUrl;
    document.querySelector("#text_power").innerText = table[id].power;
    document.querySelector("#text_team").innerText = table[id].team;

    $('#heroModal').modal('show');

}

function clearTable(){
    document.querySelector('#body-table').innerHTML=""
}

// if (body-table) {
//     loadTable();
//   }