let users=[
    {"surname": "Nagy", "lastname": "Krisztián", "age":44 },
    {"surname": "Kiss", "lastname": "Sándor", "age":12 },
    {"surname": "Oláh", "lastname": "Kleopátra", "age":50 },
    {"surname": "Takács", "lastname": "Levente", "age":34 },
    {"surname": "Mac", "lastname": "Gyver", "age":40 },
    {"surname": "Kovács", "lastname": "Gizi", "age":18 },
    {"surname": "Szakács", "lastname": "Péter", "age":23 },
];

let createTD=function(tartalom, parent){
    let td = document.createElement("td");
    td.innerHTML=tartalom;
    td.setAttribute("align","center");
    parent.appendChild(td);
};

let createButtonGroup=function(parent){
    let buttonInfo=document.createElement("button");
    let buttonDanger=document.createElement("button");
    let iElementInfo=document.createElement("i");
    let iElementDanger=document.createElement("i");

    buttonInfo.setAttribute("class", "btn btn-info");
    buttonDanger.setAttribute("class", "btn btn-danger");
    iElementInfo.setAttribute("class", "fas fa-sync");
    iElementDanger.setAttribute("class", "fas fa-recycle");
    buttonInfo.appendChild(iElementInfo);
    buttonDanger.appendChild(iElementDanger);

    let div= document.createElement("div");
    div.setAttribute("class", "btn-group");
    div.appendChild(buttonInfo);
    div.appendChild(buttonDanger);

    return div;
}

let tableBody = document.querySelector("#userTable tbody"); 

for ( let i = 0; i < users.length; i++ ) {
    let tr = document.createElement("tr");
    createTD((i+1), tr);
    createTD(users[i].surname, tr);
    createTD(users[i].lastname, tr);
    createTD(users[i].age, tr);
    let td = document.createElement("td");
    td.appendChild(createButtonGroup(tr));
    td.setAttribute("align","center");
    tr.appendChild(td);
    tableBody.appendChild(tr);  
}