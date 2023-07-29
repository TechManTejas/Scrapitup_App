import { Pressable, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useTheme } from "../../theme/ThemeProvider";

const CustomHeaderLeftIcon = ({ navigation }) => {

  const { theme: { colors, spacing, fontSize } } = useTheme();

  const styles = StyleSheet.create({
    headerLeftIcon: {
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.md,
      paddingRight: spacing.lg,
      marginRight: 0,
      fontSize: fontSize.default,
      color: colors.blue400,
    },
  });

  return (
    <Pressable
      style={styles.headerLeftIcon}
      onPress={() => {
        if (navigation.canGoBack()) navigation.goBack();
      }}
    >
      <FontAwesome5
        name="chevron-left"
        color={styles.headerLeftIcon.color}
        size={styles.headerLeftIcon.fontSize}
      />
    </Pressable>
  );
};

export default CustomHeaderLeftIcon;
