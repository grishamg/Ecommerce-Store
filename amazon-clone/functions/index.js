const functions = require( "firebase-functions" );
const express = require( "express" );
const cors = require( "cors" );
const stripe = require( "stripe" )( 'sk_test_51Kh5ldSCmCEPpXnuzYmB26yyt06i0RIRn2Zmrgs1R7shBqiwwUsGdy5Stk5oIrFi3GDuG8EpPJE1svMm2ubeeQJx00fYsPeCyS' )

// api

// - App config
const app = express();

// - Middleware
app.use( cors( { origin: true } ) );
app.use( express.json() );

// - Api routes
app.get( '/', ( req, res ) => res.status( 200 ).send( 'hello world' ) );

app.post( '/payments/create', async ( req, res ) =>
{
    const total = req.query.total;
    console.log( 'payment Req Recieved for this amount ', total );

    const paymentIntent = await stripe.paymentIntents.create( {
        amount: total, // subunits 
        currency: "usd",
    } );

    res.status( 201 ).send( {
        clientSecret: paymentIntent.client_secret,
    } )
} )


// listen command
exports.api = functions.https.onRequest( app );

// example ednpoint
// http://localhost:5001/clone-c263c/us-central1/api)