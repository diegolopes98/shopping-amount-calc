# Development Guide

## Commiting 

The commit comments should follow the
[git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter) short pattern. Example:  

```
docs: add development-guide documentation
```

## Programming Paradigm

Since javascript is an multiparadigm language and we don't have control of that, you could use any paradigm
allowed in js to develop. But it's encouraged to use functional approach to add new features to this project.

## Project Structure

This project adapts the clean architecture concepts, so we have the following project structure:

```
+-- src/
|   +-- data/
|   +-- domain/
|   +-- infra/
|   +-- main/
|   +-- presentation/
|   +-- utils/
```

So before add some file you should consider the following about the folders:

### data

This folder must have only files that implements usecases, that deals with the business rules of the
application

### domain

This folder must have only files that abstracts the data used in the data folder.

### infra

This folder must have only files that implements adaptions of external libraries.

### main

This folder must have only files that implements usecases, that deals with the business rules of the
application

### presentation

This folder must have only files that deals with the data returned of the usecases and somehow map them to the
user.

### utils

This folder must have only files that can be used anywhere in the project
