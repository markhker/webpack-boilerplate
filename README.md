# Webpack Boilerplate

> Webpack Boilerplate is an opinionated boilerplate for front end development
> to quickly build up a production-ready marketing website built on top of [jQuery](https://jquery.com/),
> [Pure.css](http://purecss.io/), [Waypoints](http://imakewebthings.com/waypoints/) and
> [Animate.css](https://daneden.github.io/animate.css/). Containing modern web development
> tools such as [Webpack](http://webpack.github.io/) and [Babel](http://babeljs.io/)
> Helping you to stay productive following the best practices.
> A solid starting point for both professionals
> and newcomers to the industry.

### Requirements

  * Mac OS X, Windows, or Linux
  * [Node.js](https://nodejs.org/) v5.0 or newer
  * `npm` v3.3 or newer (new to [npm](https://docs.npmjs.com/)?)
  
### Directory Layout

Before you start, take a moment to see how the project structure looks like:

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /js/                        # The source code of the application
│   └── /app.js                 # Point entry startup script
├── /images/                    # Public images of the website
├── /css/                       # App style sheets
│   ├── /_base.css              # Base styles for all pages, contains fluid typography system
│   ├── /_fonts.css             # Imports custom fonts
│   ├── /_responsive.css        # Contains the pure.css custom grid and media query mixins
│   ├── /_vars.css              # To define all the sass vars
│   ├── /app.css                # Principal style sheet
└── package.json                # The list of 3rd party libraries and utilities
```

### Quick Start

#### 1. Get the latest version

You can start by cloning the latest version of React Webpack Boilerplate on your
local machine by running:

```shell
$ git clone -o webpack-boilerplate -b master --single-branch \
      https://github.com/markhker/webpack-boilerplate.git MySite
$ cd MySite
```

#### 2. Run `npm install`

This will install both run-time project dependencies and developer tools listed
in [package.json](package.json) file.

#### 3. Run `npm run dev` to develop locally

This command will serve the site from the source files (`/src`) into the output

> [http://localhost:8080/](http://localhost:8080/) — Server <br>

Now you can open your web site in a browser, and start hacking. 
Whenever you modify any of the source files the module bundler ([Webpack](http://webpack.github.io/)) 
will recompile the app on the fly and refresh the browser.

### How to Build

If you need to build the website (without running a dev server), simply:

1. In `webpack.config.js` file, replace `www.example.com` with the real domain name.

2. Run

```shell
$ npm run build
```

3. Copy the following folders/files to web server

	/build,
	/image,
	index.html

### To-Do List

  * Add [Browsersync](http://www.browsersync.io/) to dev on multiple browsers and mobile
  * Add Demo page
