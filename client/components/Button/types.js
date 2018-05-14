// @flow
import type { SpinnerConfig } from 'spin.js'

export type Props = {
  to?: string,
  href?: string,
  onClick?: Function,
  loading?: ?boolean,
  spinConfig: SpinnerConfig,
  children: string | React$Element<*>,
}
