let table =JSON.parse (localStorage.getItem ('table')) || []
loadTable (table)

function loadTable (array){
    clearTable()
    document.querySelector ('#body-table').innerHTML= ""
    array.forEach(function(elemento, index){
        let row = document.createElement ('tr')
        row.classList = 'text-center'
        
        let data = `
        <td> ${elemento.name} </td>
        <td> ${elemento.alias} </td>
        <td> ${elemento.superpower} </td>
        <td> ${elemento.team} </td>
        `

        row.innerHTML= data;

        let body = document.querySelector ('#body-table');
        body.appendChild(row)
    });
}

function clearTable(){
    document.querySelector('#body-table').innerHTML=""
}