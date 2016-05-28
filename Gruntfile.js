

module.exports = function(grunt) {

grunt.initConfig({
    connect: {
        server: {
            options: {
                port: 9000,
                base: '.',
                keepalive: true,
            }
        }
    },
    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015'],
            plugins: [
                ["transform-es2015-classes", {
                    loose: true,
                }],
            ]
        },
        main: {
            files: {
                'myapp.js': 'src/js/myapp.js'
            }
        },
    },
});

grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-babel');

grunt.registerTask('default', ['babel', 'connect']);

};
