import React from 'react';

export const newUserAdmin = (email, name) => {
    const jsx =
        `<html>
            <head>
                <meta charset="utf-8"></meta>
                <meta name="theme-color" content="#FBDBDC"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <title>Kosset</title>
            </head>
            <body>
                <h1>New User Alert!</h1>
                <p>${name} just signed up with email ${email}</p>
            </body>
        </html>`

    return jsx
}
export const newUser = (email, name) => {
    const jsx = `
        <html>
            <head>
                <meta charset="utf-8"></meta>
                <meta name="theme-color" content="#FBDBDC"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <title>Kosset</title>
            </head>
            <body>
                <h1>Welcome to Kosset, ${name}!</h1>
                <p>Andi mandi shandi </p>
            </body>
        </html>
    `
    return jsx
}
export const newOrderUser = (details, cart) => {

    let review = '';
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id.slice(-2) == 'TB') {
            review += `<br> <h2> ${cart[i].quantity} x Kosset Trial Box</h2>`
        }
        else if (cart[i].id.slice(-2) == 'KB') {
            if (cart[i].HFOP != 6 || cart[i].LMFP != 7 || cart[i].PLSD != 2) {
                review += `<br> <h2>${cart[i].quantity} x Custom Box, with </h2>`
                review += `<p>    ${cart[i].HFOP} x Heavy Flow and Overnight Pads(L)  </p>`
                review += `<p>    ${cart[i].LMFP} x Light and Medium Flow Pads(M) </p>`
                review += `<p>    ${cart[i].PLSD} x Panty Liners for  spotting and discharge </p>`
            }
            else
                review += `<br> <h2>${cart[i].quantity} x Kosset Box </h2>`
        }
    }
    const jsx = `
        <html>
            <head>
                <meta charset="utf-8"></meta>
                <meta name="theme-color" content="#FBDBDC"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <title>Kosset</title>
            </head>
            <body>
                <h1>Your order has been successfully placed</h1><br />
                <p>Please review your order</p>`
        + review + `
                <br>
                <br>
                <h3>Delivery Address: ${details.address}</h3>
                <h3>Total Cost: ${details.cost}</h3>

            </body>
        </html>
    `
    return jsx
}
export const newOrderAdmin = (details, name, cart) => {

    let review = '';
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id.slice(-2) == 'TB') {
            review += `<br> <h2> ${cart[i].quantity} x Kosset Trial Box</h2>`
        }
        else if (cart[i].id.slice(-2) == 'KB') {
            if (cart[i].HFOP != 6 || cart[i].LMFP != 7 || cart[i].PLSD != 2) {
                review += `<br> <h2>${cart[i].quantity} x Custom Box, with </h2>`
                review += `<p>    ${cart[i].HFOP} x Heavy Flow and Overnight Pads(L)  </p>`
                review += ` <p>    ${cart[i].LMFP} x Light and Medium Flow Pads(M) </p>`
                review += ` <p>    ${cart[i].PLSD} x Panty Liners for  spotting and discharge </p>`
            }
            else
                review += `<br> <h2>${cart[i].quantity} x Kosset Box </h2>`
        }
    }

    const jsx = `
        <html>
            <head>
                <meta charset="utf-8"></meta>
                <meta name="theme-color" content="#FBDBDC"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <title>Kosset</title>
            </head>
            <body>
                <h1>New order from ${name}</h1><br />
                <p>Order details:</p>`+
        review +
        `
                <br>
                <br>
                <h3>User details:</h3>
                <h3>Name: ${name}</h3>
                <h3>email: ${details.email}</h3>
                <h3>Phone number: ${details.phone}</h3>
                <h3>Delivery Address: ${details.address}</h3>
                <h3>Total Cost: ${details.cost}</h3>
                
            </body>
        </html>
    `

    return jsx

}