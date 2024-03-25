import { ScrollView, View } from "react-native";

import Divider from "../../components/Divider";
import Discussion from "./Discussion";

//Displays a list of discussions
const DiscussionsList = ({ pressHandler, discussionsList }) => {
  return (
    <ScrollView
      id="discussions"
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      {discussionsList?.map((discussion, i) => {
        return (
          <View key={i}>
            <Divider />
            <Discussion discussion={discussion} pressHandler={pressHandler} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default DiscussionsList;
