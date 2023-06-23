import { useState, useEffect, useContext } from 'react';

import Head from 'next/head';
import styled from 'styled-components';
import { Inter, Oswald } from 'next/font/google';
import MeritMedical from '../components/MeritMedical';
import HilaryWatts from '../components/HilaryWatts';
import Stepite from '../components/Stepite';
import DigNDirt from '../components/DigNDirt';
import FullStack from '../components/FullStack';
import { Title, ThinTitle, Text, DateText, Decoration } from '../styles/shared';
import { colors } from '../styles/colors';

// const inter = Inter({ subsets: ['latin'] });
// const light = Oswald({ weight: '200', subsets: ['latin'] });

const PageWrap = styled.div`
  height: 100vh;
  width: 95%;
  margin: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  /* width: 90%; */
  margin: auto;
  background-color: pink;
  box-sizing: border-box;
  height: 25%;
`;

const ContentWrap = styled.div`
  width: 90%;
  margin: auto;
  height: 90vh;
  display: flex;
`;

const LeftWrap = styled.div`
  height: 100vh;
  width: 35%;
  margin: auto;
  background-color: yellow;
  padding-right: 90px;
  box-sizing: border-box;
`;

const RightWrap = styled.div`
  height: 100vh;
  width: 65%;
  margin: auto;
  overflow: scroll;
  background-color: green;
  box-sizing: border-box;
  position: relative;
`;

const RightContent = styled.div`
  padding-left: 150px;
`;

const StickyWrap = styled.div`
  position: sticky;
  padding-top: 20px;
  top: 0;
  height: 80px;
  background-color: black;
  z-index: 10;
  width: 100%;
  left: 0;
  padding-left: 150px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Osha Foster</title>
        <meta name='description' content="osha foster's portfolio" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <PageWrap>
        <ContentWrap>
          <LeftWrap>
            <Header>
              <Title>Osha Foster</Title>
              <ThinTitle>Software Engineer</ThinTitle>
              <Decoration />
            </Header>
            <ThinTitle>About Me</ThinTitle>
            <Decoration />

            <Text>
              As a
              <span
                style={{
                  color: colors.decorationLight,
                  opacity: 1,
                }}
              >
                &nbsp;skilled software engineer,&nbsp;
              </span>
              I have a proven track record of spotting problems early and manage
              teams to deliver quality software. I am a
              <span
                style={{
                  color: colors.decorationLight,
                  opacity: 1,
                }}
              >
                &nbsp;natural problem solver&nbsp;
              </span>
              who enjoys collaborating with clients, team members, and
              subcontractors to create better products. For example, I
            </Text>
            <FullStack />
          </LeftWrap>
          <RightWrap>
            <StickyWrap>
              <ThinTitle>Recent Work</ThinTitle>
              <Decoration />
            </StickyWrap>
            <RightContent>
              <Title>Freelance</Title>
              <DateText>&nbsp;Sept 2022 - Present</DateText>
              <HilaryWatts />
              <MeritMedical />
              <Title>Stepite</Title>
              <DateText>&nbsp;July 2020 - March 2022</DateText>
              <Stepite />
              <Title>DigNDirt</Title>
              <DateText>&nbsp;July 2018 - July 2020</DateText>
              <DigNDirt />
            </RightContent>
          </RightWrap>
        </ContentWrap>
      </PageWrap>
    </>
  );
}
