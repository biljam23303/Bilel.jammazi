const Projects = [
    {
        name : "Elagage basé sur l'erreur",
        about : "La méthode d’ élagage est une technique utilisée en apprentissage automatique pour réduire la complexité des modèles entraînés. L'objectif de cette méthode est de supprimer les caractéristiques, les poids ou les neurones qui ne contribuent pas significativement à la précision du modèle",
        img : "images/decis.png",
        gitrepo : "https://github.com/biljam23303/machinelearning.EBP",
        blog : "https://medium.com/@vdbhavani.648/specsmakers-clone-8e0434e3ed0e",
        tech_stack : "HTML | CSS | JAVASCRIPT | API | JSON-SERVER",
        tech_stackicons : [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
        `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
        `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`
        ],
        project_link : "https://www.youtube.com/watch?v=OtylANflcD0&t=1s&ab_channel=bileljammazi",
        project_type : "Team Project",
        article_link : "Art1"
    },
    {
        name : "BUSINESS INTELLIGENCE",
        about : "La Business Intelligence (BI) est un ensemble de techniques et d'outils qui permettent de collecter, d'analyser et de présenter des données afin de faciliter la prise de décision dans une entreprise.",
        img : "images/bis.png",
        gitrepo : "https://github.com/biljam23303/",
        blog : "",
        tech_stack : "HTML | CSS | JAVASCRIPT | React | Redux | MongoDB | Express | Nodejs",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/redux.png"/>`,
            `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/express.png"/>`
        ],
        project_link : "https://www.youtube.com/watch?v=iV2l7cWT8TI&ab_channel=bileljammazi",
        project_type : "Team Project",
        article_link : "Art2"
    },
    {
        name : "Creation Cube Olap",
        about : "Les cubes OLAP sont basés sur un modèle de données multidimensionnel, qui comprend des dimensions (telles que le temps, les produits, les régions géographiques) et des mesures (telles que les ventes, les coûts, les bénéfices). Les utilisateurs peuvent naviguer dans le cube OLAP en sélectionnant des dimensions et des mesures pour afficher les données agrégées selon différents niveaux de granularité.",
        img : "cube.png",
        gitrepo : "https://github.com/biljam23303/",
        blog : "https://medium.com/@suraj.devere/shop4reebok-clone-eddfa7c32fe7",
        tech_stack : "HTML | CSS | JAVASCRIPT",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,

        ],
        project_link : "https://www.youtube.com/watch?v=N3K4tLD9clI&t=10s&ab_channel=bileljammazi",
        project_type : "Team Project",
        article_link : "Art3"

    },
    {
        name : "Clone of MyShopping.com",
        about : "An E-commerce website that sells fashionable, branded clothing for women, men & kids online at MyShopping.com.",
        img : "./homepage-shopping.png",
        gitrepo : "https://github.com/biljam23303/",
        blog : "",
        tech_stack : "HTML | CSS | JAVASCRIPT | React | Redux | MongoDB | Express | Nodejs | Bootstrap",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/redux.png"/>`,
            `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/express.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>`

        ],
        project_link : "https://www.youtube.com/watch?v=iV2l7cWT8TI&ab_channel=bileljammazi",
        project_type : "Individual Project",
        article_link : "Art4"

    },
    {
        name : "Weather-Map Web Application",
        about : "A Weather search web application, where user will get location based weather report. Here user will get all info related to a particular city with daily report as well as weekly forecast.",
        img : "./weather.png",
        gitrepo : "https://github.com/biljam23303/",
        blog : "",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
        project_link : "https://www.youtube.com/watch?v=iV2l7cWT8TI&ab_channel=bileljammazi",
        project_type : "Individual Project",
        article_link : "Art5"

    }
]


let projects__container = document.getElementById("projects--container")

Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <span data-id=${pro.article_link} class="article"><img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3></span><br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : '' }
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      </span>
      
    </div>
  </div>
    `
    projects__container.append(main)

})
