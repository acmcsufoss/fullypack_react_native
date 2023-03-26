import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONT, SIZES } from "../../constants";

const FAQCard = (props) => {
  const { question, answer, id } = props;
  // These states are for open close the faq when you click on one
  const [currentId, setId] = useState(id);
  const [isHidden, setHidden] = useState(false);
  const faqClicked = () => {
    setHidden(!isHidden);
    setId(currentId);
  };
  return (
    <View>
      <View style={styles.questionContainer}>
        <TouchableOpacity onPress={faqClicked}>
          <Text style={styles.question}>{question}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.answerContainer}>
        {/* Only show the faq answer when the state matches */}
        {isHidden && currentId == id && (
          <Text style={styles.answer}>{answer}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    flexDirection: "column",
    marginVertical: 12,
    padding: 2,
    backgroundColor: COLORS.purple_300,
    borderRadius: SIZES.medium,
  },
  answerContainer: {
    flexDirection: "column",
    padding: 2,
    borderRadius: SIZES.medium,
  },
  question: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    padding: 6,
  },
  answer: {
    fontSize: SIZES.medium,
    borderWidth: 4,
    borderRadius: SIZES.xLarge,
    borderColor: COLORS.purple_300,
    fontFamily: FONT.regular,
    padding: 8,
  },
});

export default FAQCard;
