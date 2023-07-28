import { Dimensions, ImageBackground, StyleSheet, View, Text } from "react-native"
import { useTheme } from "../../theme/ThemeProvider"


const CarouselCard = ({ item }) => {

    const { theme: { colors, fontFamily, fontSize, spacing } } = useTheme()

    const { width } = Dimensions.get("window")

    const styles = StyleSheet.create({

        container: {
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 15,
            borderColor: colors.blue400,
        },
        img: {
            width: width - 33,
        },

        cardtext: {
            display: "flex",
            justifyContent: "center",
            height: 100,
            paddingHorizontal: spacing.xl,
        },
        cardtitle: {
            color: colors.blue500,
            fontSize: fontSize.md,
            fontFamily: fontFamily.semiBold,
            lineHeight: fontSize.lg
        },
        cardsubtitle: {
            color: colors.blue500,
            fontSize: fontSize.sm,
        },

        leftcard: {
            marginRight: 120,
            alignItems: "flex-start"
        },
        rightcard: {
            marginLeft: 120,
            alignItems: "flex-end"
        },

    })

    return (
        <View style={styles.container}>
            <ImageBackground
                imageStyle={{ borderRadius: 15 }}
                resizeMode="stretch"
                style={styles.img}
                source={item.img}
            >
                <View style={[styles.cardtext, item.align === "left" ? styles.leftcard : styles.rightcard]}>
                    <Text style={styles.cardtitle}>
                        {item.title}
                    </Text>
                    <Text style={[styles.cardsubtitle, item.align !== "left" && { textAlign: "right" }]}>{item.subtitle}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default CarouselCard
