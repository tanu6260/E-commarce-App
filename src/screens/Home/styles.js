
import {StyleSheet} from 'react-native';
import { COLORS ,  FONTS, SIZES } from '../../constans';
// import {COLORS, FONTS, SIZES} from '../../constants';
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innerContainer :{
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    width: SIZES.width * 0.94,
    marginVertical: SIZES.width * 0.03,
  }
 
});
