let obj = 
[
{username : "user1", password: "password"},
{username : "user2", password: "password1"},
{username : "user3", password: "password2"},
{username : "user4", password: "thispassword"}
];

runSystem = () =>
{
    var info = getCredentials();    
    let status = checkCredentials(info);
    status ? alert("Credentials Valid") : alert("Credentials Invalid");
}

getCredentials = () =>
{
    var username = prompt("Username: ");
    var password = prompt("Password: ");
    
    return {username, password};
}

checkCredentials = (cred) =>
{
    for(let x of obj)
    {
        if((cred.username == x.username) && (cred.password == x.password))
        {
            return true; 
            break;
        }
    }
    return false;
}

runSystem();

//written and submitted by Vonne Harvey B. Tuso