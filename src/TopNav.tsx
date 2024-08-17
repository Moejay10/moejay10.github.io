import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  GithubSVG,
  LinkedInSVG,
} from "./animations/SvgCurves";

import config from "./components/Config";
const primaryColor = config["primaryColor"];
const secondaryColor = config["secondaryColor"];

const TN = styled.div`
  height: 10%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;

  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-right: 3vw;
  margin-left: 3vw;
`;

function TopNav() {
  return (
    <TN>
      <LinkContainer>
        <NavLink to={"/"}>
          <h2 style={{ margin: 0, color: "white" }}>Home</h2>
        </NavLink>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            gap: "1vw",
          }}
        >
          <NavLink to={"/about"}>
            <h2 style={{ margin: 0, color: "white" }}>About Me</h2>
          </NavLink>
          <a target="_blank" href="https://github.com/moejay10/">
            <GithubSVG color={"#ffffff"} />
          </a>
          <a target="_blank" href="https://linkedin.com/in/mohamed/">
            <LinkedInSVG color={"#ffffff"} />
          </a>
        </div>
      </LinkContainer>
    </TN>
  );
}

export default TopNav;
