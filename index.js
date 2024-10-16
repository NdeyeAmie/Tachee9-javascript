function manipulerTableaux() {

// Récupérer les tableaux saisis par l'utilisateur et les convertir en tableau de nombres
/*La méthode splice() modifie le contenu d'un tableau en retirant
des éléments et/ou en ajoutant de nouveaux éléments à même le tableau
.On peut ainsi vider ou remplacer une partie d'un tableau. */

let  Tab1 = document.getElementById("tab1").value.split(',').map(Number);
let Tab2 = document.getElementById("tab2").value.split(',').map(Number);
// console.log(Tab2);

// let Tab3 = Tab1.filter((element ) => element > 0) 
let Tab3 = Tab1.filter((element) => element > 0);

// console.log(Tab3);
let modifieTab2 = Tab2.map(() => 0)
// console.log(modifieTab2)   

// afficher les resultats dans le dom
document.getElementById("resultTab3").textContent = "Tab3 les éléments positifs de Tab1 : " + Tab3;
document.getElementById("resultTab2").textContent = "Tab2 est remplacé par des zéros : " + modifieTab2;
                                                                                                                                                                                                                                                          
}
