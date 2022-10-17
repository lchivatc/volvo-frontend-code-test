import React from "react";
import { StyleProvider, ThemePicker, styleRenderer } from "vcc-ui";
import { AppProps } from "next/app";

const renderer = styleRenderer();

renderer.renderStatic(`
  .CarCarousel-NavButton {
    border: none;
    background-color: transparent;
  }
  .CarCarousel-NavButton:disabled img{
    opacity: 0.5;
  }
  .CarCarousel-NavDots button {
    width: 16px;
    height: 16px;
    border-color: rgb(20,20,20);
    background-color: rgb(20,20,20);
    border-style: solid;
    border-radius: 100%;
    border-width: thin;
    margin-right: 16px;
  }
  .CarCarousel-NavDots button:disabled {
    border-color: rgb(220,220,220);
    background-color: rgb(220,220,220);
  }
`)

function HomePage({Component, pageProps}: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider renderer={renderer}>
        <ThemePicker variant="light">
          <Component { ...pageProps }/>
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
