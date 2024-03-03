import user from "../module/useshema.js";



export const userSignup = async (req, res) => {
    try {

        const exist = await user.findOne({ username: req.body.username });
        if (exist) {
            return res.status(401).json({ message: 'usename already exist' })
        }
        const User = req.body;
        const newUser = new user(User);
        await newUser.save();

        res.status(200).json({ message: User });

    } catch (error) {
        res.status(500).json({ message: error.message });

    }

}


export const userLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        let User = await user.findOne({ username: username, password: password });
        if (User) {
            return res.status(200).json({ 'data': User });
        } else {
            return res.status(401).json(`invalid login`);
        }
    } catch (error) {
        res.status(500).json('error', error.message);
    }
}