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
    const jsx =  `
        <html>
            <head>
                <meta charset="utf-8"></meta>
                <meta name="theme-color" content="#FBDBDC"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <title>Kosset</title>
            </head>
            <body>
                <h1>Welcome ${name}!</h1>
                <p>Andi mandi shandi </p>
            </body>
        </html>
    `
    return jsx

}