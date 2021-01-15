# SCA-Cloud-School-Application
This exercise is to create/Build a Command-line interface (CLI) application which will install the following softwares: wget, curl, Node.js
I opened my computer’s command prompt to change the current directory to the folder for CLI project
Opened CLI project in text editor
Created a folder named bin and added a new file to the bin folder named index.js
Created package.json in root of project.  Changed the main value to bin/index.js. 
Added a new key for bin: "hello": "./bin/index.js"
Typed "npm install -g" to run script from anywhere


In index.js file, I started with shebang
Then, I determined user's OS with 'os' module - os.type()
Saved the value in var "type" to be used throughout script
I used commandExists module to determine if the commands(wget,curl and npm) exist
I used wget module to download the commands from the internet
If the callback function in commandExists returns an error, it means the command doesn't exist on the user's system
I then downloaded it (with wget) from the official websites into their downloads folder, depending on the Os of the system.
