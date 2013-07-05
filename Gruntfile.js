module.exports = function(grunt) {"use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    coffee: {
      App: {
        options: {
          bare: true
        },
        src: ['src/main/coffee/LAB_sample.coffee'],
        dest: 'src/main/js/LAB_sample.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      App: {
        files: {
          'src/main/webapp/js/LAB_sample.min.js': ['src/main/js/LAB_sample.js']
        }
      }
    },
    watch: {
      scripts: {
        files: '**/*.coffee',
        tasks: ['coffee', 'uglify'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['coffee:App', 'uglify:App']);
};
