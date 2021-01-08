import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

export const MainScreen = props => {
    return (
        <View>
            <Button title="Войти"/>
            <Button style={styles.registred} title="Зарегистрироватся"/>
        </View>
    )
}

const styles = StyleSheet.create({
    registred: {
        padding: 30,
        margin: 30
    }
})