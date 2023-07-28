import { View, StyleSheet, ScrollView, StatusBar, Text } from "react-native";
import CustomSafeView from "../components/Common/CustomSafeView";
import HomeHeader from "../components/Home/HomeHeader";
import { useTheme } from "../theme/ThemeProvider";
// import { HOME_MAJOR_MENU_DATA, HOME_MINOR_MENU_DATA } from "../data/HomeData";
// import MajorMenu from "../components/Common/MajorMenu";
// import MinorMenu from "../components/Common/MinorMenu";
import { Ionicons } from '@expo/vector-icons';
import CustomToolTip from "../components/Common/CustomToolTip"
import { homeCarouselData } from "../data/Carouseldata";
import CustomCarousel from "../components/Common/Carousel";
import FinancialInstitutionItemCard from "../components/Common/FinancialInstitutionItemCard";

const HomeScreen = () => {

  const { theme: { spacing, colors, fontFamily, fontSize } } = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.u56 + spacing.sm
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
    }
  });

  return (
    <CustomSafeView>

      <ScrollView>
        <View style={styles.container}>

          <StatusBar barStyle="dark-content" backgroundColor={colors.white100} />

          <HomeHeader />

          <View style={styles.header}>

            <Text style={styles.headertext}>What we do ?</Text>

          </View>

          {/* <MajorMenu title="home" menuData={HOME_MAJOR_MENU_DATA} />
          <MinorMenu title="home" centered menuData={HOME_MINOR_MENU_DATA} /> */}

          <CustomCarousel carouselData={homeCarouselData} />

          <FinancialInstitutionItemCard 
            onPress={()=>{}}
            name="Name"
            ifsc="PCMC"
            branchName="PCMC"
            companyName="Vendor"
            poc=""
            pocNumber=""
            address={{city:"Address"}}
          />

        </View>
      </ScrollView>
    </CustomSafeView>
  );
};

export default HomeScreen;
