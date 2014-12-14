module.exports = function(grunt) {

  grunt.initConfig({
    develop: {
      server: {
        file: 'server.js',
        env: { NODE_ENV: 'development'}      // optional
      }
    }
  });

  /** Load NPM Tasks **/
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-develop');

  /** Register Tasks **/
  grunt.registerTask('default', ['develop']);

};
