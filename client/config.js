// @flow
import type { Props } from 'react-helmet'
import type { SpinnerConfig } from 'spin.js'

export const helmetDefaults: Props = {
  title: 'Home',
  titleTemplate: 'Boilerplate - %s',
}

export const spinConfig: SpinnerConfig = {
  lines: 13,
  length: 4,
  width: 3,
  radius: 7,
  scale: 0.75,
  corners: 1,
  color: '#fff',
  opacity: 0.15,
  rotate: 0,
  direction: 1,
  speed: 0.8,
  trail: 50,
  fps: 20,
  zIndex: 2e9,
  className: 'spinner',
  top: '50%',
  left: '50%',
  shadow: false,
  hwaccel: false,
  position: 'absolute',
}
