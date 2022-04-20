const generate = team =>{
    const generateMan = manager =>{
        return `
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${manager.getName()}</h5>
              <h6 class="card-title">Manager</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getID()}</li>
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
            <div class="card-body">
              <h5 class="card-title">${engineer.getName()}</h5>
              <h6 class="card-title">Engineer</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getID()}</li>
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
          <div class="card-body">
            <h5 class="card-title">${intern.getName()}</h5>
            <h6 class="card-title">Intern</h6>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getID()}</li>
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
    <title>Document</title>
</head>
<body>

    ${generate(team)}
</body>
</html>`
}