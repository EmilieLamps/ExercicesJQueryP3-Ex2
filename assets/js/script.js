$(function(){
  var clicCounter = 0;// Déclarer la variable "compteur de clic" à 0
  $('#addition').click(function(){// récupérer le clic du bouton
    clicCounter++    // Incrémenter la variable
    $('#score').val(clicCounter); // Afficher ma valeur dans le champs #score
  });
  $('#soustraction').click(function(){
    clicCounter--   // Décrémenter la variable
    $('#score').val(clicCounter);
  });
});
