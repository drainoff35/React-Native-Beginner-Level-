import React from "react";
import { SafeAreaView, View, Text, FlatList, ScrollView,TextInput} from "react-native";
import product_data from './components/productlist.json';
import PatikaChard from './components/PatikaChard';
import styles from './components/PatikaChardStyle';


function App() {
  return (
<SafeAreaView>
  <ScrollView>
    <View>
      <Text style={styles.main_title}>PATIKASTORE</Text>
       <TextInput placeholder="Ürün Ara..." style={styles.searchbar} />
        <FlatList
          data={product_data}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item})=><PatikaChard patika={item}/>}
          horizontal={false}
          numColumns={2}
        />
    </View>
  </ScrollView>
</SafeAreaView>
  );
}

export default App;