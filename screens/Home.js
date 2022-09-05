import React, { useRef } from "react";

// import { useFonts } from "expo-google-fonts/inter";
import { useFonts } from "expo-font";

import {
  Animated,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
// import { ScrollView } from "react-native-virtualized-view";
import { VictoryPie } from "victory-native";

// import { Colors } from "react-native/Libraries/NewAppScreen";

import { COLORS, SIZES, FONTS, icons } from "../constants";

const Home = () => {
  const categoryListHeghtAnimationValue = useRef(
    new Animated.Value(115)
  ).current;

  const [fontsLoaded] = useFonts({
    "Roboto-Re˙gular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  // Dummy date
  const confirmStatus = "C";
  const pendingStatus = "P";

  let categoriesData = [
    {
      id: 1,
      name: "Education",
      icon: icons.education,
      color: COLORS.yellow,
      expenses: [
        {
          id: 1,
          title: "Tuition Fee",
          description: "Tuition fee",
          location: "ByProgrammers' tuition center",
          total: 100.0,
          status: pendingStatus,
        },
        {
          id: 2,
          title: "Arduino",
          description: "Hardward",
          location: "ByProgrammers' tuition center",
          total: 30.0,
          status: pendingStatus,
        },
        {
          id: 3,
          title: "Javascript Books",
          description: "Javascript books",
          location: "ByProgrammers' Book Store",
          total: 20.0,
          status: confirmStatus,
        },
        {
          id: 4,
          title: "PHP Books",
          description: "PHP books",
          location: "ByProgrammers' Book Store",
          total: 20.0,
          status: confirmStatus,
        },
      ],
    },
    {
      id: 2,
      name: "Nutrition",
      icon: icons.food,
      color: COLORS.lightBlue,
      expenses: [
        {
          id: 5,
          title: "Vitamins",
          description: "Vitamin",
          location: "ByProgrammers' Pharmacy",
          total: 25.0,
          status: pendingStatus,
        },

        {
          id: 6,
          title: "Protein powder",
          description: "Protein",
          location: "ByProgrammers' Pharmacy",
          total: 50.0,
          status: confirmStatus,
        },
      ],
    },
    {
      id: 3,
      name: "Child",
      icon: icons.baby_car,
      color: COLORS.darkgreen,
      expenses: [
        {
          id: 7,
          title: "Toys",
          description: "toys",
          location: "ByProgrammers' Toy Store",
          total: 25.0,
          status: confirmStatus,
        },
        {
          id: 8,
          title: "Baby Car Seat",
          description: "Baby Car Seat",
          location: "ByProgrammers' Baby Care Store",
          total: 100.0,
          status: pendingStatus,
        },
        {
          id: 9,
          title: "Pampers",
          description: "Pampers",
          location: "ByProgrammers' Supermarket",
          total: 100.0,
          status: pendingStatus,
        },
        {
          id: 10,
          title: "Baby T-Shirt",
          description: "T-Shirt",
          location: "ByProgrammers' Fashion Store",
          total: 20.0,
          status: pendingStatus,
        },
      ],
    },
    {
      id: 4,
      name: "Beauty & Care",
      icon: icons.healthcare,
      color: COLORS.peach,
      expenses: [
        {
          id: 11,
          title: "Skin Care product",
          description: "skin care",
          location: "ByProgrammers' Pharmacy",
          total: 10.0,
          status: pendingStatus,
        },
        {
          id: 12,
          title: "Lotion",
          description: "Lotion",
          location: "ByProgrammers' Pharmacy",
          total: 50.0,
          status: confirmStatus,
        },
        {
          id: 13,
          title: "Face Mask",
          description: "Face Mask",
          location: "ByProgrammers' Pharmacy",
          total: 50.0,
          status: pendingStatus,
        },
        {
          id: 14,
          title: "Sunscreen cream",
          description: "Sunscreen cream",
          location: "ByProgrammers' Pharmacy",
          total: 50.0,
          status: pendingStatus,
        },
      ],
    },
    {
      id: 5,
      name: "Sports",
      icon: icons.sports,
      color: COLORS.purple,
      expenses: [
        {
          id: 15,
          title: "Gym Membership",
          description: "Monthly Fee",
          location: "ByProgrammers' Gym",
          total: 45.0,
          status: pendingStatus,
        },
        {
          id: 16,
          title: "Gloves",
          description: "Gym Equipment",
          location: "ByProgrammers' Gym",
          total: 15.0,
          status: confirmStatus,
        },
      ],
    },
    {
      id: 6,
      name: "Clothing",
      icon: icons.cloth,
      color: COLORS.red,
      expenses: [
        {
          id: 17,
          title: "T-Shirt",
          description: "Plain Color T-Shirt",
          location: "ByProgrammers' Mall",
          total: 20.0,
          status: pendingStatus,
        },
        {
          id: 18,
          title: "Jeans",
          description: "Blue Jeans",
          location: "ByProgrammers' Mall",
          total: 50.0,
          status: confirmStatus,
        },
      ],
    },
  ];

  const [viewMode, setViewMode] = React.useState("chart");
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [showMoreTogle, setShowMoreToggle] = React.useState(false);

  renderNavBar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 80,
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <TouchableOpacity
          style={{ justifyContent: "center", width: 50 }}
          onPress={() => console.log("Back")}
        >
          <Image
            source={icons.back_arrow}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            width: 50,
          }}
          onPress={() => console.log("More")}
        >
          <Image
            source={icons.more}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          // paddingHorizontal: SIZES.padding,
          // paddingVertical: SIZES.padding,
          padding: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <View>
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h2,
              fontFamily: "Roboto-Bold",
            }}
          >
            My expenses
          </Text>
          <Text
            style={{
              color: COLORS.darkgray,
              ...FONTS.h3,
              fontFamily: "Roboto-Bold",
            }}
          >
            Summary (private)
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: COLORS.lightGray,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            }}
          >
            <Image
              source={icons.calendar}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightBlue,
              }}
            />
          </View>
          <View style={{ marginLeft: SIZES.padding }}>
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h3,
                fontFamily: "Roboto-Bold",
              }}
            >
              11 Now, 2020
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.darkgray,
                fontFamily: "Roboto-Regular",
              }}
            >
              13% more than last month
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderCategoryHeaderSection = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: SIZES.padding,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <View>
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h3,
              fontFamily: "Roboto-Bold",
            }}
          >
            CATEGORIES
          </Text>
          <Text
            style={{
              color: COLORS.darkgray,
              ...FONTS.body4,
              fontFamily: "Roboto-Regular",
            }}
          >
            {categories.length} Total
          </Text>
        </View>
        {/* Buttons */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
              borderRadius: 25,
            }}
            onPress={() => setViewMode("chart")}
          >
            <Image
              source={icons.chart}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              backgroundColor: viewMode == "list" ? COLORS.secondary : null,
              borderRadius: 25,
            }}
            onPress={() => setViewMode("list")}
          >
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderCategoryList = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 5,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderRadius: 5,
            backgroundColor: COLORS.white,
            ...styles.shadow,
          }}
          onPress={() => setSelectedCategory(item)}
        >
          <Image
            source={item.icon}
            style={{
              width: 20,
              height: 20,
              tintColor: item.color,
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.primary,
              ...FONTS.h4,
              fontFamily: "Roboto-Bold",
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
        <Animated.View style={{ height: categoryListHeghtAnimationValue }}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            numColumns={2}
          />
        </Animated.View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: SIZES.base,
            justifyContent: "center",
          }}
          onPress={() => {
            if (showMoreTogle) {
              Animated.timing(categoryListHeghtAnimationValue, {
                toValue: 115,
                duration: 300,
                useNativeDriver: false,
              }).start();
            } else {
              Animated.timing(categoryListHeghtAnimationValue, {
                toValue: 172.5,
                duration: 300,
                useNativeDriver: false,
              }).start();
            }
            setShowMoreToggle(!showMoreTogle);
          }}
        >
          <Text style={{ ...FONTS.body4, fontFamily: "Roboto-Regular" }}>
            {showMoreTogle ? "LESS" : "MORE"}
          </Text>
          <Image
            source={showMoreTogle ? icons.up_arrow : icons.down_arrow}
            style={{
              marginLeft: 5,
              width: 15,
              height: 15,
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderIncomingExpensesTitle = () => {
    return (
      <View
        style={{ padding: SIZES.padding, backgroundColor: COLORS.lightGray2 }}
      >
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.primary,
            fontFamily: "Roboto-Bold",
          }}
        >
          INCOMING EXPENSES
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.darkgray,
            fontFamily: "Roboto-Bold",
          }}
        >
          12 Total
        </Text>
      </View>
    );
  };

  const renderIncomingExpenses = () => {
    let allExpenses = selectedCategory ? selectedCategory.expenses : [];
    //filter pending expenses

    let incomingExpenses = allExpenses.filter((a) => a.status == "P");
    const renderItem = ({ item, index }) => (
      <View
        style={{
          width: 300,
          marginRight: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        {/* Title */}
        <View
          style={{
            flexDirection: "row",
            padding: SIZES.padding,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: COLORS.lightGray,
              justifyContent: "center",
              marginRight: SIZES.base,
            }}
          >
            <Image
              source={selectedCategory.icon}
              style={{
                width: 30,
                height: 30,
                tintColor: selectedCategory.color,
              }}
            />
          </View>
          <Text
            style={{
              ...FONTS.h3,
              color: selectedCategory.color,
              fontFamily: "Roboto-Bold",
            }}
          >
            {selectedCategory.name}
          </Text>
        </View>
        {/* Expenses Description */}
        <View style={{ paddingHorizontal: SIZES.padding }}>
          {/* Title and description */}
          <Text style={{ ...FONTS.h2, fontFamily: "Roboto-Bold" }}>
            {item.title}
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              flexWrap: "wrap",
              color: COLORS.darkgray,
              fontFamily: "Roboto-Regular",
            }}
          >
            {item.description}
          </Text>
          {/* Location */}
          <Text
            style={{
              marginTop: SIZES.padding,
              ...FONTS.h4,
              fontFamily: "Roboto-Bold",
            }}
          >
            Location
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={icons.pin}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                marginBottom: SIZES.base,
                color: COLORS.darkgray,
                ...FONTS.body4,
                fontFamily: "Roboto-Regular",
              }}
            >
              {item.location}
            </Text>
          </View>
        </View>
        {/* Price */}
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderBottomStartRadius: SIZES.radius,
            borderBottomEndRadius: SIZES.radius,
            backgroundColor: selectedCategory.color,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body3,
              fontFamily: "Roboto-Regular",
            }}
          >
            CONFIRM {item.total.toFixed(2)} USD
          </Text>
        </View>
      </View>
    );
    return (
      <View>
        {renderIncomingExpensesTitle()}
        {incomingExpenses.length > 0 && (
          <FlatList
            data={incomingExpenses}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
        {incomingExpenses.length == 0 && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 300,
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h3,
                fontFamily: "Roboto-Bold",
              }}
            >
              No Record
            </Text>
          </View>
        )}
      </View>
    );
  };

  const processCategoryDataDispaly = () => {
    // Filter expenses with "Confirmed" staus
    let chartData = categories.map((item) => {
      let confirmExpenses = item.expenses.filter((a) => a.status == "C");
      var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);
      return {
        name: item.name,
        y: total,
        expenseCount: confirmExpenses.length,
        color: item.color,
        id: item.id,
      };
    });
    //Filter out categories with no data/expenses
    let filterChartData = chartData.filter((a) => a.y > 0);

    //calculate the total expenses

    let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

    //calculate percentage and repopulate chart data

    let finalChartData = filterChartData.map((item) => {
      let percentage = ((item.y / totalExpense) * 100).toFixed(0);
      return {
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });
    return finalChartData;
  };

  const setSelctCategoryByName = (name) => {
    let category = categories.filter((a) => a.name == name);
    setSelectedCategory(category[0]);
  };
  const renderChart = () => {
    let chartData = processCategoryDataDispaly();
    let colorScales = chartData.map((item) => item.color);
    let totalExpenseCount = chartData.reduce(
      (a, b) => (a = b.expenseCount || 0),
      0
    );
    // const setSelctCategoryByName = (name) => {
    //   let category = categories.filter((a) => a.name == name);
    //   setSelectedCategory(category[0]);
    // };
    return (
      <>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {
            <VictoryPie
              data={chartData}
              colorScale={colorScales}
              labels={(datum) => `${datum.y}`}
              radius={({ datum }) =>
                selectedCategory && selectedCategory.name == datum.name
                  ? SIZES.width * 0.4
                  : SIZES.width * 0.4 - 10
              }
              innerRadius={70}
              labelRadius={({ innerRadius }) =>
                (SIZES.width * 0.4 + innerRadius) / 2.5
              }
              style={{
                labels: {
                  fill: COLORS.white,
                  ...FONTS.body3,
                  // fontFamily: "Roboto-Regular",
                },
                parent: {
                  ...styles.shadow,
                },
              }}
              width={SIZES.width * 0.8}
              height={SIZES.width * 0.8}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: "labels",
                          mutation: (props) => {
                            let categryName = chartData[props.index].name;
                            setSelctCategoryByName(categryName);
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />
          }
          <View style={{ position: "absolute", top: "42%", left: "42%" }}>
            <Text
              style={{
                ...FONTS.h1,
                fontFamily: "Roboto-Bold",
                textAlign: "center",
              }}
            >
              {totalExpenseCount}
            </Text>
            <Text
              style={{
                textAlign: "center",
                ...FONTS.body3,
                fontFamily: "Roboto-Regular",
              }}
            >
              Expenses
            </Text>
          </View>
        </View>
      </>
    );
  };

  const rebderExpensesSummary = () => {
    let data = processCategoryDataDispaly();
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 40,
            paddingHorizontal: SIZES.radius,
            borderRadius: 10,
            backgroundColor:
              selectedCategory && selectedCategory.name == item.name
                ? item.color
                : COLORS.white,
          }}
          onPress={() => {
            let categoryName = item.name;
            setSelctCategoryByName(categoryName);
          }}
        >
          {/* Name/Category */}
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor:
                  selectedCategory && selectedCategory.name == item.name
                    ? COLORS.white
                    : item.color,
                borderRadius: 5,
              }}
            ></View>
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.h3,
                fontFamily: "Roboto-Bold",
                color:
                  selectedCategory && selectedCategory.name == item.name
                    ? COLORS.white
                    : COLORS.primary,
              }}
            >
              {item.name}
            </Text>
          </View>
          {/* Expenses */}
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                color:
                  selectedCategory && selectedCategory.name == item.name
                    ? COLORS.white
                    : COLORS.primary,

                ...FONTS.h3,
                fontFamily: "Roboto-Bold",
              }}
            >
              {item.y} USD - {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{ padding: SIZES.padding }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  };
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {/* nav bar section*/}
      {renderNavBar()}
      {/* header section */}
      {renderHeader()}
      {/* category header section */}
      {renderCategoryHeaderSection()}

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {viewMode == "list" && (
          <View>
            {renderCategoryList()}
            {renderIncomingExpenses()}
          </View>
        )}
        {viewMode == "chart" && (
          <View>
            {renderChart()}
            {rebderExpensesSummary()}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default Home;
