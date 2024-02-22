import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";
import { colors } from "../global/colors.js";
import spinner from '../../assets/spinner.gif';
 
const ItemDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);

  const { productDetailId } = route.params;

  useEffect(() => {
    const productFound = allProducts.find((product) => product.id === productDetailId);
    setProduct(productFound);
  }, [productDetailId]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.container}>
        {product ? (
          <View style={styles.productContainer}>
            <Image source={{ uri: product.images[0] }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Precio: ${product.price}</Text>
            <Text style={styles.discount}>Descuento: {product.discountPercentage}%</Text>
            <Text style={styles.rating}>Valoración: {product.rating}</Text>
            <Text style={styles.brand}>Marca: {product.brand}</Text>
            <Text style={styles.category}>Categoría: {product.category}</Text>
          </View>
        ) : (
          <View style={styles.spinnerContainer}>
            <Image source={spinner} style={styles.image} />
            <Text style={styles.title}>Loading...</Text>
          </View>
        )}
        <Button 
          style={styles.goBack}  
          color={colors.mustard0} 
          title="Go Back!!" 
          onPress={() => navigation.goBack()} 
        />
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.grayScale0,
  },

  container: {
    flex: 1,
    width: "80%",
    alignItems: "stretch",
    justifyContent: "space-evenly"

  },
  productContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.grayScale1,
  },
  spinnerContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.grayScale0,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.mustard0
  },
  description: {
    marginBottom: 10,
    color: colors.mustard0
  },
  price: {
    marginBottom: 5,
    color: "white"
  },
  discount: {
    marginBottom: 5,
    color: "white"
  },
  rating: {
    marginBottom: 5,
    color: "white"
  },
  brand: {
    marginBottom: 5,
    color: "white"
  },
  category: {
    marginBottom: 5,
    color: "white"
  },
  goBack:{
    width: 100,
    height: 50,
    color: "white",
    borderRadius: 25
  }
});
