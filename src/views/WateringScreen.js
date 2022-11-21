import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DangTuoi from '../components/DangTuoi'

export default function WateringScreen( {navigation} ) {
  return (
    <DangTuoi navigation={navigation}/>
  )
}

const styles = StyleSheet.create({})