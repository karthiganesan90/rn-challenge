import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BranchesInput from './src/BranchesInput';
import { SearchLocation } from './src/SearchLocation';
import Map from './src/Map';
import Spinner from './src/Spinner';
import useLoading from './src/useLoading';
import BranchDetails from './src/BranchDetails';
import ClosestBranchProvider from './src/ClosestBranchProvider';


export default function App() {
  const [state, branches] = useLoading();
  const [search, setSearch] = useState<SearchLocation>();

  return (
    <ClosestBranchProvider search={search} branches={branches}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Map/>
        {state === 'ready' ? (
          <>
            <BranchesInput search={search} setSearch={setSearch} />
            <BranchDetails/>
          </>
        ) : state === 'error' ? (
          <View style={styles.centred}>
            <Text style={styles.error}>An error has occurred</Text>
          </View>
        ) : (
          <View style={styles.centred}>
            <Spinner height={60} />
          </View>
        )}
      </View>
    </ClosestBranchProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  error: {
    fontFamily: 'textRegular',
    fontSize: 24,
    color: '#ED0000',
    padding: 10,
    backgroundColor: '#80808030',
  },
  centred: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
