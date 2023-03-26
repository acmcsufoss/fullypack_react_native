import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FONT, SIZES } from "../../constants";
import FAQCard from "./FAQCard";

const Faqs = () => {
  //State to load data from api and loading state when data hasn't been loaded
  const [isLoading, setLoading] = useState(false);
  const [FAQs, setFAQs] = useState([]);
  useEffect(() => {
    const fetchFAQs = async () => {
      setLoading(true);
      const res = await axios.get("https://fullyhacks.acmcsuf.com/api/faqs");
      setFAQs(res.data);
      setLoading(false);
    };
    fetchFAQs();
  }, []);
  return (
    <View style={styles.faqsContainer}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {isLoading && <Text> Loading...</Text>}
      {/* Render each faq using React Native FlatList */}
      <FlatList
        data={FAQs}
        renderItem={({ item }) => (
          <FAQCard question={item.question} answer={item.answer} id={item.id} />
        )}
        // each item needs to have a key
        keyExtractor={(item) => item.id} 
      />
    </View>
  );
};
const styles = StyleSheet.create({
  faqsContainer: {
    marginHorizontal: 12,
    alignItems: "center",
  },
  title: {
    marginTop: 12,
    fontSize: SIZES.xLarge,
    fontFamily: FONT.semi_bold,
  },
});
export default Faqs;
