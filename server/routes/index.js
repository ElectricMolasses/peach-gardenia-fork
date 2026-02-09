const express = require('express');
const app = express();
 

const wishlistsRoutes = require('./wishlist')
const caseworkerRoutes = require('./caseworker')

//routes for users to view wishlists
app.use('/', wishlistsRoutes)

//routes for caseworkers portal
app.use('/caseworker', caseworkerRoutes)

//Future possible routes
// A route to refresh the wishlists 
// An admin route for developers to view all caseworker accounts 

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

