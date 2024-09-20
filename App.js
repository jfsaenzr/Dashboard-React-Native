import React from "react";
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
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from "react-native-gifted-charts";

const barData = [
  { value: 230, label: "Jan", frontColor: "#4ABFF4" },
  { value: 180, label: "Feb", frontColor: "#79C3DB" },
  { value: 195, label: "Mar", frontColor: "#28B2B3" },
  { value: 250, label: "Apr", frontColor: "#4ADDBA" },
  { value: 320, label: "May", frontColor: "#91E3E3" },
];

const lineData = [
  { value: 0, dataPointText: "0" },
  { value: 10, dataPointText: "10" },
  { value: 8, dataPointText: "8" },
  { value: 58, dataPointText: "58" },
  { value: 56, dataPointText: "56" },
  { value: 78, dataPointText: "78" },
  { value: 74, dataPointText: "74" },
  { value: 98, dataPointText: "98" },
];

const lineData2 = [
  { value: 0, dataPointText: "0" },
  { value: 20, dataPointText: "20" },
  { value: 18, dataPointText: "18" },
  { value: 40, dataPointText: "40" },
  { value: 36, dataPointText: "36" },
  { value: 60, dataPointText: "60" },
  { value: 54, dataPointText: "54" },
  { value: 85, dataPointText: "85" },
];

const pieData = [
  { value: 54, color: "#177AD5" },
  { value: 40, color: "#79D2DE" },
  { value: 20, color: "#ED6665" },
];

const pieData2 = [
  {
    value: 47,
    color: "#009FFF",
    gradientCenterColor: "#006DFF",
    focused: true,
  },
  { value: 40, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
  { value: 16, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
  { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97" },
];

const renderDot = (color) => {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: color,
        marginRight: 10,
      }}
    />
  );
};

const renderLegendComponent = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 120,
            marginRight: 20,
          }}
        >
          {renderDot("#006DFF")}
          <Text style={{ color: "white" }}>Excellent: 47%</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: 120 }}
        >
          {renderDot("#8F80F3")}
          <Text style={{ color: "white" }}>Okay: 16%</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 120,
            marginRight: 20,
          }}
        >
          {renderDot("#3BE9DE")}
          <Text style={{ color: "white" }}>Good: 40%</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: 120 }}
        >
          {renderDot("#FF7F97")}
          <Text style={{ color: "white" }}>Poor: 3%</Text>
        </View>
      </View>
    </>
  );
};

const data = [
  { left: 64, right: 23 },
  { left: 35, right: 48 },
  { left: 57, right: 39 },
  { left: 75, right: 68 },
];

const renderLegend = (text, color) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 12 }}>
      <View
        style={{
          height: 18,
          width: 18,
          marginRight: 10,
          borderRadius: 4,
          backgroundColor: color || "white",
        }}
      />
      <Text style={{ color: "white", fontSize: 16 }}>{text || ""}</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Text
          style={{
            color: "#414141",
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 5,
            textAlign: "center",
            //textDecorationLine: "underline",
          }}
        >
          Gifted Charts
        </Text>

        <View style={styles.chartContainer}>
          <View
            style={{
              margin: -10,
              padding: 16,
              borderRadius: 20,
              backgroundColor: "#232B5D",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Performance
            </Text>

            <View style={{ padding: 20, alignItems: "center" }}>
              <PieChart
                data={pieData2}
                donut
                showGradient
                sectionAutoFocus
                radius={90}
                innerRadius={60}
                innerCircleColor={"#232B5D"}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        47%
                      </Text>
                      <Text style={{ fontSize: 14, color: "white" }}>
                        Excellent
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
            {renderLegendComponent()}
          </View>
        </View>

        <View style={styles.chartContainer}>
          <BarChart
            showFractionalValue
            showYAxisIndices
            noOfSections={4}
            maxValue={400}
            data={barData}
            isAnimated
          />
        </View>

        <View style={styles.chartContainer}>
          <LineChart
            data={lineData}
            data2={lineData2}
            adjustToWidth
            height={230}
            showVerticalLines
            spacing={44}
            initialSpacing={0}
            color1="skyblue"
            color2="orange"
            textColor1="green"
            dataPointsHeight={6}
            dataPointsWidth={6}
            dataPointsColor1="blue"
            dataPointsColor2="red"
            textShiftY={-2}
            textShiftX={-5}
            textFontSize={13}
          />
        </View>
        <View style={styles.chartContainer}>
          <View
            style={{
              marginVertical: -10,
              marginHorizontal: -10,
              borderRadius: 10,
              paddingVertical: 20,
              backgroundColor: "#414141",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/*********************    Custom Header component      ********************/}
            <Text
              style={{
                color: "white",
                fontSize: 28,
                fontWeight: "bold",
                marginBottom: 12,
              }}
            >
              Quarterly Sales
            </Text>
            {/****************************************************************************/}

            <PieChart
              strokeColor="white"
              strokeWidth={4}
              donut
              data={[
                { value: 30, color: "rgb(84,219,234)" },
                { value: 40, color: "lightgreen" },
                { value: 20, color: "orange" },
              ]}
              innerCircleColor="#414141"
              innerCircleBorderWidth={4}
              innerCircleBorderColor={"white"}
              showValuesAsLabels={true}
              showText
              textSize={18}
              showTextBackground={true}
              centerLabelComponent={() => {
                return (
                  <View>
                    <Text style={{ color: "white", fontSize: 36 }}>90</Text>
                    <Text style={{ color: "white", fontSize: 18 }}>Total</Text>
                  </View>
                );
              }}
            />

            {/*********************    Custom Legend component      ********************/}
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 20,
              }}
            >
              {renderLegend("Jan", "rgb(84,219,234)")}
              {renderLegend("Feb", "lightgreen")}
              {renderLegend("Mar", "orange")}
            </View>
            {/****************************************************************************/}
          </View>
        </View>

        <View style={styles.chartContainer}>
          <LineChart
            adjustToWidth
            areaChart
            curved
            data={lineData}
            data2={lineData2}
            height={250}
            showVerticalLines
            spacing={44}
            initialSpacing={0}
            color1="skyblue"
            color2="orange"
            textColor1="green"
            hideDataPoints
            dataPointsColor1="blue"
            dataPointsColor2="red"
            startFillColor1="skyblue"
            startFillColor2="orange"
            startOpacity={0.8}
            endOpacity={0.3}
          />
        </View>

        <View style={styles.chartContainer}>
          <PopulationPyramid
            data={data}
            showValuesAsBarLabels
            showMidAxis
            width={350}
            yAxisLabel
            hideYAxisText
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 5,
  },
  chartContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.8,
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
