const userService = require('../services/user.service');

const signUp = async (req, res) => {
    try {
        const { email, password, nickname } = req.body;

        await userService.signUp(email, password, nickname);

        res.status(201).json({message: "회원가입을 축하합니다."});
    } catch (err) {
        res.status(err.statusCode || 400).json({ message: err.message });
    }
};

//연습
const signup2 = async (req, res) => {
    try {
        const { email, password, nickname } = req.body;

        await userService.signUp(email, password, nickname);

        res.status(201).json({message: "회원가입을 축하합니다."});
    } catch (err) {
        if(!email || !password || !nickname){
        res.status(err.statusCode || 400).json({ message: "빈칸을 채워주세요." })};
    }
};



//

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const accessToken = await userService.signIn(email, password);

        res.status(200).json({ accessToken: accessToken });
    } catch (err) {
        res.status(err.statusCode || 401).json({ message: err.message });
    }
};

module.exports = { signUp, signIn };