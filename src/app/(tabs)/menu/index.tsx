
import { View, FlatList } from 'react-native';
import products from '@/assets/data/products';
import ProductList from '@/src/components/ProductList';

export default function MenuScreen() {
  return (
  
      <FlatList data={products} renderItem={
        ({item}) => <ProductList product={item}/>
      }
      numColumns={2}
      />

  );
}
