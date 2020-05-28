import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Modal,
} from 'react-native';
import FeedCard from '../Molecules/FeedCard';
import {getNews} from '../../Store/Actions/News';
import {connect} from 'react-redux';
import ArticleList from '../Molecules/ArticleList';

const Home = ({articles, ...props}) => {
  const styles = generateStyles(props);

  React.useEffect(() => {
    getTopStories();
  }, []);

  const getTopStories = () => {
    props.getNews();
  };

  const {isArticlesLoading, totalArticles} = props;

  const handlePagination = () => {
    let isTotalArticlesReached = articles.length === totalArticles;

    if (!isTotalArticlesReached) getTopStories();
  };

  return (
    <>
      <Modal
        animationType="slide"
        // transparent={true}
        visible={isArticlesLoading}>
        <View style={styles.loader}>
          <Text style={styles.loaderText}>Stiching your articles..</Text>
          <ActivityIndicator />
        </View>
      </Modal>

      <View style={styles.container}>
        {!isArticlesLoading && (
          <ArticleList
            data={articles}
            handlePagination={() => handlePagination()}
            {...props}
          />
        )}
      </View>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isArticlesLoading: state.news.isArticlesLoading,
    articles: state.news.articles,
    totalArticlesPerPage: state.news.totalArticlesPerPage,
    totalArticlesPage: state.news.totalArticlesPage,
    totalArticles: state.news.totalArticles,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getNews: () => dispatch(getNews()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

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
