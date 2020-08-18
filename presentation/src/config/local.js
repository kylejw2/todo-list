const local = window.localStorage;

const getEmail = () => {
    return local.getItem('email');
}

const getPassword = () => {
    return local.getItem('password');
}

const getRemember = () => {
    return local.getItem('remember');
}

module.exports = {
    getEmail,
    getPassword,
    getRemember
}

// use local storage to keep their email and password ready BUT ENCRYPTED

// use session storage to see if they logged in before accessing data