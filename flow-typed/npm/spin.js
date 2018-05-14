declare module 'spin.js' {
  declare export type SpinnerConfig = {
    lines?: number,
    length?: number,
    width?: number,
    radius?: number,
    scale?: number,
    corners?: number,
    color?: string,
    opacity: number,
    rotate?: number,
    direction?: number,
    speed?: number,
    trail?: number,
    fps?: number,
    zIndex?: number,
    className?: string,
    top?: string,
    left?: string,
    shadow?: boolean,
    hwaccel?: boolean,
    position?: string,
  }

  declare export type SpinnerType = {
    stop: () => void,
    spin: (*) => void,
  }

  declare module.exports: SpinnerConfig => SpinnerType
}
