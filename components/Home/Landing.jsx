import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONT, images, SIZES } from "../../constants";
import { Icon } from "react-native-elements";
import { useRouter } from "expo-router";

const Landing = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMsg}>
          GET ALL YOUR QUESTIONS ANSWERED WITH
        </Text>
        <Text style={styles.fullyHacksMsg}>FULLY FAQs</Text>
        <Image
          resizeMode="cover"
          style={styles.fullyRocket}
          source={images.rocket}
        />
      </View>
    </View>
  );
};

export const GetStartedButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.startBtn}
      onPress={() => router.push("/faq")}
    >
      <Text style={styles.getStartedMsg}> Get started </Text>
      <Icon size={32} name="angle-right" type="font-awesome" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  welcomeMsg: {
    fontFamily: FONT.light,
    fontSize: SIZES.xxxLarge,
  },
  fullyHacksMsg: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xxxLarge,
  },
  fullyRocket: {
    height: 240,
    width: 240,
    marginTop: 24,
  },
  getStartedMsg: {
    fontSize: SIZES.large,
    marginRight: "auto",
    fontFamily: FONT.semi_bold,
  },
  startBtn: {
    padding: 12,
    marginHorizontal: 12,
    backgroundColor: COLORS.purple_300,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: SIZES.large,
  },
});
export default Landing;
