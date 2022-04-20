const generate = team =>{
    const generateMan = manager =>{
        return `
        <div>${manager.getName()}</div>`
    }
    const generateEng = engineer =>{
        return `
        <div>${engineer.getName()}</div>`
    }
    const generateInt = intern =>{
        return `
        <div>${intern.getName()}</div>`
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