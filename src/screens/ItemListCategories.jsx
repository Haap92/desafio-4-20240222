import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Button } from "react-native";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Searchbar from "../components/Searchbar";
import { colors } from "../global/colors.js"

function ItemListCategories({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { category } = route.params;

  useEffect(() => {
    const lowercaseKeyword = keyword.toLowerCase();
    console.log("Category:", category);
    console.log("Keyword:", keyword); 
    if (category) {
      const products = allProducts.filter((product) => product.category === category);
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(lowercaseKeyword)
      );
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(lowercaseKeyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

  return (
    <View style={styles.headerContainer}>
      <Searchbar onSearch={setKeyword} />
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
        />
        <Button 
          style={styles.goBack}  
          color={colors.mustard0} 
          title="Go Back!!" 
          onPress={() => navigation.goBack()} 
        />
      </View>
    </View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.grayScale0
  },
  searchbar:{
    alignItems: "center",
    backgroundColor: colors.grayScale1
  },
  container: {
    flex: 1,
    width: "80%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "stretch",
  },
  flatList: {
    flexGrow: 1,
    width: '100%',
  },
  goBack:{
    width: 100,
    height: 50,
    color: "white",
    borderRadius: 25
  }
});
