module.exports = function (grunt) {
    grunt.initConfig({
       browserify: {
          '../dist/app.js': ['../main.js']
       },
       jshint: {
          files: ['../*.js'], //location of javascript files
          options: {
             predef: ["document", "console"],
             esnext: true,
             globalstrict: true,
             globals: { "$": true },
             browserify: true
          },
       },
       watch: { //automatically watch for changes
          javascripts: {
             files: ['../*.js'],
             tasks: ['jshint']
          },
          browserify: {
             files: ['../js/*.js'],
             tasks: ["browserify"]
          }
       }
    });
 
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
 };