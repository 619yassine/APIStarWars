Le Modèle de Maturité de Richardson, également connu sous le nom de Web Service Maturity Heuristic, est un modèle qui évalue le niveau de maturité des services Web en fonction de différents niveaux de progression.

Au niveau 0, appelé "The Swamp of POX" (Plain Old XML), les services web ne suivent pas les principes fondamentaux de l'architecture RESTful. Ils utilisent des protocoles tels que SOAP (Simple Object Access Protocol) pour la communication, ce qui ne correspond pas à une approche RESTful.

Au niveau 1, appelé "Ressources", l'API respecte le modèle de données et chaque ressource est identifiée par une URL. Par exemple, les requêtes peuvent être formulées comme GET /peoples/14, ce qui permet de manipuler des ressources spécifiques de manière claire.

Au niveau 2, appelé "Verbes HTTP", des méthodes HTTP autres que GET et POST sont utilisées pour indiquer l'action souhaitée, telles que PATCH, PUT et DELETE. Les codes de statut HTTP sont également utilisés pour résumer le résultat de l'opération, par exemple 200 (OK), 201 (Created), 204 (No Content pour les suppressions), 400 (Bad Request), etc.
Au niveau 3, appelé "Contrôles Hypermedia", l'utilisation de l'hypermedia est mise en avant. Cela se traduit par l'incorporation de liens dans les ressources, permettant de définir les relations avec d'autres ressources. Cela rend l'API découvrable, facilitant la navigation et la découverte des fonctionnalités.

Dans le projet en question, les niveaux 1 et 2 du modèle de maturité de Richardson ont été respectés. Les endpoints sont définis dans le fichier index.js et les routers dans le dossier /back/routes, en utilisant les méthodes HTTP appropriées. Les codes de statut HTTP sont renvoyés en fonction du résultat depuis les controllers situés dans /back/controllers.

Pour le niveau 3, des améliorations ont été apportées en ajoutant des liens (hrefs) avant l'envoi du JSON de réponse dans les controllers. Cela permet de faciliter la navigation entre les différents endpoints en ajoutant des liens vers d'autres ressources.

De plus, le projet utilise Mongoose pour la gestion des erreurs et la validation des champs grâce aux schémas définis dans /back/models. Des erreurs 500 sont renvoyées en cas de problèmes internes dans les controllers.

En résumé, le projet respecte les niveaux 1 et 2 du modèle de maturité de Richardson, et des améliorations ont été apportées pour intégrer des éléments du niveau 3 en ajoutant des liens (hrefs) pour faciliter la navigation et la découverte des fonctionnalités.