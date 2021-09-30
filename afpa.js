// alert("salut les gens");
// alert("salut les gens");
// alert("salut les gens");
// console.log("Salut !");
// console.log("Salut !");
// console.log("Salut !");
// console.assert

// prompt("Comment ça va bien ?")

//Variables
//String
var test = " les gens 121323  test";
//Variables
//nombre
var nombre = 1211;
//tableaux
var tab = [1, 2, "25", 5];
var tab = Array(1, 2, "25", 5);

//Objets
var obj = {
    nom: "Camara",
    prenom: "Moussa"
};

//tableaux d'Objets
var tabObj=[
    {
        nom: "Camara",
        prenom: "Moussa"   
    },
    {
        nom: "Camara2",
        prenom: "Moussa2"   
    },
    {
        nom: "Camara3",
        prenom: "Moussa3"   
    }

];

function afpa(){
    var nbr = 25;
    return nbr * 2;
}
  afpa();


//   console.log(nbr);


  var a = "bonjour";
  var b = "Moussa";
  var c = "Camara";

  var affich = a+  b+c;
//   console.log(affich);


let age = prompt("Saisir age");

if (age <18) {
    alert("Vous etes mineur !")
    console.log("Vous etes mineur !");
}else if( age > 50 && age < 60){
    alert("Vous etes senior !")
    console.log("Vous etes senior !");
}
else{
    alert("Vous etes majeur !")
    console.log("Vous etes majeur !");
}

//Switch case
// let theAge ;
// theAge = parseInt(theAge);
// switch (theAge){
// case 15:
//     console.log("Vous etes mineur");
//     break;
// case 18:
//     console.log("Vous etes mineur");
//     break;
// case theAge > 18:
//     console.log("Vous etes majeur");
//     break;
// default:
//     console.log("Vous etes senior");
// }

//Ternaire

ter = (theAge < 18 && theAge > 50) ? "Mineur" : "Majeur"
console.log(ter);
alert(ter);