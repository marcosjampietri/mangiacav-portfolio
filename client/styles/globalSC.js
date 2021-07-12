import { createGlobalStyle } from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { Transition, animated, config, useSpring } from "react-spring";

export const GlobalStyle = createGlobalStyle`
  body {

    overflow: ${(props) => (props.NavOn ? "hidden" : "visible")};
  }
`;
