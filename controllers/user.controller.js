import UserData from "../mongodb/models/user.js";

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await UserData.find();
    res.json(users);
  } catch (err) {
    console.error("Error getting users:", err.message);
    res.status(500).send("Internal server error");
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserData.findById(id);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error("Error getting user:", err.message);
    res.status(500).send("Internal server error");
  }
};

const data = "";
// Add user
const addUser = async (req, res) => {
  try {
    const { ID, firstName, lastName, companyName, email, password } = req.body;
    console.req.body;
    const user = new UserData({
      ID,
      firstName,
      lastName,
      companyName,
      email,
      password,
    });

    data = user;
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    console.log(" here data : ", data);
    console.error("Error adding user:", err.message);
    res.status(500).send("Internal server error");
  }
};

// Update user by ID
const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { ID, firstName, lastName, companyName, email, password } = req.body;
    const update = {};
    if (ID) update.ID = ID;
    if (firstName) update.firstName = firstName;
    if (lastName) update.lastName = lastName;
    if (companyName) update.companyName = companyName;
    if (email) update.email = email;
    if (password) update.password = password;
    const updatedUser = await UserData.findByIdAndUpdate(id, update, {
      new: true,
    });
    if (!updatedUser) {
      res.status(404).send("User not found");
    } else {
      res.json(updatedUser);
    }
  } catch (err) {
    console.error("Error updating user:", err.message);
    res.status(500).send("Internal server error");
  }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserData.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(404).send("User not found");
    } else {
      res.send("User deleted");
    }
  } catch (err) {
    console.error("Error deleting user:", err.message);
    res.status(500).send("Internal server error");
  }
};

export { getAllUsers, getUserById, addUser, updateUserById, deleteUserById };
