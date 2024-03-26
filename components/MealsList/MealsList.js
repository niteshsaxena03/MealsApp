import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({items}) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageURL: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
      id: item.id,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.data}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
