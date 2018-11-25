module.exports = function(grunt) {

     'use strict';

    /**
     *
     *        Install dependencies:     npm install
     *
     *             When developing:     grunt dev
     *              For production:     grunt build
     *
     *
    **/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            name: '<%= pkg.name %>'
        },

        // Concat
        concat: {
            js: {
                src: [
                    'src/assets/scripts/vendors/modernizr.custom.js',
                    'src/assets/scripts/vendors/swiper.js',
                    'src/assets/scripts/vendors/jquery.js',
                    'src/assets/scripts/vendors/bootstrap.js',
                    'src/assets/scripts/custom/*.js'
                ],
                dest: 'dist/assets/scripts/app.js'
            }
        },

        // Uglify JS
        uglify: {
            options: {
                compress: {
                    warnings: false
                },
                mangle: true,
                preserveComments: /^!|@preserve|@license|@cc_on/i
            },
            js: {
                files: [
                    {
                        src: 'dist/assets/scripts/app.js',
                        dest: 'dist/assets/scripts/app.min.js'
                    }
                ]
            }
        },

        // SASS
        sass: {
            options: {
                sourceComments: false,
                sourceMap: false
            },
            front: {
                files: [{
                    src: 'src/assets/scss/styles-screen.scss',
                    dest: 'dist/assets/css/styles-screen.css'
                }]
            }
        },

        // min CSS

        cssmin:{
            my_target:{
                files: [{
                    expand: true,
                    cwd: 'dist/assets/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/assets/css/',
                    ext: '.min.css'
                }]
            }
        },

        // Copy
        copy: {
            gfx: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/gfx',
                    src: ['*.jpg', '*.gif', '*.png', '*.svg'],
                    dest: 'dist/assets/gfx/'
                }]
            }
        },



        // Watch
        watch: {
            sass: {
                files: ['src/assets/scss/**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['src/assets/scripts/**/*.js'],
                tasks: ['concat', 'uglify']
            },
            jpg: {
                files: ['src/assets/gfx/*.jpg', 'src/assets/gfx/*.png', 'src/assets/gfx/*.svg'],
                tasks: ['copy:gfx']
            }
        }
    });

    // Load Npm Tasks

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Tasks
    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('build', ['concat', 'uglify', 'copy', 'sass']);
};
