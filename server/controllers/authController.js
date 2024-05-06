import Users from "../models/userModel";

export const register = async (req, res, next) => {
    try {
        const {
            firstName, 
            lastName, 
            email, 
            password, 
            image, 
            accountType, 
            provider
        } = req.body;

        if (!(firstName || lastName || email || password)) {
            return next ("Provide Required Fields")
        }

        if (accountType === "writer" && !image)
            return next ("Please Provide Profile Picture")

        const userExist = await Users.findOne ({ email })

        if (userExist) {
            return next ("Email já existe, tente novamente")
        }

        const hashPassword = await hashString(password)

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message})
    }
}

export const googleSignUp = async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message})
    }
}

export const googloginoginleSignUp = async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message})
    }
}