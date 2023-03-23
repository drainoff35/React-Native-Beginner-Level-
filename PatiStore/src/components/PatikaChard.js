import React from "react";
import {View, Text, Image } from 'react-native';
import styles from "./PatikaChardStyle";

const PatikaChard = ({patika}) =>{
    return (
        
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:patika.imgURL}}/>
                <Text style={styles.title}>{patika.title}</Text>
                <Text style={styles.price}>{patika.price}</Text>
                <Text style={styles.stock}>{patika.inStock ? ' ' : 'Stokta Yok'}</Text>
            </View>
         
    )

}

export default PatikaChard;
