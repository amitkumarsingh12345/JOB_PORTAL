import userModels from '../models/userModels.js';

export const userController = async (req, res) => {
    try {
        const { firstName, lastName, email, password, location } = req.body;
        if (!firstName) {
            return res.status(400).send({
                massage: 'Name is require!!',
                success: false
            });
        }
        if (!email) {
            return res.status(400).send({
                massage: "Email is require !!",
                success: false
            });
        }
        if (!password) {
            return res.status(400).send({
                massage: "Password is require !!",
                success: false
            });
        }
        if (!location) {
            return res.status(400).send({
                massage: "Location is require !!",
                success: false
            });
        }

        const existingUser = await userModels.findOne({ email });
        console.log("Existing user : " + existingUser);
        if (existingUser) {
            return res.status(400).send({
                massage: "This email already exist, Please provide another email!!",
                success: false
            });
        }

        const user = await userModels.create({ firstName, lastName, email, password, location })
        res.status(200).send({
            success: true,
            massage: "Congratulation user successfully registered!!",
            user
        })

    } catch (error) {
        res.status(400).send({
            massage: "Error userController",
            success: false,
            error
        });
    }
}
