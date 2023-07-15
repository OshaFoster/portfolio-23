import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Inter, Oswald } from 'next/font/google';
import MeritMedical from 'components/MeritMedical';
import HilaryWatts from 'components/HilaryWatts';
import Stepite from 'components/Stepite';
import Skills from 'components/Skills';
import About from 'components/About';
import Header from 'components/Header';
import RightHeader from 'components/RightHeader';
import Connect from 'components/Connect';
import Footer from 'components/Footer';
import DigNDirt from 'components/DigNDirt';
import { Title, DateText, media, sizes } from '@/styles/shared';
import classnames from 'classnames';
// const inter = Inter({ subsets: ['latin'] });
// const light = Oswald({ weight: '200', subsets: ['latin'] });

const PageWrap = styled.div`
/* adjust on large screen */
  max-width: 1800px;
  width: 85%;
  margin: auto;
  padding: 40px 190px;
  overflow: hidden;
  position: fixed;
  inset: 0;
  /* background-color: white; */
  ${media.medium`
  overflow: scroll;
  padding: 40px 150px;
  /* background-color: blue; */
  `}
  ${media.small`
  overflow: scroll;
  width: 100%;
  overflow-x: hidden;
  padding: 40px 0px;
  /* background-color: green; */
  `}
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: pink; */
  ${media.medium`
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  /* background-color: green; */
  z-index: 1;
  `}
`;

const LeftWrap = styled.div`
  width: 32em;
  /* background-color: yellow; */
  padding-right: 90px;
  box-sizing: border-box;
  ${media.medium`
  width: 80%;
  margin: auto;
  /* padding-left: 1em; */
  `}
  ${media.small`
  padding-right: 0px;
  width: 90%;
  margin: auto;
  padding-left: 0px;
  `}
`;

const RightWrap = styled.div`
  height: 100vh;
  width: 65%;
  margin: auto;
  overflow: scroll;
  /* background-color: red; */
  box-sizing: border-box;
  padding-bottom: 140px;
  ${media.medium`
  margin: auto;
  overflow-x: hidden;
  width: 80%;
  margin: auto;
  z-index: 10;
  `}
  ${media.small`
  width: 90%;
  margin: auto;
  overflow-x: hidden;
  `}
`;

const RightContent = styled.div`
  padding-left: 9.4em;
  ${media.medium`
    padding-left: 0px;
  /* background-color: gray; */
  `}
`;

export default function Home() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window?.innerWidth);
    }

    window?.addEventListener('resize', handleResize);

    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  const stopHover = windowWidth < sizes.breakpoints.smallMaxWidth;

  const stopHoverClass = classnames({ stopHover: stopHover});
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
            <RightContent >
              <Title>Freelance</Title>
              <DateText>&nbsp;Sept 2022 - Present</DateText>
              <HilaryWatts stopHover={stopHoverClass}/>
              <MeritMedical stopHover={stopHoverClass}/>
              <Title>Stepite</Title>
              <DateText>&nbsp;July 2020 - March 2022</DateText>
              <Stepite />
              <Title>Verisage</Title>
              <DateText>&nbsp;July 2018 - July 2020</DateText>
              <DigNDirt stopHover={stopHoverClass}/>
              <Footer />
            </RightContent>
          </RightWrap>
        </ContentWrap>
      </PageWrap>
    </>
  );
}
