const { execFileSync } = require('child_process');
const { readFileSync } = require('fs');

const template = readFileSync('template.json', 'utf8');

// ---

console.log('Running Cat (to prove piping works):')
const catOutput = execFileSync('cat', ['-'], {
    input: template,
});

console.log(catOutput.toString());

// ---

console.log('Running One Password:')
const opOutput = execFileSync('op', ['item', 'create', '-'], {
    input: template,
});

console.log(opOutput.toString());
