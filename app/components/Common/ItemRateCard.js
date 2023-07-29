import { Pressable, View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { FontAwesome5 } from '@expo/vector-icons';

const ItemRate = ({ onPress, name, ifsc, branchName, companyName, poc, pocNumber, address }) => {

    const { theme: { colors, fontFamily, fontSize, spacing } } = useTheme();

    const styles = StyleSheet.create({
        container: {
            marginBottom: spacing.md,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: colors.black300,
            borderRadius: spacing.xs,
        },
        cardHeader: {
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "flex-start"
        },
        pressableContainer: {
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
        },
        content: {
            flex: 1,
            paddingVertical: spacing.sm,
        },
        row: {
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "baseline",
            paddingHorizontal: spacing.md,
            marginBottom: spacing.xs,
        },
        col: {
            paddingHorizontal: spacing.md,
        },
        name: {
            fontFamily: fontFamily.semiBold,
            color: colors.black,
            fontSize: fontSize.lg,
            lineHeight: fontSize.xxl,
            width: "75%"
        },
        ifsc: {
            fontFamily: fontFamily.regular,
            fontSize: fontSize.lg,
            color: colors.green,
        },
        poc: {
            fontFamily: fontFamily.regular,
            fontSize: fontSize.md,
            lineHeight: fontSize.default,
            color: colors.black300,
            paddingLeft: spacing.xs
        },
        footer: {
            backgroundColor: colors.black700,
            width: 120,
            flexDirection: "row",
            alignSelf: "flex-start",
            justifyContent: "center",
            marginTop: spacing.md,
            paddingHorizontal: spacing.sm,
            paddingVertical: spacing.xs,
            borderTopRightRadius: spacing.xs,
            borderBottomLeftRadius: spacing.xs,
        },
        city: {
            fontFamily: fontFamily.semiBold,
            fontSize: fontSize.sm,
            color: colors.white100,
        },
        iconTextContainer: {
            flexDirection: "row",
            paddingRight: spacing.lg,
            alignItems: "baseline"
        },
        viewButton: {
            flexDirection: "row", 
            alignItems: "center", 
            backgroundColor: colors.green500, 
            borderRadius: 3, 
            paddingVertical: 2, 
            paddingHorizontal: spacing.sm 
        },
        viewButtonText: {
            color: colors.white, 
            paddingRight: 10, 
            paddingTop: 2, 
            fontFamily: fontFamily.extraBold, 
            fontSize: fontSize.md
        }
    });

    return (
        <View style={styles.container}>

            <View style={styles.content}>

                    <View style={styles.col}>
                        <View style={styles.cardHeader}>
                            {
                                companyName ? 
                                <Text style={styles.name}>{companyName}</Text> :
                                name ? <Text style={styles.name}>{name}, {branchName}</Text>:<Text style={styles.name}>{branchName}</Text> 
                            }
                            {
                                companyName ? 
                                <Text style={styles.ifsc}>{ifsc}</Text> :
                                name ? <Text style={styles.ifsc}>{name}, {branchName}</Text>:<Text style={styles.ifsc}>{branchName}</Text> 
                            }
                        </View>
                        {/* { ifsc && <Text style={styles.ifsc}>{ifsc}</Text>} */}
                    </View>

            </View>

        </View>
    )
}

export default ItemRate;
