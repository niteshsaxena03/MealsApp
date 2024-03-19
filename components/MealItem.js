import { View, Text, Pressable, Image } from "react-native";

function MealItem({title,imageURL}) {
    return (
      <View>
        <Pressable>
          <View>
          <Image source={{uri:imageURL}}/>
            <Text>{title}</Text>
          </View>
        </Pressable>
      </View>
    );
}
export default MealItem;
