import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import categories from "../data/categories.json";

const Categories = ({ navigation }) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem navigation={navigation} category={item} />
      )}
      keyExtractor={(category) => category}
      numColumns={1}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
  },
});

export default Categories;
