
    let age, maxAge, platpret, nbrParjour;
    age = prompt("entrez votre age !");
    maxAge = prompt("entrez votre age maximale !");
    platpret = prompt("entrez le plat !");
    nbrParjour = prompt("entrez le nombre par jour !");
    let nbrfoisrestant = ((maxAge - age) * 365) * nbrParjour; 
    console.log(nbrfoisrestant);
