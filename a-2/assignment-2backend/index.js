const os= require('os');
console.log('platform:', os.platform());
console.log('userInfo:', os.userInfo());
console.log('cpus:', os.arch());
console.log('free memory:', os.freemem());
console.log('memory:', os.totalmem());
console.log('time',os.uptime());
console.log('homedir',os.homedir());
console.log('host-name',os.hostname());