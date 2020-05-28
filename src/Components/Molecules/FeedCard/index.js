import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CardHeader from './CardHeader';
import CardBody from './CarBody';
import CardFooter from './CardFooter';

const FeedCard = ({article, ...props}) => {
  const styles = generateStyles(props);
  return (
    <View style={styles.container}>
      <CardHeader author={article.author} />
      <CardBody imageUrl={article.urlToImage} />
      <CardFooter article={article} {...props} />
    </View>
  );
};

export default FeedCard;

const generateStyles = ({}) =>
  StyleSheet.create({
    container: {
      height: 500,
    },
    text: {},
  });
