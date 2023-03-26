import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export const unstable_settings = {
  // all routes can link back to home route
  initialRouteName: "home",
};

const Layout = () => {
  // load fonts
  const [fontsLoaded] = useFonts({
    RLight: require("../assets/fonts/Rubik-Light.ttf"),
    RBold: require("../assets/fonts/Rubik-Bold.ttf"),
    RMedium: require("../assets/fonts/Rubik-Medium.ttf"),
    RRegular: require("../assets/fonts/Rubik-Regular.ttf"),
    RSemiBold: require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default Layout;
