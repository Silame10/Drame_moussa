// Creation d'un nouvel élément
var newElement = document.createElement("p");
newElement.innerHTML = "Ceci est un nouvel élément";

// Sélection d'un élément deja existant
var parentElement = document.getElementById("parent-id");

// Ajouter le nouvel élément à l'élément parent
parentElement.appendChild(newElement);

// Sélectionner un élément existant
var parentElement = document.getElementById("parent-id");

// Sélectionner l'élément enfant à supprimer
var childElement = document.getElementById("child-id");

// Supprimer l'élément enfant de l'élément parent
parentElement.removeChild(childElement);

