import palette from './palette';
import './styles.css';

export default {
  fontFamily: [
    'VAG Rounded Std',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    fontFamily: 'VAG Rounded Std',
    fontSize: '26px',
  },
  h2: {
    fontFamily: 'VAG Rounded Std',
    color: palette.text.primary,
    fontSize: '22px',
    letterSpacing: '-0.06px',
    '@media (max-width:500px)': {
      fontSize: '40px',
    },
  },
  h3: {
    fontFamily: 'VAG Rounded Std',
    color: '#6C757E',
    fontWeight: 800,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '28px',
    '@media (max-width:500px)': {
      fontSize: '16px',
    },
  },
  h4: {
    fontFamily: 'VAG Rounded Std',
    fontWeight: 800,
    fontSize: '16px',
    letterSpacing: '-0.06px',
    lineHeight: '24px',
  },
  h5: {
    fontFamily: 'VAG Rounded Std',
    color: '#6C757E',
    fontWeight: 800,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
    '@media (max-width:500px)': {
      fontSize: '12px',
    },
  },
  subtitle1: {
    color: palette.text.primary,
    fontFamily: 'Open Sans',
    fontSize: '12px',
    letterSpacing: '-0.05px',
    lineHeight: '25px',
  },
  subtitle2: {
    color: '#6C757E',
    fontWeight: 600,
    fontFamily: 'Open Sans',
    fontSize: '12px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body1: {
    fontFamily: 'Open Sans',
    fontSize: '14px',
    letterSpacing: '-0.04px',
    lineHeight: '18px',
    '@media (max-width:500px)': {
      fontSize: '13px',
    },
  },
  body2: {
    fontFamily: 'Open Sans',
    color: '#6C757E',
    fontSize: '14px',
    letterSpacing: '-0.04px',
    lineHeight: '18px',
    '@media (max-width:500px)': {
      fontSize: '13px',
    },
  },
  button: {
    color: palette.text.primary,
    fontSize: '14px',
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px',
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase',
  },
};