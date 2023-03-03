# simple-shop
Simple Shop with cart, made with React, router-dom, redux...

## How to deploy a Vite React App with GitHub pages
install github pages package as a dependency.

```
npm install gh-pages --save-dev
```

## Create GitHub repositoryy
Go to the console and connect your github

```
git remote add origin https:your-repo-here
git branch -M main
git push -u origin main
```

## Adding some scripts
Go to your package.json and add some "scripts"

```
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",
```

## Deploy your App

```
npm run deploy
```

Let it do its things, and you will see "published" on your terminal.
It will create a dist folder on the root.

Go to your repository and check Actions, wait for it to finish the deployment and click the url given, where it is deployed.
You will see a white screen, don't panic.

## Add the propper path
Go back to package.json and add --base=/your-repository/ with the name of your repository between bars, to your "build" script

```
"build": "vite build --base=/simple-shop/",
```

## Does it work?
For some people it works allready on this step, but in my case, it did not, so if it still does not work, do the following.
Go back to your package.json and add a "homepage"
```
"name": "simple-shop",
"homepage": "https://yelose.github.io/simple-shop/",
```
With your deployed app url.

Now it should work, if you have problems with the images, add a . before the /.

```
<img src="./vite.svg" className="logo" alt="Vite logo" />

```

Para ver el tutorial en español
https://www.youtube.com/watch?v=e3SV6tYztz0
