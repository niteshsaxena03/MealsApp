import { Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return <Text>Meal detail screen with id{mealId}</Text>;
}
export default MealDetailScreen;
