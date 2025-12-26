const asyncHandler = require("express-async-handler"); // try and catch block
const Detail = require("../models/markhamModel");

//@desc Get all info
//@routes GET /markham/
//@access public

const getAllUsers = asyncHandler(async (req, res) => {
  const details = await Detail.find({ user_id: req.user.id });
  res.status(200).json(contact);
});

//@desc Get user by id
//@routes Post/markham/:id
//@access public

const getOneUser = asyncHandler(async (req, res) => {
  const detail = await Detail.find({ user_id: req.params.id }); // we know that user must give id so it will not be empty
  if (!detail) {
    res.send(404); // if no user find of that id
    throw new Error("No contact found for this the id ");
  }
  res.status(200).json(detail);
});

//@desc register user
//@routes Post/markham/register
//@access public 

const registerUser = asyncHandler(async (req, res) => {
  console.log("Input data = ", req.body);
  const { name, email, phoneNumber } = req.body;
  if (!name || !email || !phoneNumber) {
    res.status(400);
    throw new Error("ALL FIELDS ARE MANADATORY"); // when we dont have all the details
  }
  const detail = await Detail.create({
    name,
    email,
    phoneNumber,
    user_id: req.user.id, // created by the moongoose as datatype is objectId
  });
  res.status(201).json(detail);
});

//@desc login user
//@routes Get/markham/login/:id
//@access private

const loginUser = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const detail = await Detail.findbyId({user_id:req.params.id});
    if(!detail){
        res.status(404);
        throw new Error("User not found -- enter a valid id ");
    }
    res.status(200).json(detail);
});

//@desc update user 
//@rotues Put/markham/update/:id
//@access private

const updateUser = asyncHandler(async(req,res)=>{
    const detail = await Detail.findbyId({user_id:req.params.id});
    if(!detail){
        throw new Error("User not found");
    }
    const updateUser = await Detail.findbyIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact)
});

//@desc delete user 
//@rotues Delete/markham/delete/:id
//@access private

const deleteUser = asyncHandler(async(req,res)=>{
    const detail = await Detail.findbyId({user_id:req.params.id});
    if(!detail){
        throw new Error("user not found");
    }
    const deleteUser = await Detail.findbyIdAndUpdate({user_id:req.params.id});
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
