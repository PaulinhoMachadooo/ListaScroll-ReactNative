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
const Item = styled.TouchableOpacity`
  padding:10px;
  background-color:#CCC;
  flex-direction:row;
`;
const ItemText = styled.Text`
  font-size:15px;
  flex:1;
`;
const ItemCheck = styled.View`
  width:20px;
  height:20px;
  border-radius:10px;
  border:5px solid #FFF;
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
            <Item key={index} onPress={()=>{}} activeOpacity={0.7}>
              <>
                <ItemText>{item.task}</ItemText>
                <ItemCheck></ItemCheck>
              </>
            </Item>
          );
        })}
      </Scroll>
    </Page>
  );
}


