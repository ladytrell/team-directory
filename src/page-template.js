

const generateCards = (manager, engineers, interns) => {
  return `
        <div class="card flex-{grow|shrink}-0" style="max-width: 18rem;">
          <h4 class="card-header manager text-white">${manager.name} </br>  Manager</h4>    
          <div class="card-body">     
            <p>ID:  ${manager.id}</p>     
            <p>Email:  <a href="mailto:${manager.email}">${manager.email}</a></p>     
            <p>Office Number:  ${manager.officeNum}</p>
          </div>
        </div>

    ${engineers
      .map(({ name, id, email, github }) => {
        return `
        <div class="card flex-{grow|shrink}-0" style="max-width: 18rem;">
            <h4 class="card-header engineer text-white">${name}  </br> Engineer </h4>    
            <div class="card-body">     
              <p>ID:  ${id}</p>     
              <p>Email:  <a href="mailto:${email}">${email}</a></p>  
              <p>GitHub: <a href="https://github.com/${github}">${github}</a></p>
            </div>
         </div>
      `;})
      .join('')}

      ${interns
        .map(({ name, id, email, github, school }) => {
        return `
        <div class="card flex-{grow|shrink}-0" style="max-width: 18rem;">
          <h4 class="card-header intern text-white">${name}  </br> Intern </h4>   
          <div class="card-body">      
            <p>ID:  ${id}</p>      
            <p>Email:  <a href="mailto:${email}">${email}</a></p>  
            <p>GitHub: <a href="https://github.com/${github}">${github}</a></p>
            <p>School:  ${school}</p>
          </div>
        </div>
          `;})
          .join('') }
    `;
};
                  

module.exports = teamData => {
    console.log('page-template\n');
    // destructure projects and about data from templateData based on their property key names
    const { manager, engineers, interns } = teamData;
   
    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Builder</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    
    <header class="col text-light sticky-top d-flex flex-column">
      <h1 class="text-center">My Team</h1>
    </header>
    <main class="container my-5 ">
      <div class="card-columns d-flex flex-wrap justify-content-around">
        ${generateCards(manager, engineers, interns)}
      </div>
    </main>
  </body>
  </html>
  `;

};
