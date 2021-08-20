const Tour = require('../models/Tour');
const { findById } = require('../models/User');

exports.generateSession = async (req, res) => {
    console.log("Entre a generatesession")
    const stripe = require('stripe')(process.env.STRIPE_KEY);

    const response = await req.body
    const respuesta = await Tour.findById(req.body.tour)
    const priceId = respuesta.stripeId
    console.log(response)

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: response.totalDays
            },
        ],
        mode: 'payment',
        payment_method_types: [
            'card',
        ],
        success_url: `${process.env.REACT_URL}/payment-completed`,
        cancel_url: `${process.env.REACT_URL}/payment-cancelled`
    })
    console.log(session)
    res.json({
        redirect_url: session.url
    })

}