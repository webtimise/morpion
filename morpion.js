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
    var joueur="X";
    var i = 9;
	document.getElementById('morpion').addEventListener("mousedown", function(e) 
	{
		var td=e.target;
		if(td.textContent!==''){return;}
		td.textContent=joueur;
        joueur=(joueur==="X" ? 'O' : 'X');
        morpion[i] = joueur;
        console.log(morpion[i]);
        i--;
	});

});