async function getUsers(names) {
    let users = [];

    for(let name of names) {
        let user = await fetch('https://api.github.com/users/' + name);
        
        if(user.status == 200) {
            users.push(await user.json());
        } else {
            users.push(null);
        }
    }

    return users;
}
