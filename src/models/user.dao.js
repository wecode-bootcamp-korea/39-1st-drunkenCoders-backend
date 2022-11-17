const { AppDataSource } = require("./data-source");

    const createUser = async (email, hashedpassword, nickname) => {
    await AppDataSource.query(
        `
        INSERT INTO users (
        email,
        password,
        nickname
        ) VALUES (
        ?,
        ?,
        ?
        )
        `,
        [email, hashedpassword, nickname]
    );
    return result.insertId
};

    const getUserByEmail = async (email) => {
    const [user] = await AppDataSource.query(
        `
        SELECT *
        FROM users u
        WHERE u.email = ?
        `,
        [email]
    );

    return user;
};

module.exports = { createUser, getUserByEmail };