import { User } from "../models/Users.js"

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        console.log(users);
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
    
}

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({
            where: {
                userId: id,
            }
        });

        if(!user) return res.status(404).json({ message: `There is no project with id: ${id}`})
        
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
}

export const postUser = async (req, res) => {
    const { name, email, birthDate, favLanguage, password} = req.body;

    try {
        const newUser = await User.create({
            name: name,
            email: email,
            birthDate: birthDate,
            favLanguage: favLanguage,
            password: password,
        })
    
        console.log(newUser);
        res.status(200).send('user created')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, birthDate, favLanguage, password} = req.body;

    try {
       const dataToUpdate = await User.findByPk(id)

       dataToUpdate.name = name;
       dataToUpdate.email = email;
       dataToUpdate.birthDate = birthDate;
       dataToUpdate.favLanguage = favLanguage;
       dataToUpdate.password = password;

       await dataToUpdate.save()

       res.status(200).json(dataToUpdate)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userToDelete = await User.destroy({
            where: {
                userId: id,
            }
        })

        res.status(204).send('User deleted')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
