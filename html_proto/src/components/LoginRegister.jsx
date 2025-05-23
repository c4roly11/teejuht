import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./LoginRegister.scss";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

function LoginRegister() {
  const [activeTab, setActiveTab] = useState("login");
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setShowLoginForm(activeTab === "login");
    setShowRegisterForm(activeTab === "register");
  }, [activeTab]);

  const handleTabClick = (tab) => {
    if (tab !== activeTab) setActiveTab(tab);
  };

  const handleLogin = () => {
    // Simulate login success
    setIsLoggedIn(true);
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="login-register-background">
      <div className="login-register-container">
        <MDBContainer>
          <MDBTabs pills justify className="login-register-tabs">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleTabClick("login")}
                active={activeTab === "login"}
              >
                Logi sisse
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleTabClick("register")}
                active={activeTab === "register"}
              >
                Registreeri
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane open={showLoginForm}>
              <h3 className="text-center">Tere tulemast tagasi!</h3>
              <p className="text-center">
                Logi sisse oma kontoga
                <br />
                Sinu anonüümsus on tagatud
              </p>

              <MDBInput
                wrapperClass="mb-4"
                label="Kasutajanimi"
                id="form1-email"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Parool"
                id="form2-password"
                type="password"
              />

              <MDBBtn className="login-register-btn" onClick={handleLogin}>
                Logi sisse
              </MDBBtn>
              <p className="login-register-link">
                Pole kontot?{" "}
                <a href="#!" onClick={() => handleTabClick("register")}>
                  Registreeri
                </a>
              </p>
            </MDBTabsPane>

            <MDBTabsPane open={showRegisterForm}>
              <h3 className="text-center">Tere tulemast!</h3>
              <p className="text-center">
                Konto registreerides tagatakse sinu täielik privaatsus ja
                anonüümsus!
              </p>

              <MDBInput
                wrapperClass="mb-4"
                label="Nimi"
                id="form3-name"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Parool"
                id="form4-password"
                type="password"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Korda parooli"
                id="form5-password"
                type="password"
              />

              <MDBBtn className="login-register-btn">Registreeri</MDBBtn>
              <p className="login-register-link">
                Konto olemas?{" "}
                <a href="#!" onClick={() => handleTabClick("login")}>
                  Logi sisse
                </a>
              </p>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </div>
  );
}

export default LoginRegister;
