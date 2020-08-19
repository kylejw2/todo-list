const local = window.localStorage;

const getItem = (key) => {
    return local.getItem(key);
}
const setItem = (key, value) => {
    local.setItem(key, value);
}
const getRemember = () => {
    return local.getItem('remember') === 'true' ? true : false;
}

module.exports = {
    getItem,
    setItem,
    getRemember
}

// use local storage to keep their email and password ready BUT ENCRYPTED

// use session storage to see if they logged in before accessing data