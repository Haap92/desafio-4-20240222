import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category, navigation }) => {
  const formatCategoryName = (category) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Card style={{ marginVertical: 20, marginHorizontal: 20 }}>
      <Pressable onPress={() => navigation.navigate("ItemListCategories", { category })}>
        <Text style={styles.text}>{formatCategoryName(category)}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    width: "100%",
    fontSize: 25,
    fontFamily: "oswaldRegular",
    maxWidth: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
});
