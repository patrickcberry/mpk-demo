# mpk-demo
Meteor package - demo meteor package

This a a demonstration project for the use of local Meteor packages. The 
[meteor-mpk-test](https://github.com/patrickcberry/meteor-mpk-test) repository contains a
Meteor project that includes this package.

## Namespaces

To publish to Atmosphere package names must be of the form `username:my-package` where `username`
is a Meteor Developer username.

If packages are local only any package name can be used. If there is a clash of names then the local package
will be used.

## Include in a Project

This describes installation on a windows system.

* Create a folder for local meteor projects. I am using `D:\Users\pb-home\projects\meteor-packages`
* Set the meteor package directory envoirnment variable, 
```
SET METEOR_PACKAGE_DIRS=D:\Users\pb-home\projects\meteor-packages
```
* Add the package to the project packages files

