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
    marginVertical: SIZES.width * 0.03,
  },
  cartbox: {
    width: SIZES.width * 0.9,

  },
  mainimg: {
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.12,
    borderWidth: 1

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
    color: COLORS.white,
    fontSize: SIZES.width * 0.02,
    fontFamily: FONTS.semiBold,

  },
  bdgbox: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: COLORS.primary,
    borderRadius:SIZES.width * .02,
    width: SIZES.width * .04,
    height: SIZES.width * .04,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
