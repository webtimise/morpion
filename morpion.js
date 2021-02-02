morpion = ["","","","","","","","","",""]

function initialisation() {
    for (var i=1;i<10;i++)
    {
        case_cliquee=document.getElementById("case"+i);
        case_cliquee.style.backgroundColor ="brown";
        contenu = case_cliquee.textContent;
    }
}

document.addEventListener("DOMContentLoaded", function() 
{ 
	console.log("Le document est pret");
	var joueur="X";
	document.getElementById('morpion').addEventListener("mousedown", function(e) 
	{
		console.log("Le bouton de la souris a été enfoncé.");
		var td=e.target;
		if(td.textContent!==''){return;}
		td.textContent=joueur;
		joueur=(joueur==="X" ? 'O' : 'X');
	});

});