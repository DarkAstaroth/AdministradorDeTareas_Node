const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcione',
        message: '¿Qué desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opcion'.green);
    console.log('===========================\n'.green);

    const opt = await inquirer.prompt(preguntas);
    return opt;
}
module.exports = {inquirerMenu}