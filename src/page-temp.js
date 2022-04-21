const generate = team =>{
    const generateMan = manager =>{
        return `
        <div class="col">
          <div class="card">
            <div class="card-body title1">
              <h4 class="card-title">${manager.getName()}</h4>
              <h5 class="card-title">Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                <li class="list-group-item">Office number: ${manager.getOffice()}</li>
            </ul>
          </div>
        </div>`
    }
    const generateEng = engineer =>{
        return `
        <div class="col">
          <div class="card">
            <div class="card-body title1">
              <h4 class="card-title">${engineer.getName()}</h4>
              <h5 class="card-title">Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
            </ul>
          </div>
        </div>`
    }
    const generateInt = intern =>{
        return `
        <div class="col">
        <div class="card">
          <div class="card-body title1">
            <h4 class="card-title">${intern.getName()}</h4>
            <h5 class="card-title">Intern</h5>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: ${intern.getEmail()}</li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>`
    }
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateMan(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEng(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateInt(intern))
        .join("")
    );

    return html.join("");
}

module.exports = team =>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css"> 
    <title>Team Profile</title>
</head>
<body>
    <h1>My Team</h1>

    <div class="container">
      <div class="row align-items-center row-cols-1 row-cols-md-3 g-4">
        ${generate(team)}
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`
}