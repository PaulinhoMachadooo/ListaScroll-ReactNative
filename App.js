import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import lista from './src/lista';


const Page = styled.SafeAreaView`
  flex:1;
`;
const Scroll = styled.ScrollView`
  flex:1;
`;
const Item = styled.View`
  padding:10px;
`;
const ItemText = styled.Text`
  font-size:15px;
`;



export default () => {
  return (
    <Page>

      {/* BARRA DE STATUS   */}
      <StatusBar>
        barStyle = "dark-content"
        hidden = {false}
        backgroundColor = "#0066CC"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      </StatusBar>

      <Scroll>
        {lista.map((item, index) => {
          return (
            <Item key={index}>
              <ItemText>{item.task}</ItemText>
            </Item>
          );
        })}
      </Scroll>
    </Page>
  );
}


