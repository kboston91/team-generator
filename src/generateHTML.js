const generateHTML = (tArray) =>{
  let engineerHtml = '';
  let internHtml = '';

  console.log(tArray);
  console.log((tArray[0].constructor.name));
  for(let i=1; i<tArray.length; i++){
    if(tArray[i].constructor.name == 'Engineer'){
      engineerHtml += `<div class= "card"> ${tArray[i].constructor.name} ${tArray[i].name} ${tArray[i].id} </div>`
    } else {
      internHtml += `<div class= "card"> ${tArray[i].constructor.name} ${tArray[i].name} ${tArray[i].id} </div>`
    }
  };
  return `
  <div class= "card">${tArray[i].constructor.name} ${tArray[0].name} ${tArray[0].id} </div>
  ${engineerHtml}
  ${internHtml}
  `
}

module.exports = teamArray => {
  return `
  <!DOCTYPE html>
    <html lang="en-us">
    <head>
        <meta charset="UTF-8" />
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    </head>

    <body>
    <div class="container-fluid">
      <div class="row bg-danger" >
        <div class='col text-center'>
        <h1>My Team</h1>
        </div>
      </div>
      <div class="row">
      ${generateHTML(teamArray)}
      </div>    
    </body>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    </html>
  `
}


// module.exports = generateHTML;