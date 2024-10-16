function manipulerTableaux() {
// Récupérer les tableaux saisis par l'utilisateur et les convertir en tableau de nombres
/*La méthode splice() modifie le contenu d'un tableau en retirant
des éléments et/ou en ajoutant de nouveaux éléments à même le tableau
.On peut ainsi vider ou remplacer une partie d'un tableau. */
    let tab1 = document.getElementById("tab1").value.split(',').map(Number);
    let tab2 = document.getElementById("tab2").value.split(',').map(Number);

    // Recopier dans tab3 les éléments positifs de tab1
    let tab3 = tab1.filter((element) => element > 0);

    // Remplacer tous les éléments de tab2 par des zéros
    let tab2Modifie = tab2.map(() => 0);

    // Afficher les résultats dans le DOM
    document.getElementById("resultTab3").textContent = "Tab3 les éléments positifs de Tab1 : " + tab3.join(', ');
    document.getElementById("resultTab2").textContent = "Tab2 est remplacé par des zéros : " + tab2Modifie.join(', ');
}