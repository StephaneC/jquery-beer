# TP 7 : CRUD et formulaires

Faisons en sorte d'ajouter et de supprimer des bière. soyez Fair-play, ne supprimez que les bières
que vous avez créé.

## Etape 1 : le formulaire de création

Utilisons une [modale](http://getbootstrap.com/javascript/#modals) Bootstrap pour afficher un formulaire.
Ce formulaire demandera : 
- l'id
- le nom
- le degré d'alcool
- la description

Il y aura 2 boutons : "Valider" et "Annuler".

Puis effectuons un appel ajax sur le click sur un bouton "Valider" pour ajouter une nouvelle bière.

## Etape 2

Ajoutons un bouton "delete" sur le détail d'une bière et appelons l'api pour la supprimer

## Etape 3

Sur l'ajout et la suppression, ajoutons un événement pour rafraîchir la liste des bières.
dans le cas d'un ajout, positionnons le détail sur la bière précédement ajoutée. 

## Etape 4

Réalisons la modification d'une bière avec le même type de modale que la création.