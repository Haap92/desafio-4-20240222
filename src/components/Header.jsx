import { Text, Pressable, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({ title, navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: colors.grayScale1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 40,
    textAlign: "center",
    color: colors.mustard0,
    fontSize: 20,
    fontFamily: "sixtyfourRegular",
  },
});
