import React, { useState } from "react";
import styled from "@emotion/styled";
import LoginForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { motion } from 'framer-motion';
import { AccountContext } from "./accountContext";

const BoxContainer = styled.div`
  width: 320px;
  min-height: 570px;
  margin: 210px auto;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 540px){
    margin: 28px auto;
  }

  @media screen and (max-width: 320px){
    width: 250px;
    margin: 7px auto;
    min-height: 550px;
  }

  @media screen and (max-width: 280px){
    margin: 50px auto;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(255,118,117);
  background: linear-gradient(90deg, rgba(255,118,117,1) 20%, rgba(255,163,117,1) 100%, rgba(0,212,255,1) 100%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)"
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)"
  }
}

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30, 
}

export function AccountBox(props){

  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);

    setTimeout(() => {
      setExpanded(false)
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup")
    }, 400);
  }

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin")
    }, 400);
  }

  const contextValue = { switchToSignup, switchToSignin };

   return(
      <>
          <AccountContext.Provider value={contextValue}>
          <BoxContainer>
            <TopContainer>
              <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants} transition={expandingTransition}/>
              {active === "signin" && <HeaderContainer>
                <HeaderText>Welcome,</HeaderText>
                <HeaderText>Back !</HeaderText>
                <SmallText>Please Sign-in to continue 👌</SmallText>
              </HeaderContainer>}
              {active === "signup" && <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please Sign-up to continue 👍</SmallText>
              </HeaderContainer>}
            </TopContainer>
            <InnerContainer>
              {active === "signin" && <LoginForm />}
              {active === "signup" && <SignupForm />}
            </InnerContainer>
          </BoxContainer>
          </AccountContext.Provider>
      </>

   )
}
