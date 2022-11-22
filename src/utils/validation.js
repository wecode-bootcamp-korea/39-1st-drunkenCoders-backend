const validateEmail = (email) => {
    const em = new RegExp(
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/);

        if (!em.test(email)) {
        const err = new Error("invalid email");
        err.statusCode = 400;
        throw err;
        }
    };

    const validatePassword = (password) => {
        const regexp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$/;

    if (!regexp.test(password)) {
    const err = new Error('Invalid Password');
    err.statusCode = 400;
    throw err;
    }
}

module.exports = { validateEmail, validatePassword };