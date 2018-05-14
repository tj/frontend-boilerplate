// flow-typed signature: 6f992704fb2d8e06338f3048cc3c1543
// flow-typed version: e10811d49c/react-hot-loader/flow_>=v0.53.x

declare module 'react-hot-loader' {
  declare export type Module = {
    exports: any,
    require(id: string): any,
    id: string,
    filename: string,
    loaded: boolean,
    parent: any,
    children: Array<any>,
  }

  declare export function hot(
    module: Module
  ): (component: React$ComponentType<*>) => React$StatelessFunctionalComponent<*>
}
