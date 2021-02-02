const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);

    return stringyUser;
}