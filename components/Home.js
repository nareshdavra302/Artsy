//import React to create a react class component
import React, { Component } from 'react';
//import your UI from react-native
import {
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
//Import the Query component from react apollo that will responsible for retrieving data from your graphql server.
import { Query } from 'react-apollo';
//import gql from graphql-tag for making queries to our graphql server.
import gql from 'graphql-tag';
import { Button, Card } from 'react-native-elements';
import constants from '../config/constants';
import Search from 'react-native-search-box';
import styles from '../styles/homeStyle';
import { shallowCompare } from '../utils/function';
import CardItem from '../components/cardItem';

const query = gql`
        query {
                artworks {
                  id
                  title
                  price_currency
                  imageUrl
                  displayLabel
                  sale_message
                  artist {
                    id
                    name
                    imageUrl
                  }
                }
            }
`;
type Props = {};
type State = {
  found: boolean,
  data: Array<any>,
  display: boolean,
  artworks: Array<any>,
};
//Define your component
class Home extends React.Component<Props, State> {
  state = {
    found: false,
    data: [],
    display: true,
    artworks: [],
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  //Define your method for rendering each individual item
  _renderItem({ item }) {
    return <CardItem item={item} />;
  }

  async SearchFilterFunction(searchText: string) {
    // Fire Realm Query And Find Yummy Recipes
    const { artworks } = this.state;
    var findData = [];
    searchText.length !== 0
      ? artworks.filter(itemObj => {
          if (
            itemObj.artist.name.indexOf(searchText) > -1 ||
            itemObj.title.indexOf(searchText) > -1
          ) {
            findData.push(itemObj);
            console.log('findData', findData[0].title);
            this.setState({
              artworks: findData,
              display: false,
            });
          } else {
            //  this.setState({ artworks: [], display: false });
          }
        })
      : this.setState({
          display: true,
        });
  }

  render() {
    const { data, display, artworks, search } = this.state;
    //render your ui with the styles set for each ui element.
    return (
      <View style={styles.container}>
        <View style={styles.searchbox}>
          <Search
            placeholder="Search here"
            onChangeText={text => this.SearchFilterFunction(text)}
            onCancel={text => this.SearchFilterFunction('')}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          {display ? (
            <Query query={query}>
              {(response, error) => {
                if (error) {
                  console.log('Response Error-------', error);
                  return <Text style={styles.errorText}>{error.message}</Text>;
                }
                //If the response is done, then will return the FlatList
                if (response) {
                  console.log('response-data-------------', response);
                  this.setState({ artworks: response.data.artworks });
                  //Return the FlatList if there is not an error.
                  return (
                    <View>
                      <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.artworks}
                        renderItem={item => this._renderItem(item)}
                      />
                    </View>
                  );
                }
              }}
            </Query>
          ) : (
            <View>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={artworks}
                renderItem={item => this._renderItem(item)}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
//Export the component
export default Home;
