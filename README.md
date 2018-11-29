<p align="center">
  <a href="https://github.com/phen0menon/hexo-with-express">
    <img src="https://user-images.githubusercontent.com/15520523/42703955-2b85ec76-86df-11e8-9fd2-6737f674f7a6.png" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/phen0menon/hexo-with-express/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/phen0menon/hexo-with-express.svg?style=for-the-badge" />
  </a>
  <a href="https://github.com/phen0menon/hexo-with-express/network">
    <img src="https://img.shields.io/github/forks/phen0menon/hexo-with-express.svg?style=for-the-badge" />
  </a>
  <a href="https://github.com/phen0menon/hexo-with-express/stargazers">
    <img src="https://img.shields.io/github/stars/phen0menon/hexo-with-express.svg?style=for-the-badge" />
  </a>
  <a href="https://github.com/phen0menon/hexo-with-express/issues">
    <img src="https://img.shields.io/github/issues/phen0menon/hexo-with-express.svg?style=for-the-badge" />
  </a>
</p>

<p align="center"><b>Connect Hexo with Express.js and develop fast, simple and flexible websites</b></p>

## Quick Start
1.  Make sure that you have Node.js v8 or above installed.
2.  Clone this repo using `git clone https://github.com/phen0menon/hexo-with-express.git`
3.  Move to the appropriate directory: `cd hexo-with-express/blog`.<br />
4.  Run `npm install` in order to install dependencies.<br />
5.  Run `hexo generate` in order to generate Hexo's public files.<br />
6.  Move to the root directory of the project: `cd ../`<br />
7.  Run `npm install` in order to install project-root dependencies.<br />

At this point you can run `npm run start` to see the example app at `http://localhost:4000`

## Guide 
When you edit your blog and want to see some changes, use `hexo generate` in order to create public HTML files and see them on your Express.js server. 

**Important**: Don't forget to restart the server.

## How to add modules to the project
You will need to add other modules to this project, depending on your purposes. For example, you may want to add [node-postgres](https://github.com/brianc/node-postgres) to communicate with PostgreSQL database.

Please read the following section before installing any dependencies

### Module structure
This project uses a two package.json project structure. This means, you will have two `package.json` files.

1. `./package.json` in the root of your project
1. `./blog/package.json` inside `blog` folder

### Which `package.json` file to use
1. If the module connects with Hexo platform, it should be listed under `dependencies` in `./blog/package.json`
2. Modules used for developing (like node-postgres) should be included in `dependencies` in `./package.json`
3. Modules used for building, testing and debugging should be included in `devDependencies` in `./package.json`

## Change URL route of blog
If you want to change url route of blog, for example, you want to change route like this: `http://domain.com/blog`

Please read the following section before doing anything.

### Step-by-step guide
1. Go to `hexo-with-express/blog` and open `_config.yml` file.
Find URL section and change the following:
```js
url: http://localhost:4000/your_blog_dir
root: /your_blog_dir
```
2. In this folder run `hexo generate`.
3. Go to `hexo-with-express/` and open `index.js`. Change the following:
```js
app.use('/your_blog_dir', express.static('blog/public'));
```
4. Restart the server to apply the changes.
5. Open `http://localhost:4000/your_blog_dir`.


## Credits
This project bootstrapped with: [Hexo](https://github.com/hexojs/hexo), [Express.js](https://github.com/expressjs/express) <br />
Made with ❤️ for Hexo

