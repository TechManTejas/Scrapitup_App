import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '../theme/ThemeProvider';
import ItemRate from '../components/Common/ItemRateCard';

const RatesScreen = () => {

    const { theme: { spacing, colors, fontSize, fontFamily } } = useTheme();

    const styles = StyleSheet.create({
        container: {
          paddingHorizontal: spacing.lg,
          paddingBottom: spacing.u56 + spacing.u90
        },
        header: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        },
        headertext: {
          color: colors.black,
          fontFamily: fontFamily.semiBold,
          fontSize: fontSize.lg,
        },
        iconContainer: {
          paddingLeft: spacing.xxs,
          padding: spacing.xs
        },
        toolTipMessage: {
          fontFamily: fontFamily.regular,
          fontSize: fontSize.md,
          lineHeight: spacing.lg,
          color: colors.blue500
        },
        vendorListContainer: {
          marginTop: spacing.md
        },
        vendorListHeader: {
          color: colors.green600,
          textTransform: "capitalize",
          fontFamily: fontFamily.semiBold,
          fontSize: fontSize.xxl,
          lineHeight: fontSize.xxxl,
        },
        vendorList: {
          marginTop: spacing.md
        },
        itemListHeader: {
          color: colors.green600,
          textTransform: "capitalize",
          fontFamily: fontFamily.semiBold,
          fontSize: fontSize.xxl,
          lineHeight: fontSize.xxxl,
        },
        itemList: {
          marginTop: spacing.md
        }
      });

    return (
        <View>
            <Text style={styles.itemListHeader}>
                Rate List
            </Text>
            <View style={styles.itemList}>
                <ItemRate
                    onPress={() => { }}
                    name="Name"
                    ifsc="₹10/kg"
                    branchName="PCMC"
                    companyName="Newspaper"
                    poc=""
                    pocNumber=""
                    address={{ city: "Address" }}
                />
                <ItemRate
                    onPress={() => { }}
                    name="Name"
                    ifsc="₹10/kg"
                    branchName="PCMC"
                    companyName="Newspaper"
                    poc=""
                    pocNumber=""
                    address={{ city: "Address" }}
                />
                <ItemRate
                    onPress={() => { }}
                    name="Name"
                    ifsc="₹10/kg"
                    branchName="PCMC"
                    companyName="Newspaper"
                    poc=""
                    pocNumber=""
                    address={{ city: "Address" }}
                />
            </View>
        </View>

    )
}

export default RatesScreen