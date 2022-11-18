const userService = require('../services/userService');

const register = async (req, res) => {
    try {
        const { email, password, nickname } = req.body;

        if(!email || !password || !nickname) {
            res.status(400).json({ message: "빈칸을 채워주세요."});
        }
        await userService.register(email, password, nickname);

        res.status(201).json({message: "회원가입을 축하합니다."});
    } catch (err) {
        return res.status(err.statusCode || 500).json({message: err.message})
}
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email ||!password) 
        return res.status(400).json({'message':'Username and password are empty'})

        const accessToken = await userService.login(email, password);

        res.status(200).json({ accessToken: accessToken });
    } catch (err) {
        res.status(err.statusCode || 401).json({ message: err.message });
    }
};

const { user } =require('../models/user.dao')

// const unregister = async( req, res )=>{
//     const { accessToken } = req.body;
//     const delUser = 
// }


module.exports = { register, login};