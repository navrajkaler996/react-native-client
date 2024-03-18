import { ScrollView, View } from "react-native";

import Divider from "../../components/Divider";
import Discussion from "./Discussion";

const discussionsData = [
  {
    title: "Work permit help needed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed facilisis diam. Sed quis dolor at metus pharetra porttitor. Aliquamerat volutpat. Nulla ornare nunc vel felis dignissim, et sodales metus faucibus. Proin porttitor mi sed volutpat porttitor. Quisque sit amet mauris a odio porttitor congue.",
  },
  {
    title: "Relocating to Winnipeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed facilisis diam. Sed quis dolor at metus pharetra porttitor. Aliquamerat volutpat. Nulla ornare nunc vel felis dignissim, et sodales metus faucibus. Proin porttitor mi sed volutpat porttitor. Quisque sit amet mauris a odio porttitor congue.",
  },
  {
    title: "Study permit help needed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed facilisis diam. Sed quis dolor at metus pharetra porttitor. Aliquamerat volutpat. Nulla ornare nunc vel felis dignissim, et sodales metus faucibus. Proin porttitor mi sed volutpat porttitor. Quisque sit amet mauris a odio porttitor congue.",
  },
  {
    title: "PR help",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed facilisis diam. Sed quis dolor at metus pharetra porttitor. Aliquamerat volutpat. Nulla ornare nunc vel felis dignissim, et sodales metus faucibus. Proin porttitor mi sed volutpat porttitor. Quisque sit amet mauris a odio porttitor congue.",
  },
  {
    title: "Dating advice please",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed facilisis diam. Sed quis dolor at metus pharetra porttitor. Aliquamerat volutpat. Nulla ornare nunc vel felis dignissim, et sodales metus faucibus. Proin porttitor mi sed volutpat porttitor. Quisque sit amet mauris a odio porttitor congue.",
  },
  {
    title: "Winnipeg or not?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed facilisis diam. Sed quis dolor at metus pharetra porttitor. Aliquamerat volutpat. Nulla ornare nunc vel felis dignissim, et sodales metus faucibus. Proin porttitor mi sed volutpat porttitor. Quisque sit amet mauris a odio porttitor congue.",
  },
  {
    title: "PNP processig time",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed facilisis diam. Sed quis dolor at metus pharetra porttitor. Aliquamerat volutpat. Nulla ornare nunc vel felis dignissim, et sodales metus faucibus. Proin porttitor mi sed volutpat porttitor. Quisque sit amet mauris a odio porttitor congue.",
  },
];
//Displays a list of discussions
const DiscussionsList = ({ pressHandler }) => {
  return (
    <ScrollView
      id="discussions"
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      {discussionsData?.map((discussion, i) => {
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
