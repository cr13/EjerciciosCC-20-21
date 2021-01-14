module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        mochaTest: {
            test: {
                options: {
                    reporter: "spec",
                    quiet: false,
                    ui: "bdd",
                },
                src: ["test/**/*.js"],
            },
        },
        run: {
            start: {
                cmd: "pm2",
                args: ["start", "./app.js", "--name", "coches"],
            },
            stop: {
                cmd: "pm2",
                args: ["stop", "coches"],
            },
            delete: {
                cmd: "pm2",
                args: ["delete", "coches"],
            },

        }
    });

    // Carga los plugins de grunt
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-run");
    // Tareas
    grunt.registerTask("test", ["mochaTest"]);
    grunt.registerTask("start", ["run:start"]);
    grunt.registerTask("stop", ["run:stop"]);
    grunt.registerTask("delete", ["run:delete"]);

};
