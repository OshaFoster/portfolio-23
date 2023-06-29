import Head from 'next/head';
import styled from 'styled-components';
import { Inter, Oswald } from 'next/font/google';
import MeritMedical from '../components/MeritMedical';
import HilaryWatts from '../components/HilaryWatts';
import Stepite from '../components/Stepite';
import Skills from '../components/Skills';
import About from '../components/About';
import Header from '../components/Header';
import RightHeader from '../components/RightHeader';
import Connect from '../components/Connect';
import Footer from '../components/Footer';
import DigNDirt from 'components/DigNDirt';
import { Title, DateText } from '../styles/shared';

// const inter = Inter({ subsets: ['latin'] });
// const light = Oswald({ weight: '200', subsets: ['latin'] });

const PageWrap = styled.div`
  width: 85%;
  margin: auto;
  padding-top: 40px;
  overflow: hidden;
  position: fixed;
  inset: 0;
  /* background-color: white; */
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: pink; */
`;

const LeftWrap = styled.div`
  width: 35%;
  /* background-color: yellow; */
  padding-right: 90px;
  box-sizing: border-box;
`;

const RightWrap = styled.div`
  height: 100vh;
  width: 65%;
  margin: auto;
  overflow: scroll;
  /* background-color: green; */
  box-sizing: border-box;
  padding-bottom: 200px;
`;

const RightContent = styled.div`
  padding-left: 150px;
  /* background-color: green; */
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
            <Header />
            <About />
            <Skills />
            <Connect />
          </LeftWrap>
          <RightWrap>
            <RightHeader />
            <RightContent>
              <Title>Freelance</Title>
              <DateText>&nbsp;Sept 2022 - Present</DateText>
              <HilaryWatts />
              <MeritMedical />
              <Title>Stepite</Title>
              <DateText>&nbsp;July 2020 - March 2022</DateText>
              <Stepite />
              <Title>Verisage</Title>
              <DateText>&nbsp;July 2018 - July 2020</DateText>
              <DigNDirt />
              <Footer />
            </RightContent>
          </RightWrap>
        </ContentWrap>
      </PageWrap>
    </>
  );
}
