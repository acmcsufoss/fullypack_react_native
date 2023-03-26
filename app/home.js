import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Stack } from "expo-router";
import { COLORS, SIZES } from "../constants";
import Landing, { GetStartedButton } from "../components/Home/Landing";

//This is the home screen
const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.body_bg,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Landing />
        </View>
      </ScrollView>
      <GetStartedButton />
    </SafeAreaView>
  );
};

export default Home;
