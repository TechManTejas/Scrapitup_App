import { View, StyleSheet, ScrollView, StatusBar, Text } from "react-native";
import CustomSafeView from "../components/Common/CustomSafeView";
import HomeHeader from "../components/Home/HomeHeader";
import { useTheme } from "../theme/ThemeProvider";
// import { HOME_MAJOR_MENU_DATA, HOME_MINOR_MENU_DATA } from "../data/HomeData";
// import MajorMenu from "../components/Common/MajorMenu";
// import MinorMenu from "../components/Common/MinorMenu";
import { homeCarouselData } from "../data/Carouseldata";
import CustomCarousel from "../components/Common/Carousel";
import FinancialInstitutionItemCard from "../components/Common/FinancialInstitutionItemCard";
import ItemRate from "../components/Common/ItemRateCard";

const HomeScreen = () => {

  const { theme: { spacing, colors, fontFamily, fontSize } } = useTheme();

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
    <CustomSafeView>


      <View style={styles.container}>

        <StatusBar barStyle="dark-content" backgroundColor={colors.white100} />

        <HomeHeader />

        <ScrollView>

          <View style={styles.header}>
            <Text style={styles.headertext}>What we do ?</Text>
          </View>

          {/* <MajorMenu title="home" menuData={HOME_MAJOR_MENU_DATA} />
          <MinorMenu title="home" centered menuData={HOME_MINOR_MENU_DATA} /> */}

          <CustomCarousel carouselData={homeCarouselData} />

          <View style={styles.vendorListContainer}>
            <Text style={styles.vendorListHeader}>
              Our Best Vendors
            </Text>
            <View style={styles.vendorList}>
              <FinancialInstitutionItemCard
                onPress={() => { }}
                name="Name"
                ifsc="PCMC"
                branchName="PCMC"
                companyName="Vendor"
                poc=""
                pocNumber=""
                address={{ city: "Address" }}
              />
              <FinancialInstitutionItemCard
                onPress={() => { }}
                name="Name"
                ifsc="PCMC"
                branchName="PCMC"
                companyName="Vendor"
                poc=""
                pocNumber=""
                address={{ city: "Address" }}
              />
              <FinancialInstitutionItemCard
                onPress={() => { }}
                name="Name"
                ifsc="PCMC"
                branchName="PCMC"
                companyName="Vendor"
                poc=""
                pocNumber=""
                address={{ city: "Address" }}
              />
            </View>
          </View>

          <View>
            <Text style={styles.itemListHeader}>
              Our Best Rates
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

        </ScrollView>
      </View>
    </CustomSafeView>
  );
};

export default HomeScreen;
