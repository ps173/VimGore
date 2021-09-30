# Running Vimgore Locally 

## Setting up 

Make sure you have following dependencies installed :

`mongodb`, `nodejs (15+)`

Then clone the repo locally :
```bash

git clone https://github.com/ps173/VimGore.git
cd Vimgore

```

Now install the required node-dependencies by npm install in both `client` and `server` folder.
Also You will be running 2 different servers. One for backend and other for frontend.

To make sure frontend works. Do :
```bash

cd client 
npm run build 
npm start

```
this will start frontend server at `http://localhost:3000`. You can also run dev version by doing 
`npm run dev`.

Next make sure that backend is running. Do : 
```bash

cd server
npm start

```
You can also do dev version by `npm run dev`. (Note this requires nodemon installed on your system).
This will run the backend on `http://localhost:8080`. 
