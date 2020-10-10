# Coding A Vision - Angular Course
## Final Project
---
### Global npm packages
Useful global npm packages:
- **npx**: Executes CLI tools by downloading the latest version on-demand or the
project-specific local node_modules folder. Npx ships with npm 5+ and allows
you to run code generators that frequently update without a global install.
- **rimraf**: The Unix command rm -rf works on Windows as well. It's very
useful for deleting the node_modules folder, especially when Windows is
unable to do so due to the nested folder structure.
- **npm-check-updates**: Analyzes your project folder and reports on which
package has newer versions or not, with the option to be able to update all
of them if you so wish. ncu for short.
- **n**: A dead easy to tool to switch between versions of Node quickly, without
having to remember the specific version number, which works on macOS/
Linux. For Windows, you can use the choco package, nvs; both n and nvs
are covered in the Appendix C, Keeping Angular and Tools Evergreen.
- **http-server**: A simple, zero-configuration command-line HTTP server,
which is a great way to locally test static HTML/CSS pages or even the dist
folder of your Angular or React project.
- **npm-windows-upgrade**: Necessary to upgrade npm on Windows.
- **npkill**: Easily find and remove old and heavy node_modules folders and
reclaim gigabytes of disk space.  
--- 
### Configuring your project automatically
Apply the following configuration:
- **Angular VS Code**  
  Install the Angular VS Code task: `npm i -g mrm-task-angular-vscode`	  
	Apply the Angular VS Code configuration: `npx mrm angular-vscode`  
- **Npm scripts for the Docker tasks** 
  Install the npm Scripts for the Docker task: `npm i -g mrm-task-npm-docker`  
  Apply the npm Scripts for Docker configuration: `npx mrm npm-docker`  

- Execute `npm run style:fix`  
- Execute `npm run lint:fix`

```
For more information on the mrm tasks, refer to:
• https://github.com/expertly-simple/mrm-task-angular-vscode
• https://github.com/expertly-simple/mrm-task-npm-docker
• https://github.com/expertly-simple/mrm-task-npm-aws
```  
---
### Configuring Tooling
- Make sure the **Prettier** – **Code formatter**, **TSLint**, **sort-imports**, and **Beautify**
  extensions are installed (already included in extensions.json)   
- Install the CLI tools by executing the following command:  
  `npm i -D prettier tslint-config-prettier tslint-plugin-prettier`  
  `npm i -D js-beautify`  
  `npm i -D import-sort import-sort-cli import-sort-style-module`  
  `npm i -D tslint tslint-etc`  
