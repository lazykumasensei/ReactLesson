/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Styled from 'styled-components/native'

const ScrollView = Styled.ScrollView`
  background-color: ${Colors.lighter};
  `;
  
  const Body = Styled.View`
    background-color: ${Colors.white}
  `;

  const SectionContainer = Styled.View`
    margin-top: 32px;
    padding-horizontal: 24px;
  `;

  const SectionDescription = Styled.Text`
    margin-top: 8px;
    font-size: 18px;
    font-weight: 400;
    color: ${Colors.dark};  
  `;

  const HighLight = Styled.Text`
    font-weight: 700;
  `;

  interface Props{}

  const App = ({}: Props) => {
    return(
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Header />
            <Body>
              <SectionContainer>
                <SectionDescription> Step One </SectionDescription>
                <SectionDescription> 
                  Edit <HighLight>App.js</HighLight> to change this screen and then com back to see your edits.
                </SectionDescription>
              </SectionContainer>
              
              </Body>
            </ScrollView>
        </SafeAreaView>
      </>
    )
  }

export default App;
