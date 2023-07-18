import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { styles } from "./styles";

import axios from "axios";

import { IRepList, ParamsProps } from "../../@types/types";

export default function Repositories() {
  const route = useRoute();
  const { username } = route.params as ParamsProps;

  const [reps, setReps] = useState<IRepList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setReps(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("ERROR");
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }: { item: IRepList }) => (
    <View style={styles.repBox}>
      <Text style={styles.repName}>{item.name}</Text>
      <Text style={styles.repPublic}>Public</Text>
      <View style={styles.containerDetails}>
        <View style={styles.boxDetails}>
          <Text style={styles.textDetails}>Language</Text>
          <Text style={styles.textDetails}>{item.language}</Text>
        </View>
        <View style={styles.boxDetails}>
          <Feather name="star" size={13} />
          <Text style={styles.textDetails}>{item.stargazers_count}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text
          style={styles.repLink}
          onPress={() => {
            Linking.openURL(item.html_url);
          }}
        >
          See on git
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.scroll}>
      <View style={styles.mainBackground}>
        <View style={styles.repBackground}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator
                size="large"
                color="black"
                style={styles.loadingIndicator}
              />
            </View>
          ) : (
            <FlatList
              data={reps}
              renderItem={renderItem}
              keyExtractor={(item, index) => item.name + index.toString()}
            />
          )}
        </View>
      </View>
    </View>
  );
}
