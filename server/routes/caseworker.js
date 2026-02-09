const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended:true}))


//Caseworker portal where they can sign in or request an account
router.get('/', (req,res)=>{
  res.send("Welcome to caseworker portal homepage")
})

//Route to submit login information
router.post('/', (req,res)=>{
   res.send("Caseworker is now logged in")
})

//Caseworker contact form - get route
router.get('/form', (req, res)=>{
  res.send("Contact form for caseworkers to sign up")
})

//Caseworker contact form - post route
router.post('/form', (req,res)=>{
  res.send("Account request submitted")
})



//All wishlists that are related to caseworker id
router.get('/:id', (req,res)=>{
  res.send("Here are all the wishlists made by this caseworker")
})

//Get one wishlist
router.get('/wishlist/:id', (req,res)=>{
  res.send("Viewing one wishlist in caseworker portal") 
})

//Edit wishlist - GET route to populate fields
router.get('/wishlist/:id/edit', (req,res)=>{
  res.send("You're now editing a list")
})

//Update wishlist - PUT route
router.put('/wishlist/:id', (req,res)=>{
  res.send("Wishlist updated!")
})

//create a wishlist
router.post('/:id', (req,res)=>{
  res.send("New wishlist created")
})

//delete a wishlist
router.delete('/wishlist/:id', (req,res)=>{
  res.send("Wishlist deleted")
})



module.exports = router