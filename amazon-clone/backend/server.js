const express = require( 'express' )
const app = express();
const mongoose = require( 'mongoose' )

let port = process.env.PORT || 5000;

app.get( "/", ( req, res ) =>
{
    res.send( "Hello World" )
} )

app.listen( port, () =>
{
    console.log( `Example app is listening on the port http://localhost:${ port } ` )
} )

app.listen( 3000, () => console.log( 'Server Started' ) )

