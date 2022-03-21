# 🥞 IFereum UIkit

[![Version](https://img.shields.io/npm/v/@ifereum/uikit)](https://www.npmjs.com/package/@ifereum/uikit) [![Size](https://img.shields.io/bundlephobia/min/@ifereum/uikit)](https://www.npmjs.com/package/@ifereum/uikit)

IFereum UIkit is a set of React components and hooks used to build pages on IFereum's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @ifereum/uikit`

***Note**: In case you want to use the older version of the IFereum UIkit, you should install @ifereum-libs/uikit, instead, but we recommend using the latest version of the UIkit.*


## Setup

### Theme

Before using IFereum UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@ifereum/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@ifereum/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://ifereum.github.io/ifereum-uikit/)
