import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class SideNavBar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  handleLogout = () => {
    if (localStorage.getItem("recruiter") != null) {
        localStorage.removeItem("recruiter");
    }}


  render() {
    return (
      <SideNav style={{ height: "100%", position: "fixed" , backgroundColor:"#CE7777"}}  expanded={this.state.isVisible}>
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
              <Link to={"/recruiterhome"}>
              Home
              </Link>
              
             </NavText>
          </NavItem>
         
          
          <NavItem eventKey="logout">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>
            <Link to={"/"}>
            <Button onClick={this.handleLogout}>LogOut</Button>
              </Link>
              </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar1;
