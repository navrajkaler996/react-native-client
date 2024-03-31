import { RefreshControl, ScrollView, View } from "react-native";

import Divider from "../../components/Divider";
import Discussion from "./Discussion";
import { useCallback, useState } from "react";

//Displays a list of discussions
const DiscussionsList = ({ pressHandler, discussionsList }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <ScrollView
      id="discussions"
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
