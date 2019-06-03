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

This software is primarily licensed under the **GNU Affero General Public License v3.0 only** (`AGPL-3.0-only`)

    DECSYS Component Boilerplate
    Copyright (C) 2019

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Other license arrangements may be made as appropriate on request.
