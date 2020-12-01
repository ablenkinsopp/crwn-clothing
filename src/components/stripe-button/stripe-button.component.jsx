import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HtXzZH6za5WXCO8zYdK2oyDvT3WzgKWavIjN6UmEY2FYX6ceqpyzZg4zQhtqA5H1ZWgVBswY2lSTg56Y6eMNtJH00NwN5N6Yn'
    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN CLOTHING'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency='GBP'
        />
    )
}

export default StripeCheckoutButton