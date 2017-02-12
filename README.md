# Yet Another Web App: 2008 Olympics Medalists

This app reads data from JSON file and spits out a nice list of countries order by total medals won in the Olympics. 

This is how the input file looks like:

```
[
  {
    "athlete": "KOGO, Micah",
    "country": "KEN",
    "sex": "Men",
    "event": "10000m",
    "medal": "Bronze"
  },
  {
    "athlete": "BEKELE, Kenenisa",
    "country": "ETH",
    "sex": "Men",
    "event": "10000m",
    "medal": "Gold"
  },
  ...
```

And this is the result:

![web app](/web-app.png)

Pretty cool, huh? 👊

And the coolest part is the inner working, so here's a bit of a run down.

# How does it work?

I have used **React** (yup, the one you probably know) and **Redux** (yes, that things everybody says is very simple once you understand it) and a couple of nice little tools. 

There are only a couple of components, some of them stateless, some stateful (like the item of country that can expand to show list of athletes). The filter actually works just with CSS (toggling some classnames), because it was perfectly enough, no need to complicate it and introduce new states in redux.

## So how do I run it locally? 

_Well, you maybe don't need to, it is running on http://olympics.matusmarcin.com. Anyways._

`yarn install`

If you don't have `yarn` you can do `npm i yarn -g` and be the cool kid from now OR you can just use plain `npm install` to get the dependencies. **Yarn** has some advantages though (it comes with a lockfile, like shrinkwrap).

`npm run watch`

Navigate to http://localhost:3333

Ta-da 🎉

## Coding standards, tests, coverage and all

Everything is linted, much of the code is covered by tests and the project is set up so that you (I) keep doing that. Linting is checked as a pre-commit hook and tests run as pre-push. Test coverage is done out of the box by **Jest**.

This is how it looks:

![workflow](/workflow.png)

## We ❤️ CI/CD

When pushed to master branch, **Codeship** picks up the source code, builds it, runs the tests and `rsync`s the new files to the **DigitalOcean** server.

# So that's it?

Yup, I think that's it. 

Feel free to explore the code to learn more or get in touch with me here or [@faster on Twitter](http://www.twitter.com/faster) 👋

👉 **[olympics.matusmarcin.com](http://olympics.matusmarcin.com)**