[![kickup-react](https://s3.eu-central-1.amazonaws.com/github-banner/kickup-react.jpg)](#)

<p align="center">
<a href='https://coveralls.io/github/kreativgebiet/kickup-react?branch=master'><img src='https://coveralls.io/repos/github/kreativgebiet/kickup-react/badge.svg?branch=master' alt='Coverage Status' /></a>
<a href="https://circleci.com/gh/kreativgebiet/kickup-react"><img src="https://img.shields.io/circleci/project/github/kreativgebiet/kickup-react.svg" /></a>
<a href="https://github.com/kreativgebiet/kickup-react/releases"><img src="https://img.shields.io/github/release/kreativgebiet/kickup-react.svg" /></a>
<a href="https://david-dm.org/kreativgebiet/kickup-react" target="_blank"><img src="https://img.shields.io/david/kreativgebiet/kickup-react.svg" /></a>
<a href="https://david-dm.org/kreativgebiet/kickup-react?type=dev" target="_blank"><img src="https://img.shields.io/david/dev/kreativgebiet/kickup-react.svg" /></a>
</p>

## Why another boilerplate?

We at [Kreativgebiet](https://kreativgebiet.com)/[Fintory](https://fintory.com) aim to move fast and always on the bleeding-edge of technology. That's why we created our own boilerplate. Of course, we started with the boilerplate from [TJ](https://github.com/tj/frontend-boilerplate) and continued from where he left.
Since we always want to used bleeding-edge, we needed to have the ability to quickly adapt the boilerplate to our latest needs. That's, why `kickup-react` is here.

## What's in there?

| Module Name | What is it for? |
| --- | --- |
| :atom: React | Well, I think you know what this is for |
| :zap: Redux | State management in React. Done right. |
| :nut_and_bolt: Webpack | Compilation of React and all other modules |
| :syringe: Babel | Using ES6 things in ES5 browsers right now |
| :paintbrush: aphrodite | Excellent CSS-in-JS framework |
| :sparkles: Flow | Type checker for ES6 and javascript |
| :bug: eslint | Linting the Javascript-code |
| :bomb: immutable.js | Make things immutable (and comparable) |
| :boom: CircleCI | Automate deployments and integration tasks |

## How to set it up?

If you also want to use the `kickup-react` boilerplate, you can simply `git clone` the repository or download the zip file into your project folder and unzip it. If you are aiming to use this boilerplate, I assume that you are already familiar how to clone it into your `development` folder.

*Note:* Be sure to change the README, package.json, etc. since there are some information about Kreativgebiet and the creators of this boilerplate.

### Development Setup

Basically all you need to do is run the following command into the freshly cloned folder, since webpack and npm is handling all that development stuff for you:

```sh
npm start
```

*Note:* Or if you prefer `yarn` instead of `npm`, just use `yarn start`.

### Production Setup

Production-use is as easy as development setup. Again, only one simple command is needed for webpack to compile the whole application. A deployment process isn't included _yet_, but is planned, since we are always searching for the latest awesome and easiest deployment strategy (Remember -> Bleeding-edge).

```sh
npm run build # or yarn build
```

## License

> Copyright 2016-2017 Kreativgebiet GmbH
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
