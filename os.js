//-----------------------------------------------------------OS-----------------------------------------------------------------------------
const os = require('os');                                                                   //підключення модуля

console.log("Arch -- " + os.arch())                                                         //виводимо архітектуру процессора девайсу
console.log("CPUS------------------------------------------------------------------------------------------------------------")
console.log(os.cpus())                                                                      //виводимо інформацію про кожне ядро процессора
console.log("User------------------------------------------------------------------------------------------------------------")
console.log(os.userInfo())                                                                  //виводимо інформацію про кожне ядро процессора