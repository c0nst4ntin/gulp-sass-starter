<h2 align="center">gulp-sass-starter</h2>

<p align="center">
  <a href="https://github.com/c0nst4ntin/gulp-sass-starter/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/c0nst4ntin/gulp-sass-starter.svg?color=success">
  </a>
  <a href="https://github.com/c0nst4ntin/gulp-sass-starter/">
    <img src="https://img.shields.io/github/package-json/v/c0nst4ntin/gulp-sass-starter?color=success">
  </a>
  <a href="https://gulpjs.com/">
    <img src="https://img.shields.io/github/package-json/dependency-version/c0nst4ntin/gulp-sass-starter/dev/gulp?color=success">
  </a> 
  <a href="https://www.browsersync.io/">
    <img src="https://img.shields.io/github/package-json/dependency-version/c0nst4ntin/gulp-sass-starter/dev/browser-sync?color=success">
  </a>
</p>

<p align="center">
  <em>
    Sass
  · Babel
  · Gulp
  · Browser-Sync Dev Server
  </em>
</p>

This Gulp Sass starter contains the features and scripts you need
to start developing websites using Sass.


## Getting Started

### Requirements
* Please make sure you have NodeJS installed, which is necessary for this starter template.

### Quick Start
Clone the repo:

    git clone https://github.com/c0nst4ntin/gulp-sass-starter.git
    
Navigate to the project folder:

    cd gulp-sass-starter

Install all the packages and dependencies required for this project:

    npm install

Build the Project before starting the development server:

    npm build

Start the development server (then, navigate to [localhost:3000](http://localhost:3000/)):

    npm dev
 
Then, open a browser and navigate to: [localhost:3000](http://localhost:3000/)
    
Building files can be done as follows:

    npm run build

### How To Use
  The `/src/` folder contains all Source Files including sass, js and html. Gulp minifies and compiles the code into the dist folder from here.
  
  The `/dist/` folder contains all compiled files ready for deployment. The files in this folder get served at [localhost:3000](http://localhost:3000/) by BrowserSync.
  
   The `/static/` folder contains all your static or already minified files such as images or js and css libraries.
