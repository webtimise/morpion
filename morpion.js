morpion = ["","","","","","","","","",""]

function initialisation() {
    for (var i=1;i<10;i++)
    {
        case_cliquee=document.getElementById("case"+i);
        case_cliquee.style.backgroundColor ="brown";
        contenu = case_cliquee.textContent;
    }
}