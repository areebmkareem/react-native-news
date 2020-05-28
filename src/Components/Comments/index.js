import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {getComments} from '../../Store/Actions/News';
import {connect} from 'react-redux';
import CommentView from './CommentView';
const Comments = props => {
  const styles = generateStyles(props);

  React.useEffect(() => {
    props.getComments();
  }, []);

  const {isCommentsLoading, comments} = props;

  return (
    <View style={styles.container}>
      {isCommentsLoading ? (
        <View style={styles.loader}>
          <Text style={styles.loaderText}>Loading Comments..</Text>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          ListEmptyComponent={
            <View>
              <Text>No Data</Text>
            </View>
          }
          data={comments}
          renderItem={({item}) => <CommentView comment={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    isCommentsLoading: state.news.isCommentsLoading,
    comments: state.news.comments,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getComments: () => dispatch(getComments()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);

const generateStyles = ({}) =>
  StyleSheet.create({
    container: {
      height: '100%',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loaderText: {
      fontWeight: '500',
      fontSize: 25,
    },
    text: {},
  });
