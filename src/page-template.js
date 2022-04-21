

const generateCards = (manager, engineers, interns) => {
  return `
    <div class="col-12 col-sm-6 col-md mb-2"> 
      <div class="card text-white bg-dark" >
        <h4 class="card-header">${manager.name} Manager</h4>      
        <p>ID:  ${manager.Id}</p>     
        <p>Email:  ${manager.Id}</p>     
        <p>Office Number:  ${manager.Id}</p>
        </ul>
      </div>
    </div>  

      ${engineers
        .map(({ name, Id, email, github }) => {
          return `
          <div class="col-12 col-sm-6 col-md mb-2"> 
          <div class="card text-white bg-dark" >
            <h4 class="card-header">${name} Engineer </h4>      
            <p>ID:  ${Id}</p>     
            <p>Email:  ${Id}</p>   
            <a href="https://github.com/${github}">${github}</a>
          </div>
        `;})
        .join('')}
  
        ${interns
          .map(({ name, Id, email, github }) => {
            return `
            <div class="col-12 col-sm-6 col-md mb-2"> 
            <div class="card text-white bg-dark" >
              <h4 class="card-header">${name} Engineer </h4>      
              <p>ID:  ${Id}</p>     
              <p>Email:  ${Id}</p>   
              <a href="https://github.com/${github}">${github}</a>
            </div>
            `;})
            .join('') }
    `;
};
                  

module.exports = teamData => {
    console.log('page-template\n');
    // destructure projects and about data from templateData based on their property key names
    //console.log('teamData', teamData);
    const { manager, engineers, interns } = teamData;
    console.log('manager',manager);
    console.log('engineer',engineers);
    console.log('interns',interns);

    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    
    <header class="col text-light sticky-top d-flex flex-column">
      <h1 class="text-center">Weather Dashboard</h1>
    </header>
    <main class="container my-5">
      ${generateCards(manager, engineers, interns)}
    </main>
  </body>
  </html>
  `;

};
