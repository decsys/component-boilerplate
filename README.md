# DECSYS Component Boilerplate

This repository contains everything needed to create an Interactive Response Component for the DECSYS Survey Platform.

- It implements a very basic component as an example
- it provides build scripts and dependencies for  easily building a component ready to use with the DECSYS Survey Platform.

# Getting Started

1. Either:
    - Download the latest code from `master` and use it as a starting point for your own component.
    - Clone this repository, then set the remote `origin` to another git repository for your own component.
1. `npm install`.
1. Make changes to the files in `src/` to build your component.
    - ℹ You shouldn't need to touch `index.js`
    - ✅ Add or remove `dependencies` using `npm`
    - ⚠ Don't modify the `devDependencies` 
        - the build processes depend on them, and are preconfigured for outputting a module the Survey Platform can use.
    - ⚠ Don't modify the `peerDependencies`
        - they are correctly configured for dependencies the Survey Platform will fulfill.
1. `npm run storybook` to test your component visually and interactively.
1. `npm run build` to build a distributable version of your component which can be used in the Survey Platform.

>  ℹ For an example of how to build a component using this boilerplate, documentation will be linked here soon.
>
> `//TODO: Add documentation`

> ℹ The first party DECSYS components may also be interesting points of reference.
> - Look for any repository that ends in `-component` in the DECSYS' GitHub organisation.

> ℹ [Check out the Wiki](https://github.com/decsys/component-boilerplate/wiki) for more detailed information.

# Licensing

At this time, this software has no license, and therefore all rights are reserved as per author copyright, with the exception of rights waived under the GitHub Terms of Service.

Please don't modify, distribute or use this software until a license is in place.
