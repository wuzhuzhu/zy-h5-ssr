[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-kea)

# Deprecated
# 8win SSR FE framework

## Tech Feature

- [x] [`koa`](http://koajs.com/) Node server we based on
- [x] [`kea`](https://kea.js.org/) High level abstraction between React and Redux
- [x] [`PWA`](https://developers.google.com/web/progressive-web-apps/) A new way to deliver amazing user experiences on the web.
- [x] [`sw-precache-webpack-plugin`](https://github.com/goldhand/sw-precache-webpack-plugin) A webpack plugin for using service workers to cache your external project dependencies



### How To Use

Download [`create-next-app`](https://github.com/segmentio/create-next-app) to bootstrap the example:

``` bash
git clone https://link/of/this/git/repo
yarn
// dev( sw cache not working )
npm run dev
// prod( active pwa mode )
npm run build
npm start
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```
