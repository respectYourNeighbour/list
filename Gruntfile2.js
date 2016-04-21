module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    htmlmin: {
      dest:{
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
        {
          expand: true,     // Enable dynamic expansion.
          src: ['public/views/**/*.html', 'public/*.html'], // Actual pattern(s) to match.
          dest: './dest',   // Destination path prefix.
        },
      ],
      }
    },
    less: {
      development: {
        options: {
          paths: ["public/css/*.css"]
        },
        files: {
          "public/css/style.css": "public/css/*.less"
        }
      }
    },
    concat: {
      // options: {
      //   separator: ';'
      // },
      options: {
        stripBanners: true
      },
      js: {
        src: ['public/js/controllers.js', 'public/js/directives.js', 'public/js/filters.js', 'public/js/services.js', 'public/js/appRoutes.js', 'public/js/app.js'],
        dest: '_temp/deletable/<%= pkg.name %>.js'
      },
      css: {
        src: 'public/css/*.css',
        dest: '_temp/deletable/<%= pkg.name %>.css'
      }
    }, 
    html2js: {
      options: {
        // custom options, see below
        rename: function (moduleName) {
          return moduleName.replace('../dest', '');
        },
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      main: {
        src: ['dest/public/views/**/*.html'],
        dest: '_temp/deletable/templates.js'
      },
    },
    cssmin: {
        add_banner: {
            options: {
                banner: '/* My minified css file */'
            },
            files: {
                'dest/css/style.min.css': ['_temp/deletable/<%= pkg.name %>.css']
            }
        }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dest: {
        files: {
          'dest/js/app.min.js': ['<%= concat.js.dest %>', '_temp/deletable/templates.js']
        }
      }
    },
    watch: 
    {   files: ['css/**/*.less', 'css/**/*.css','js/**/*.js','*.html', 'resources/**/*.json', 'views/**/*.html'],
        tasks: ['newer:less', 'newer:concat', 'newer:htmlmin', 'html2js', 'newer:uglify', 'newer:merge-json', 'newer:jsonmin', 'uncss', 'cssmin'],
        livereload: {
            options: { livereload: true },
            files: ['dest/**/*.html', 'dest/**/*.css','dest/**/*.js','dest/**/*.json'],
        },
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask('default', ['newer:less', 'newer:concat', 'newer:htmlmin', 'html2js', 'newer:uglify', 'cssmin']);
  grunt.registerTask('watchme', ['watch']);
};

/*
1. "newer:less"       -> Converting LESS file to CSS in folder /css;
2. "newer:concat"     -> Concatenating the JS and CSS files to only 1 file each, from folder /js and /css, and sending them to folder dest/deletable;
3. "newer:htmlmin"    -> Minifying the .html files and send them to folder /dest;
4. "newer:uglify"     -> Minifying the JS files from folder dest/deletable to folder dest/js;
5. "cssmin"           -> Minifying the tidy CSS file; 

WATCH: will monitor for changes in all the files mentioned in the watch task, and will execute some task when changes were made to the monitored files;
NEWER: will only trigger a grunt task if the source file is newer than the destination files;

*/