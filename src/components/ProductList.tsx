import { StyleSheet } from 'react-native';
import { Product } from '@/types';
import { Text, View, Image, Pressable} from 'react-native';
import products from '@/assets/data/products';
import { Link } from 'expo-router';
type ProductListItemProps = {
  product: Product,
}
export const defaultimage = "";
const product = products[1];

const ProductList = ({product} : ProductListItemProps) => {

  return (
    <Link href={`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
          <Image source={{uri: product.image || defaultimage}} style={styles.image}></Image>
          <Text style={styles.foodtitle}>{product.name}</Text>

          <Text style={styles.price}>${product.price}</Text>
         
    </Pressable>
    </Link>
  )
}

export default ProductList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 2,
  },
  foodtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: '#2f95dc',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }
});
