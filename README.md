# Welcome to your Bit Workspace




To get started straight away run `bit start` and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment.

```bash
bit start
```

## What's included

- **workspace.jsonc**

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the React env. However you can create other components and apply other envs to them such as node, html, angular and aspect envs.

- **.bitmap**

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.


- **Demo Components**

A folder (unless the --empty flag was used) cont`aining demo components are included in this workspace. These components are used to demonstrate the different features of Bit. If you would like to remove these components you can run the following command.

```jsx
bit remove "ui/*" --delete files
```

This removes the components from the bitmap as well as removes the files.


- **.gitignore**

Ignoring any files from version control


## Bit Install

npx @teambit/bvm install

## Bit Workspace Creation

Create Components and Export them into Bit and then import them when we need.
bit new react foldername --default-scope "example scope" 

bit new: create new workspace
react: let bit know that the workspace is based on react
default-scope "example scope": we define the default scope here. 
 
## Create Components and Export them into Bit
bit create react componentname  

componentname: define component name and adding / creates another folder to that component.
Note:Recomended to add the folder to the component. 


## Bit Status

bit status: Outputs list of the status of the components (lists status of new and modified components )

## Bit Compile

bit compile: compiles the newly created components

## Install Package

bit install packagename

This will install the packages from the npm/pnpm/bit repository (Public directory or our own package- components in our scope)

## Authentication
bit login

This will prompt a new page for authentication. Enter the credentials and it will automatically login to the Bit repository.


## Create File across the app/workspace

touch path 

Example: touch test/testingcomponent/input.module.css

This will create a new file at the specified path.
## Run the Application

bit start

This will run the application and show our own Bit repository


## Export the Component

bit tag -m "message": tags the component.

For example: bit tag -m "first version"

Why bit tag?

By taging the component, bit goes through a cycle of installing all dependencies and then it will also test the component that is working as expected and it will also build the component and create a consumable package for our component so that anyone can install it into their project.

bit export:  Exports the component to the cloud. If you get an authentication error, please enter bit login.
bit reset: To unstage versions

## list all the components
bit list: List all the components with component ID ,  version number in scope and used in the workspace

bit use: 

## Installation and compile
bit install & bit compile



## Bit import packages from bit respository

bit import packagename: Imports source files from the Bit component from the Bit repository. This will allow you to modify the component and also can create the new version(tag). For example:color.

Also, using this command , it will pulls latest versions of Bit Components.

bit install: Installs the bit component into the node modules and cannot able to modify the component.


bit init: Initializes the Bit to the existing project.


bit show componentname: list all components

bit eject componentname: Uninstalls the component and save in the node modules

bit fork: Creates the new Bit Component with your own version of that component.

bit app list: Lists all the app components

bit run myapp: To run the Bit app