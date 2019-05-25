# boilerplate
Simple frontend boilerplate using Gulp


## Getting Started
Put all files in the root of your project folder. To get started install all node modules using the Node Package Manager.

### Installation
```shell
$ npm install
```

### Folders
  The `/src/` folder contains all Source Files including sass, js and html. Gulp minifies and compiles the code into the dist folder from here.
  
  The `/dist/` folder contains all compiled files ready for deployment. The files in this folder get served at [localhost:3000](http://localhost:3000/) by BrowserSync.
  
   The `/static/` folder contains all your static or already minified files such as images or js and css libraries.
  
### Tasks
| Command                  | Result  |
| ------------------------ |-------- |
| `$ npm run dev`          | Watches all files and starts a development server at: [localhost:3000](http://localhost:3000/) |
| `$ npm run build`        | Compiles and Minifies all files from `/src/` & copies `/static/` into the `/dist/` folder     |
| `$ npm run build-src`    | Compiles and Minifies all files from `/src/` into the `/dist/` folder|
| `$ npm run build-static` | Copies all files from `/static/` into the `/dist/` folder|
