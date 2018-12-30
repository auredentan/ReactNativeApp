import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View>
            <Text style={styles.apptitle}>Crypto App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    apptitle: {
        textAlign: 'center',
        fontSize: 18,
    }
})
export default Header;