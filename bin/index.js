#!/usr/bin/env node
console.log( "Detecting your OS..." );
const os = require ('os');
var type = os.type();
console.log(type);
var wget = require('wget-improved');
const commandExists = require('command-exists');
commandExists('curl', function(err, commandExists) {
 
    if(err) {
        console.log("installing curl...");  
        switch(type) { 
            case 'Darwin': 
                wget.download(' https://opensource.apple.com/source/curl/' , '~/Downloads/curlFile'); 
                break; 
            case 'Linux':  
                wget.download('http://downloads.openwrt.org/kamika...2/ar7/packages/' , '~/Downloads/curlFile');
                break; 
            case 'Windows_NT': 
            wget.download('https://curl.haxx.se/windows/', 'c:/Users/Downloads/curlFile'); 
                break;     
            default:  
                console.log("other operating system"); 
        } 
 
            
        }
     })
 
;

commandExists('wget', function(err, commandExists) {
 
    if(err) {
        console.log("installing wget...");
        switch(type) { 
            case 'Darwin': 
                wget.download('https://ftp.gnu.org/gnu/wget/wget-1.19.5.tar.gz' , '~/Downloads/wgetFile'); 
                break; 
            case 'Linux':  
                wget.download('https://ftp.gnu.org/gnu/wget/wget-1.21.1.tar.gz.sig' , '~/Downloads/wgetFile');
                break; 
            case 'Windows_NT': 
            wget.download('https://eternallybored.org/misc/wget/1.20.3/32/wget.exe', 'c:/Users/Downloads/wgetFile'); 
                break;     
            default:  
                console.log("other operating system");         
     }
    }
 
});
commandExists('npm', function(err, commandExists){
 
    if(err) {
        console.log("installing nodejs...");
        switch(type){
            case 'Darwin': 

            wget.download('https://nodejs.org/dist/v14.15.4/node-v14.15.4.pkg' , '~/Downloads/njsFile'); 
            break; 
            case 'Linux':  
            wget.download('https://nodejs.org/dist/v14.15.4/node-v14.15.4-linux-x64.tar.xz' , '~/Downloads/njsFile');
            break; 
            case 'Windows_NT': 
            wget.download('https://nodejs.org/dist/v14.15.4/node-v14.15.4-x64.msi', 'c:/Users/Downloads/njsFile'); 
            break;     
            default:  
            console.log("other operating system");  
        }
             
     }
}
)