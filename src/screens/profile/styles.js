import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constans";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        backgroundColor: COLORS.white,
        width: SIZES.width,
        marginTop: SIZES.height * 0.03,
    },
    profilebox: {
        width: SIZES.width * 0.28,
        height: SIZES.width * 0.28,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        marginBottom: SIZES.height * 0.012,
        marginTop: SIZES.height * 0.03,
        borderWidth: 3,
        borderColor: COLORS.gray,
    },
    profile: {
        width: SIZES.width * 0.26,
        height: SIZES.width * 0.26,
        resizeMode: 'stretch',
        borderRadius: 90,
    },
});

export default styles;