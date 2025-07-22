![Kasa Banner](https://user.oc-static.com/upload/2023/04/03/1680512368252_Kasa%20logo.png)

## Description

Travail en tant que développeur front-end freelance pour Kasa, une entreprise de location d’appartements entre particuliers.

## Technologies Utilisées

-   HTML 5
-   CSS 3
-   SCSS
-   JavaScript
-   TypeScript
-   Git / GitHub

## Contraintes fonctionnelles

- Pour le défilement des photos dans la galerie (composant Gallery) :
    - Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image.
    - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image.
    - S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" ainsi que la numérotation n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page.
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Ressources

-   [Maquettes Figma](https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1&p=f&t=75iiPNeBrmFlPMoF-0)

## Installation

1. Clonez le dépôt :

    ```bash
    git clone git@github.com:daddyjanno/Projet5-Kasa.git
    ```


### Installation et lancement du front-end :

1. Installer toutes les dépendances pour le front-end:

-   `npm install`

2. Lancer le front-end:

-   `npm run dev`

Le front-end sera lancé à l'URL:
`[http://127.0.0.1:8080/](http://localhost:5173/)`


## Développé avec :

-   [Visual Studio Code](https://code.visualstudio.com/) - Éditeur de texte
-   [GitHub](https://github.com/) - Outil de gestion de versions


## Auteur

-   Jean-Noël Drugmand
