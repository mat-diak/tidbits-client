## Description

Deployed app: https://tidbits-tidbits.netlify.app/  
This is the client-side of snacks-app. It works alongside a rest API - https://github.com/mat-diak/tidbits-server

## Features

- user Authentication using JWT
- adding habits
  - specifying how long to keep the habit for and how many times a day to do it
  - incrementing the rep count of the habit that is completed
  - selecting from suggested habits list (e.g. 5 random recipes a day)

## Features in development:

- user can rearrange the habits by dragging them

## To run locally

###  Before running:

1. Have the server-side running in the background.

You can find more info on how to set up the server side here: https://github.com/mat-diak/tidbits-server

2. In command line:

```
npm install
npm start
```

The page is gonna be available on
http://localhost:3000

To run tests

```
npm run cy:run
```

Demo images:

<p style="text-align: center">
  <img src="https://i.imgur.com/QJ5jqJL.png">
</p>

<p style="text-align: center">
  <img src="https://i.imgur.com/Vr4e6yz.png">
</p>

<p style="text-align: center">
  <img src="https://i.imgur.com/WHgIfJ6.png">
</p>

<p style="text-align: center">
  <img src="https://i.imgur.com/hyN5OHC.png">
</p>

<p style="text-align: center">
  <img src="https://i.imgur.com/MWp7LdN.png">
</p>

<p style="text-align: center">
  <img src="https://i.imgur.com/I1MTF1g.png">
</p>
