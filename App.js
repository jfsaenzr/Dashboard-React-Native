import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from "react-native-gifted-charts";

const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];
const barData = [
  { value: 250, label: "M" },
  { value: 500, label: "T", frontColor: "#177AD5" },
  { value: 745, label: "W", frontColor: "#177AD5" },
  { value: 320, label: "T" },
  { value: 600, label: "F", frontColor: "#177AD5" },
  { value: 256, label: "S" },
  { value: 300, label: "S" },
];

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.chartContainer}>
        <BarChart
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
      <View style={styles.chartContainer}>
        <LineChart data={data} />
      </View>
      <View style={styles.chartContainer}>
        <PieChart data={data} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  chartContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "lightgrey",
    padding: 10,
    margin: 10,
    shadowColor: "lightgrey",
    shadowOpacity: 1,
    backgroundColor: "white",
    shadowOffset: {
      height: 6,
      width: 5,
    },
  },
});
