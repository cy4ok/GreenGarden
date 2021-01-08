import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

export const MainScreen = props => {
    return (
        <View style={styles.block}>
            <Button title="Войти" />
            <Button title="Зарегистрироватся"/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {

    }
})