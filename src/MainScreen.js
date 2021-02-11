import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

export const MainScreen = props => {
    return (
        <View>
            <Button title="Войти"/>
            <View style={styles.registred}>
                <Button color="#841584" title="Зарегистрироватся"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    registred: {
        margin: 30,
        height: 100,
        width: 200
    }
})