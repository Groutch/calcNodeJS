const argv = require('yargs')
    .usage("$0 --[add|sub|mult|div] nombre nombre")
    .option('add', {
        alias: 'a',
        describe: 'Ajoute 2 nombres'
    })
    .option('sub', {
        alias: 's',
        describe: 'Soustrait 2 nombres'
    })
    .option('mult', {
        alias: 'm',
        describe: 'Multiplie 2 nombres'
    })
    .option('div', {
        alias: 'd',
        describe: 'Divise 2 nombres'
    })
    .help()
    .argv;
if (process.argv[3] != undefined && process.argv[4]!= undefined) {
    if (argv.add) {
        const ope = require('./add');
        var result = ope.add(process.argv[3], process.argv[4]);
    }
    if (argv.sub) {
        const ope = require('./substract');
        var result = ope.sub(process.argv[3], process.argv[4]);
    }
    if (argv.mult) {
        const ope = require('./multiply');
        var result = ope.mult(process.argv[3], process.argv[4]);
    }
    if (argv.div) {
        const ope = require('./divide');
        var result = ope.div(process.argv[3], process.argv[4]);
    }
    console.log(result);
}else{
    console.log("Pas assez de paramètre pour l'opération! (\"node calculatrice --help\" pour de l'aide)")
}
