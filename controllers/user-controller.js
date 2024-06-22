import Users from "../models/Users";

//using a asynchronous function to follow a synchronus task with parameters
 export const getAllUsers = async(request, response, next ) => {
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