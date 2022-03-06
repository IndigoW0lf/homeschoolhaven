module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                includePaths: ["node_modules/bootstrap-sass/assets/stylesheets"],
            },
            dist: {
                options: {
                outputStyle: "compressed",
                },
                files: [
                    {
                        "assets/css/timetracker.style.min.css":             [ "scss/main.scss"],
                    },
                ],
            },
        },
        uglify: {
            my_target: {
                files: {
                    "assets/bundles/libscripts.bundle.js": [ "node_modules/jquery/jquery.js", "node_modules/bootstrap/js/bootstrap.bundle.js", "assets/plugin/colorpicker/colorpicker.js"],
                    "assets/bundles/apexcharts.bundle.js": [ "node_modules/apexcharts/apexcharts.min.js"],
                    "assets/bundles/sparkline.bundle.js":  [ "node_modules/jquery-sparkline/jquery.sparkline.min.js"],
                    "assets/bundles/dataTables.bundle.js": [ "assets/plugin/datatables/jquery.dataTables.min.js", "assets/plugin/datatables/dataTables.bootstrap5.min.js","assets/plugin/datatables/dataTables.responsive.min.js"],
                },
            },
        },
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    
    grunt.registerTask("buildcss", ["sass"]);	
    grunt.registerTask("buildjs", ["uglify"]);
};