export const spin = jest.fn()
export const stop = jest.fn()

jest.mock(
  'spin.js',
  jest.fn().mockImplementation(() => ({
    spin,
    stop,
  }))
)
