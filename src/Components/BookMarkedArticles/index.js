import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {getSavedArticlesFromLocal} from '../../Store/Actions/News';
import ArticleList from '../Molecules/ArticleList';

const BookMarkedArticles = ({
  savedArticles,
  savedArticlesLoading,
  ...props
}) => {
  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getSavedArticlesFromLocal();
    });
    return unsubscribe;
  }, [props.navigation]);
  console.log(savedArticles.length);
  return (
    <View style={{flex: 1}}>
      {savedArticlesLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      ) : (
        <ArticleList data={savedArticles} {...props} />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    savedArticles: state.news.savedArticles,
    savedArticlesLoading: state.news.savedArticlesLoading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSavedArticlesFromLocal: () => dispatch(getSavedArticlesFromLocal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookMarkedArticles);
