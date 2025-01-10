import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constans';
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    width: SIZES.width * 0.94,

  },
  cartbox: {
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.lightGray
  },
  mainimg: {
    width: SIZES.width * 0.4,
    height: SIZES.height * 0.2,


  },
  boxtext: {
    width: SIZES.width * 0.8,

  },


  text1container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },



  text1: {
    width: SIZES.width * .55,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .05,
    color: COLORS.black,
  },
  bdg:
  {
    color: COLORS.black,
    fontSize: SIZES.width * 0.042,
    fontFamily: FONTS.semiBold,

  },
  bdgbox: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.width * .02,
    width: SIZES.width * .08,
    height: SIZES.width * .09,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  }
});
