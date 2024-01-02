import { useEffect } from "react";

import { Outlet } from "react-router-dom";
import styled from 'styled-components';

const Layout = () => {
  useEffect( () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty( "--vh", `${vh}px` );

    window.addEventListener( "resize", () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty( "--vh", `${vh}px` );
    } );
  }, [] );

  return (
    <>
      {/* <div
        // className="flex flex-col items-center justify-center w-full h-screen mx-auto max-w-475"
        style={{ height: "calc(--vh, 1vh) * 100" }}
      > */}
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: red;
  margin: 0 auto;
  /* max-width: 475px; */


`