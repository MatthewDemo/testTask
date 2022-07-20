let sendButton = document.querySelector('#sendbtn');
let input = document.querySelector('#input');
let table = document.querySelector('#table');
let deleteButton = document.querySelector('#deletebtn');

function createTd(value, tr, isLink = false){
    const td = document.createElement("td")

    if (isLink) {
        td.innerHTML = value[0];
        td.onclick =() => document.location = value[0];
        td.classList.add("link")
        tr.appendChild(td);
        
        return
    }
    td.innerHTML = value;
    tr.appendChild(td);
}

sendButton.addEventListener('click', async () => {
    const url = `http://universities.hipolabs.com/search?country=${input.value}`;
    const response = await fetch(url);
    const universities = await response.json();
    let i = 1;
    document.querySelectorAll("td").forEach(td => td.remove())
    universities.forEach(university => {
        const tr = document.createElement('tr');
        createTd(i, tr)
        createTd(university.name, tr)
        createTd(university.country, tr)
        createTd(university["state-province"], tr)
        createTd(university.domains.join(' '), tr)
        createTd(university["web_pages"], tr, true)
        table.appendChild(tr)
        i++;
    });
})
deleteButton.addEventListener('click', () => {
    document.querySelectorAll("td").forEach(td => td.remove())
}) 
