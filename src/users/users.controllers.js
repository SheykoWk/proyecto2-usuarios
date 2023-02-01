const usersDB = [
    {
        id: 1,
        firstName: "Sahid",
        lastName: "Kick",
        email: "sahid.kick@academlo.com",
        password: "root",
        age: 22,
    },
];
let baseId = 2;

const findAllUsers = async () => {
    return await usersDB;
};
const createNewUser = async (userObj) => {
    const newUser = {
        id: baseId++,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        age: userObj.age,
    };
    usersDB.push(newUser);
    return newUser;
};
const findUserById = async (id) => {
    const filteredUser = await usersDB.find((user) => user.id === id);
    return filteredUser;
};

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
};
