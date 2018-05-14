// @flow
import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  button: {
    backgroundColor: '#808080',
    color: 'white',
    textDecoration: 'none',
    border: '1px solid #707070',
    fontSize: '1rem',
    lineHeight: '1rem',
    padding: '.75rem 1.5rem',
    borderRadius: '3px',
    transitionDuration: '250ms',
    transitionProperty: 'background-color',
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-block',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .1)',

    '@media (max-width: 600px)': {
      backgroundColor: 'red',
    },

    ':not([disabled]):hover': {
      backgroundColor: '#707070',
    },

    '[disabled]': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  },
  button__spinner: {
    display: 'inline-block',
    width: '100%',
    transitionDuration: '250ms',
    position: 'absolute',
    top: '-2.5rem',
    height: '2.5rem',
    left: 0,
    transform: 'translate3d(0, 0, 0)',
  },
  'button__spinner--active': {
    transform: 'translate3d(0, 2.5rem, 0)',
  },
  button__content: {
    display: 'inline-block',
    width: '100%',
    transitionDuration: '250ms',
    transform: 'translate3d(0, 0, 0)',
  },
})
