// flow-typed signature: c75e97c3ce6b52e0c6996e8cf97ddf07
// flow-typed version: fb0f81640c/aphrodite_v0.5.x/flow_>=v0.28.x

import { StyleDefinition, StyleSheet } from 'aphrodite'

declare module 'aphrodite' {
  declare type DehydratedServerContent = {
    html: string,
    css: {
      content: string,
      renderedClassNames: Array<string>,
    },
  }

  declare type SheetDefinition = {
    [key: string]: Object,
  }

  declare export type StyleDefinition = {
    [key: string]: {
      _name: string,
      _definition: Object,
    },
  }

  declare export var css: (...definitions: Array<StyleDefinition | false>) => string

  declare export var StyleSheetServer: {
    renderStatic(renderFunc: Function): DehydratedServerContent,
  }

  declare export var StyleSheet: {
    create(
      sheetDefinition: SheetDefinition
    ): {
      [key: string]: StyleDefinition,
    },
    extend(
      *
    ): {
      StyleSheet: typeof StyleSheet,
      css: typeof css,
    },
  }

  declare export var StyleSheetTestUtils: {
    suppressStyleInjection: () => void,
    clearBufferAndResumeStyleInjection: () => void,
  }
}

declare module 'aphrodite/no-important' {
  declare module.exports: $Exports<'aphrodite'>
}
