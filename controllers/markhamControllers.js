const asyncHandler = require("express-async-handler"); // try and catch block
const Detail = require("../models/markhamModel");

//@desc Get all info
//@routes GET /markham/
//@access public

const getAllUsers = asyncHandler(async (req, res) => {
  const details = await Detail.find({});
  res.status(200).json(details);
});

//@desc Get user by id
//@routes Get/markham/:id
//@access public

const getOneUser = asyncHandler(async (req, res) => {
  const details = await Detail.find({ user_id: req.params.id }); // we know that user must give id so it will not be empty
  if (details.length === 0) {
    res.status(404); // if no user find of that id
    throw new Error("No contact found for this the id ");
  }
  res.status(200).json(details);
});

//@desc register user
//@routes Post/markham/register
//@access public 

const registerUser = asyncHandler(async (req, res) => {
  console.log("Input data = ", req.body);
  const { name, email, phoneNumber,user_id } = req.body;
  if (!name || !email || !phoneNumber || !user_id) {
    console.log(`${name} -- ${email} -- ${phoneNumber} -- ${user_id}`);
    
    res.status(400);
    throw new Error("ALL FIELDS ARE MANADATORY"); // when we dont have all the details
  }
  const check = await Detail.findOne({user_id:user_id});
  if(check){
    throw new Error("Enter unique id");
  }

  const details = await Detail.create({
    name,
    email,
    phoneNumber,
    user_id: user_id, // middleware needed here for req.user.id so cheap way we put trust on the user
                          // to input the unique values 
  });
  res.status(201).json(details);
});

//@desc login user
//@routes Get/markham/login/:id
//@access private

const loginUser = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const details = await Detail.findOne({user_id:req.params.id});
    if(!details){
        res.status(404);
        throw new Error("User not found -- enter a valid id ");
    }
    res.status(200).json(details);
});

//@desc update user 
//@rotues Put/markham/update/:id
//@access private

const updateUser = asyncHandler(async(req,res)=>{
    const details = await Detail.findOne({user_id:req.params.id});
    if(!details){
        res.status(404)
        throw new Error("User not found");
    }
    const updateUser = await Detail.findOneAndUpdate(
        {user_id:id},
        {id,name,phoneNumber,email},
        {new:true}
    );
    res.status(200).json(updateUser)
});

//@desc delete user 
//@rotues Delete/markham/delete/:id
//@access private

const deleteUser = asyncHandler(async(req,res)=>{
    const details = await Detail.findOne({user_id:req.params.id});
    if(!details){
        res.status(404)
        throw new Error("user not found");
    }
    const deleteUser = await Detail.findOneAndDelete({user_id:req.params.id});
    res.status(200).json({message:`delted -${req.params.id}`});
});

module.exports = {
  getAllUsers,
  getOneUser,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
