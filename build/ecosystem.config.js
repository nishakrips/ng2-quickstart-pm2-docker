module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "RulesEditorApp",
      script    : "index.js",
      watch     : true,
      env_local: {
        COMMON_VARIABLE: "true",
        PORT:4080,
        NODE_ENV: "local"
      },
      env_development : {
        PORT:3000,
        NODE_ENV: "development"
      },
      // env_production : {
      //   PORT:4080,
      //   NODE_ENV: "production"
      // }
    },

    // Second application
    // {
    //   name      : "WEB",
    //   script    : "web.js"
    // }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  // deploy : {
  //   production : {
  //     user : "node",
  //     host : "212.83.163.1",
  //     ref  : "origin/master",
  //     repo : "git@github.com:repo.git",
  //     path : "/var/www/production",
  //     "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env production"
  //   },
  //   dev : {
  //     user : "node",
  //     host : "212.83.163.1",
  //     ref  : "origin/master",
  //     repo : "git@github.com:repo.git",
  //     path : "/var/www/development",
  //     "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env dev",
  //     env  : {
  //       NODE_ENV: "dev"
  //     }
  //   }
  // }
}
