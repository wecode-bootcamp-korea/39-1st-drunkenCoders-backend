const { AppDataSource } = require("./data-source");

const createUser = async (email, hashedPassword, nickname) => {
    await AppDataSource.query(
        `
        INSERT INTO users(
            email,
            password,
            nick_name
            ) VALUES (?, ?, ?);
        `,
        [email, hashedPassword, nickname]
    );
};

    const getUserByEmail = async (email) => {
    const [user] = await AppDataSource.query(
        `
        SELECT 
            email,
            password
        FROM 
            users
        WHERE 
            email = ?;
        `,
        [email]
    );

    return user;
};

const getUserByNickname = async (nickname) => {
    const [nick] = await AppDataSource.query(
        `
        SELECT
            nick_name
        FROM 
            users
        WHERE 
            nick_name = ?;
        `,[nickname]
    );
    return nick;
};

module.exports = { createUser, getUserByEmail, getUserByNickname };