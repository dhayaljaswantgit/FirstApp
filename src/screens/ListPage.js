import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import {getList} from '../store/actions';
import {connect} from 'react-redux';
import COLORS from '../utils/colors';

const {width} = Dimensions.get('screen');
class ListPage extends Component {
  componentDidMount() {
    this.fetchData(false);
  }

  fetchData = (isPaginated = true) => {
    const {getList, listData} = this.props;

    if (!isPaginated) {
      getList({data: [], pageNo: 1});
      return;
    }

    const data = (listData && listData.data) || [];
    const currentPage = (listData && listData.page) || 0;
    const pageNo = currentPage + 1;

    if (pageNo <= listData.total_pages) getList({data, pageNo});
  };

  render() {
    const {listData} = this.props;
    return (
      <>
        <FlatList
          data={(listData && listData.data) || []}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<View style={styles.listFooter} />}
          ListHeaderComponent={
            <View>
              <Text style={styles.listTitle}>User List</Text>
            </View>
          }
          onEndReached={({distanceFromEnd}) => {
            if (distanceFromEnd >= 0) this.fetchData();
          }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => this.fetchData(false)}
            />
          }
        />
      </>
    );
  }
}

export default connect(
  state => ({
    listData: state.listReducer.listData,
  }),
  {getList},
)(ListPage);

const renderItem = item => {
  const {id, email, first_name, last_name, avatar} = item.item;
  return (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={{uri: avatar}} />
      <View style={styles.itemRight}>
        <Text style={styles.text}>Id : {id}</Text>
        <Text style={styles.text}>Email : {email}</Text>
        <Text style={styles.text}>
          Name : {first_name} {last_name}
        </Text>
        <Text style={styles.text}>Id : {id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignContent: 'center',
    margin: 20,
  },
  image: {
    height: (width - 60) / 2,
    width: (width - 60) / 2,
    margin: 5,
  },
  imageUpper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mapUpper: {width: '100%', height: 400, backgroundColor: 'red'},

  item: {padding: 10, margin: 20, backgroundColor: COLORS.primary},
  text: {paddingVertical: 5, color: COLORS.white, marginLeft: 15},
  itemImage: {width: 100, height: 100, borderRadius: 60, marginBottom: 10},
  listTitle: {fontSize: 20, paddingTop: 20, paddingLeft: 20},
  listFooter: {height: 30},
});
