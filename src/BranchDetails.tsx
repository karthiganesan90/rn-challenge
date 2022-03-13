import { StyleSheet, View, Text } from 'react-native';
import { useClosestBranch } from './ClosestBranchProvider';

export default function BranchDetails() {
  const closest = useClosestBranch();
  return (
    <>
      {closest && (
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.text}>Branch name:</Text>
            <Text style={styles.textBold}>{closest.Name}</Text>
          </View>
          {closest.ServiceAndFacility && (
            <View style={styles.row}>
              <Text style={styles.text}>Services:</Text>
              <Text style={styles.textBold}>
                {closest.ServiceAndFacility.join(', ')}
              </Text>
            </View>
          )}
          {closest.Accessibility && (
            <View style={styles.row}>
              <Text style={styles.text}>Accessibility:</Text>
              <Text style={styles.textBold}>
                {closest.Accessibility.join(', ')}
              </Text>
            </View>
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80808030',
    padding: 10,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'textRegular',
    color: 'black',
    fontSize: 14,
    flex: 1,
  },
  textBold: {
    fontFamily: 'textBold',
    color: 'black',
    fontSize: 14,
    flex: 1,
  },
});
