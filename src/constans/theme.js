import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {

  primary: 'rgba(8, 91, 255, 1)',

  white: '#FFFFFF',

  // black
  black: '#111111',
  blue: 'blue',
  blue2: '#085BFF',
  lightblue: 'rgba(157, 189, 250, 0.31)',
  blue3: '#3398FF',
  blue3: '#9DBDFA4F',
  blue4: '#363795',
  gray: '#616161',
  gray1: 'rgba(101, 98, 98, 1)',
  grey2: 'rgba(101, 101, 101, 1)',
  grey3: 'rgba(0, 0, 0, 0.6)',
  grey4: '#9496A1',
  grey5: ' #D1D8E1',
  lightGray: '#C1C1C1',
  red: '#FF3194',


  
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding1: 15,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: width * 0.05,
  h3: width * 0.038,
  h4: width * 0.036,
  h5: width * 0.032,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  //Font family
  black: 'Poppins-Black-900',
  bold: 'Poppins-Bold-700',
  semiBold: 'Poppins-SemiBold-600',
  medium: 'Poppins-Medium-500',
  regular: 'Poppins-Regular-400',
  light: 'Poppins-Light-300',
  thin: 'Poppins-Thin-250',

  fourHundred: {fontFamily: 'Poppins-Regular-400'},
  fiveHundred: {fontFamily: 'Poppins-Medium-500'},
  sixHundred: {fontFamily: 'Poppins-SemiBold-600'},
  sevenHundred: {fontFamily: 'Poppins-Bold-700'},
  eightHundred: {fontFamily: 'Poppins-ExtraBold-800'},
  nineHundred: {fontFamily: 'Poppins-Black-900'},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
