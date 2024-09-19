import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function App() {
  const chartConfig = {
    backgroundGradientFrom: "#1e2629",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 147, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForDots: {
      r: "5",
      strokeWidth: "2",
      stroke: "#000",
    },
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(65, 111, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };

  const dataRing = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8],
  };

  const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const dataStackedBar = {
    labels: ["Test1", "Test2"],
    legend: ["L1", "L2", "L3"],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
  };

  const dataPie = [
    {
      name: "Seoul",
      population: 21500000,
      color: "#566573",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#aed6f1",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "#85c1e9",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#5dade2",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "#2e86c1",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>Graficas</Text>

          <LineChart
            data={data}
            width={380}
            height={250}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
            style={{
              margin: 5,
              borderRadius: 16,
              stroke: "#ccc",
              borderWidth: 1,
              backgroundColor: "#fff",
            }}
          />

          <ProgressChart
            data={dataRing}
            width={380}
            height={250}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegen
            d={false}
            style={{
              margin: 5,
              borderRadius: 16,
              stroke: "#ccc",
              borderWidth: 1,
              backgroundColor: "#fff",
            }}
          />

          <BarChart
            //style={graphStyle}
            data={dataBar}
            width={380}
            height={250}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            style={{
              margin: 5,
              borderRadius: 16,
              stroke: "#ccc",
              borderWidth: 1,
              backgroundColor: "#fff",
            }}
          />

          <StackedBarChart
            //style={graphStyle}
            data={dataStackedBar}
            width={380}
            height={250}
            chartConfig={chartConfig}
            style={{
              margin: 5,
              borderRadius: 16,
              stroke: "#ccc",
              borderWidth: 1,
              backgroundColor: "#fff",
            }}
          />

          <PieChart
            data={dataPie}
            width={380}
            height={250}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"5"}
            //center={[10, 0]}
            absolute
            style={{
              margin: 5,
              borderRadius: 16,
              stroke: "#ccc",
              borderWidth: 1,
              backgroundColor: "#fff",
            }}
          />

          <ContributionGraph
            values={commitsData}
            endDate={new Date("2017-04-01")}
            numDays={105}
            width={380}
            height={250}
            chartConfig={chartConfig}
            style={{
              margin: 5,
              borderRadius: 16,
              stroke: "#ccc",
              borderWidth: 1,
              backgroundColor: "#fff",
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
  },
});
