import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { COLORS } from "../constants";
import { Stack, useRouter } from "expo-router";
import Faqs from "../components/FAQ/FAQs";

//This is screen for faq
const FAQs = () => {
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
      <Faqs/>
    </SafeAreaView>
  );
};

export default FAQs;
