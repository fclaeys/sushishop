Feature: Afficher le catalogue

Scenario: Affiche le catalogue sur la homepage
  Given Je navigue sur la homepage
  Then Les shushis du catalogue sont affiches

Scenario: Ajout d un element au panier
  Given Je navigue sur la homepage
  When Je clique sur le plus de sushi thon
  Then Mon panier contient un sushi thon

