const Users = require ("../models/Users");


//using a asynchronous function to follow a synchronus task with parameters
 const getAllUsers = async(request, response, next ) => {
    let users;

    //using a try catch block to catch any errors in the database 
    try{
        users = await Users.find();//function for database to find data
    }catch(error) {
        console.log('error')
    }//if user is not found we can create a if statement to return a response 
    if (!users){
        return response.status(404).json({message: "No Users found"})
    }
    //return a message if the user is found 
    return response.status(200).json({users})
}

//Creating a post request function to collect data from user side for signUp
const signUp = async (req, res, next) => {
    const  {name, email, password} = req.body

    //validation
    let existingUser;
    try{//find function to find the existing user using the email 
        existingUser = await Users.findOne({email});

    }catch (err){
        return console.log(err)
    }//using an if statement  we can send a response to show email exist 
    if (existingUser){
        return res.status(400).json({message: "User Already Exist! Login Instead"})
    }
    //If no user is found then we can add a new user as follows:
    const newUser = new Users ({
        name,
        email,
        password
    })
   //now we can save each user inputed into the database 
     try{  await newUser.save();
        return res.status(201).json({user: newUser})
    }catch (err){
        console.log("Error creating new user",err)
        return res.stauts(500).json({message:"Server erro"})
    }
    
}


//Creating a post request function to collect data from user side for login 
const userLogin = async (req, res, next ) => {
    const {email, password } = req.body

    let existingUser;
    try{//find function to find the existing user using the email 
        existingUser = await Users.findOne({email});

    }catch (err){
        return console.log(err)
    }//using an if statement  we can send a response to show email exist 
    if (!existingUser){
        return res.status(404).json({message: "Could not find user, using this email"})
    }
    return res.status(200).json({message:"Login Successful"})
}

module.exports = {
    getAllUsers,
    signUp, 
    userLogin
}