

# Baaz CLI
### Development tools and libraries specialized for Baaz Framework

This is the home of the DevKit and the Baaz Framework CLI code. You can find the Baaz Framework CLI specific README
[here](/README.md).


[![CircleCI branch](https://img.shields.io/circleci/project/github/dominicg666/baaz-cli/master.svg?label=circleci)](https://circleci.com/gh/dominicg666/baaz-cli) [![Dependency Status](https://david-dm.org/dominicg666/baaz-cli.svg)](https://david-dm.org/dominicg666/baaz-cli) [![devDependency Status](https://david-dm.org/baaz/baaz-cli/dev-status.svg)](https://david-dm.org/dominicg666/baaz-cli?type=dev) 

[![License](https://img.shields.io/npm/l/@baaz/cli.svg)](/LICENSE) 

[![GitHub forks](https://img.shields.io/github/forks/dominicg666/baaz-cli.svg?style=social&label=Fork)](https://github.com/dominicg666/baaz-cli/fork) [![GitHub stars](https://img.shields.io/github/stars/dominicg666/baaz-cli.svg?style=social&label=Star)](https://github.com/dominicg666/baaz-cli) 

## Documentation

[here](https://baazframework.github.io/)

### Quick Links
[Gitter](https://gitter.im/dominicg666/baaz-cli) | [Contributing](/CONTRIBUTING.md) | [Baaz CLI](http://github.com/dominicg666/baaz-cli) | 
|---|---|---|

----

## The Goal of Baaz CLI

The Baaz CLI creates, manages, builds and test your Baaz PWA projects. It's built on top of the
Baaz Framework DevKit.

## The Goal of DevKit

DevKit's goal is to provide a large set of libraries that can be used to manage, develop, deploy and
analyze your code.

# Getting Started - Local Development

1. Clone to your local computer using `git`.
1. Make sure that you have Node 10.14 or later installed. See instructions [here](https://nodejs.org/en/download/).
1. Make sure that you have `yarn` installed; see instructions [here](https://yarnpkg.com/lang/en/docs/install/).
1. Run `yarn` (no arguments) from the root of your clone of this project to install dependencies.

## Installation

To get started locally, follow these instructions:

1. Run the command your shell prompt.
```shell
npm install -g  @baaz/cli
```

## Usage

```
baaz --help

```
Generating and serving an Baaz project via a development server:

```
baaz --init

```

Project Run Command:

```
yarn run watch

```

Project Build Command:

```
yarn run build

```

# Packages

This is a monorepo which contains many tools and packages:



## Tools

| Project | Package | Version | Links |
|---|---|---|---|
**Baaz CLI** | [`@baaz/cli`](https://npmjs.com/package/@baaz/cli) | [![latest](https://img.shields.io/npm/v/%40@baaz%2Fcli/latest.svg)](https://npmjs.com/package/@baaz/cli) | [![README](https://img.shields.io/badge/README--green.svg)](/dominicg666/baaz-cli/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/dominicg666/baaz-cli)



#### Adapter

| Project | Package | Version | Links |
|---|---|---|---|
**Baaz Adapter** | [`@baaz/adapter`](https://npmjs.com/package/@baaz/adapter) | [![latest](https://img.shields.io/npm/v/%40baaz%adapter/latest.svg)](https://npmjs.com/package/@baaz/adapter) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/dominicg666/baaz-adapter)

#### Misc

| Project | Package | Version | Links |
|---|---|---|---|
**Webpack Baaz Plugin** | [`@baaz/buildpack`](https://npmjs.com/package/@baaz/buildpack) | [![latest](https://img.shields.io/npm/v/%40baaz%2Fbuildpack/latest.svg)](https://npmjs.com/package/@baaz/buildpack) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/dominicg666/buildpack)


