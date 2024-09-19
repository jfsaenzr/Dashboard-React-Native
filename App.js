import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { BarChart, LineChart } from 'react-native-graph-kit';

const data = {
  xAxis: {
    labels: [
      'Alice',
      'Bob',
      'Charlie',
      'Liam',
      'Mia',
      'Nora',
      'Oliver',
      'Penelope',
      'Quinn',
      'Ryan',
      'Sophia'
    ]
  },
  yAxis: {
    datasets: [120, 350, 400, 70, 87, 655, 10, 20, 400, 70, 87]
  }
};

const App = () => (
  <SafeAreaView style={styles.screen}>
    <View style={styles.chartContainer}>
      <BarChart
        chartData={data}
        barWidth={30}
        barGap={70}
        horizontalGridLineColor={'grey'}
        chartHeight={300}
        yAxisMax={1000}
      />
    </View>
    <View style={styles.chartContainer}>
      <LineChart yAxisMax={1000} chartData={data} xAxisLength={70} initialDistance={30} />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  chartContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    padding: 10,
    margin: 10,
    shadowColor: 'lightgrey',
    shadowOpacity: 1,
    backgroundColor: 'white',
    shadowOffset: {
      height: 6,
      width: 5
    }
  }
});

export default App;