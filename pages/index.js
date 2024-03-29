import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
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

const PageWrap = styled.div`
  max-width: 1800px;
  width: 85%;
  margin: auto;
  padding: 40px 190px;
  overflow: hidden;
  position: fixed;
  inset: 0;
  ${media.medium`
  overflow: scroll;
  padding: 40px auto;
  `}
  ${media.small`
  width: 100%;
  overflow-x: hidden;
  padding: 40px 0px;
  `}
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  ${media.medium`
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 1;
  `}
`;

const LeftWrap = styled.div`
  width: 32em;
  padding-right: 3em;
  box-sizing: border-box;
  ${media.medium`
  width: 80%;
  margin: auto;
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
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-bottom: 100px;
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
  `}
`;

export default function Home() {
  const [windowWidth, setWindowWidth] = useState();

  // set window width on load
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // set window width on resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window?.innerWidth);
    }

    window?.addEventListener('resize', handleResize);

    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  // stop hover annimation on mobile using window width
  const stopHover = windowWidth < sizes.breakpoints.smallMaxWidth;

  const stopHoverClass = classnames({ stopHover: stopHover });

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
              <HilaryWatts stopHover={stopHoverClass} />
              <MeritMedical stopHover={stopHoverClass} />
              <Title>Stepite</Title>
              <DateText>&nbsp;July 2020 - March 2022</DateText>
              <Stepite />
              <Title>Verisage</Title>
              <DateText>&nbsp;July 2018 - July 2020</DateText>
              <DigNDirt stopHover={stopHoverClass} />
              <Footer />
            </RightContent>
          </RightWrap>
        </ContentWrap>
      </PageWrap>
    </>
  );
}
