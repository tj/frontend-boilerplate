// @flow
import { StyleSheet } from 'aphrodite/no-important'

const globalSelectorHandler = (
  selector: string[],
  _: string,
  generateSubtreeStyles: (string[]) => *
): * => {
  if (selector[0] !== '*') {
    return null
  }
  return generateSubtreeStyles(selector.slice(1))
}

const globalExtension: Object = { selectorHandler: globalSelectorHandler }
const extended = StyleSheet.extend([globalExtension])

const styles = extended.StyleSheet.create({
  globals: {
    '*html': {
      margin: 0,
      padding: 0,
    },
    '*button': {
      margin: 0,
      padding: 0,
      border: 0,
      background: 'none',
      fontSize: '100%',
      verticalAlign: 'baseline',
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      color: 'inherit',
      appearance: 'none',
      fontSmoothing: 'antialiased',
    },
    '*body': {
      fontSize: 24,
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',
      lineHeight: 1.4,
      background: '#fff',
      color: '#222',
      margin: '0 auto',
      fontSmoothing: 'antialiased',
      fontWeight: 300,
      height: '100vh',
      boxSizing: 'border-box',
      padding: 30,
      border: '20px solid #eee',
      borderTopWidth: 40,
    },
  },
})

extended.css(styles.globals)
