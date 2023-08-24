const os = require('node:os')

console.log('Informacion de tu Sistema Operativo')
console.log('-------------------------');
console.log('Nombre del Sistema Operativo ', os.platform());
console.log('Version ', os.release());
console.log('Arquitectura ', os.arch());
console.log('CPUs ', os.cpus());
console.log('memoria libre ', os.freemem()/1024/1024);
console.log('memoria total ', os.totalmem()/1024/1024);
console.log('Uptime ', os.uptime() /60 / 60);