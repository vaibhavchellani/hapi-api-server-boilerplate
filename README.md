# Hapi API Server Boilerplate
The HackMerced Hapi API server boilerplate is a boilerplate used by HackMerced internally for some of their projects. This can be used by anyone as a very vanilla and barebones [`Hapi`](https://github.com/hapijs/hapi) installation with only 5 dependencies.

[HackMerced](http://hackmerced.com) |
[Sponsor Us!](http://hackmerced.com/sponsor) 

## Usage

Just do the following to install it onto your computer, make sure you have NPM
```
$ git clone https://github.com/HackMerced/hapi-api-server-boilerplate your-project-name
$ npm run build
```

To run the server do:
```
$ npm start
```

Your website should appear on [localhost:4994](http://localhost:4994)

To adjust environmental variables, edit the `.env_template` file and do:
```
$ npm run env
```
More information on: [envmanager](https://github.com/4shub/envmanager)

## Dependencies
 * [hapi](https://github.com/hapijs/hapi) - As our web-server
 * [boom](https://github.com/hapijs/boom) - For error reporting
 * [dotenv](https://github.com/motdotla/dotenv) - To manage local environmental variables
 * [envmanager](https://github.com/4shub/envmanager) - To automatically load environmental variables for the user
