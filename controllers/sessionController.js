

exports.generateSession = async (req, res) => {

    const stripe = require('stripe')(process.env.STRIPE_KEY);

    const response = await req.body
    console.log(response)

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: 'price_1JQKb0KUZvJxZ0r3i5ZFIeOE',
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

        res.json({
            redirect_url: session.url
    })

}