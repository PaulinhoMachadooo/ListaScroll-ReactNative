import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/ListaItem';


const Page = styled.SafeAreaView`
  flex:1;
`;
const Listagem = styled.FlatList`
  flex:1;
`;


/*
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
*/


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

      <Listagem
        data={lista}
        renderItem={({item})=><ListaItem data={item} />}
        keyExtractor={(item)=>item.id}
      />
    </Page>
  );
}


