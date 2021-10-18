const generateHTML = (teamArray) =>{
  return `
  <div>manager card </div>
  <div>engineer card </div>
  <div>intern card </div>
  `
}

module.exports = teamArray => {
  return `
  <!DOCTYPE html>
    <html lang="en-us">
    <head>
        <meta charset="UTF-8" />
        <title>Team Generator</title>
    </head>

    <body>
    <div class="container-fluid">
      <div class="row bg-danger" >
        <div class='col text-center'>
        <h1>My Team</h1>
        </div>
      </div>
  ${generateHTML(teamArray)}
    
    </body>

    </html>
  `
}


// module.exports = generateHTML;