# hexo-with-express
### This repository contains Hexo blogging platform integrated with Express.js

## Quick Start
1.  Make sure that you have Node v8 or above installed.
2.  Clone this repo using `git clone https://github.com/phen0menon/hexo-with-express.git`
3.  Move to the appropriate directory: `cd blog`.<br />
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

## Credits
This repository would not be possible without these amazing folks: [Hexo](https://github.com/hexojs/hexo), [Express.js](https://github.com/expressjs/express)

## License
This project is licensed under the Apache license, Copyright (c) 2018
