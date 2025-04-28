import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';   // Bootstrap stiil

import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import './LoginRegister.scss';  // Siin importige SCSS fail

function LoginRegister() {
  const [activeTab, setActiveTab] = useState('login');   // 'login' või 'register'
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  useEffect(() => {
    if (activeTab === 'login') {
      setShowLoginForm(true);
      setShowRegisterForm(false);
    } else if (activeTab === 'register') {
      setShowLoginForm(false);
      setShowRegisterForm(true);
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="login-register-background">
      <MDBContainer className="login-register-container">
        <MDBTabs pills justify className="login-register-tabs">
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleTabClick('login')} active={activeTab === 'login'}>
              Logi sisse
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleTabClick('register')} active={activeTab === 'register'}>
              Registreeri
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane open={showLoginForm}>
            <h3>Tere tulemast tagasi!</h3>
            <p>Logi sisse oma kontoga</p>
            <p>Sinu anonüümsus on tagatud</p>

            <MDBInput wrapperClass="mb-4" label="Kasutajanimi" id="form1-email" type="text" />
            <MDBInput wrapperClass="mb-4" label="Parool" id="form2-password" type="password" />

            <MDBBtn className="login-register-btn">Logi sisse</MDBBtn>
            <p className="login-register-link">
              Pole kontot?{' '}
              <a href="#!" onClick={() => handleTabClick('register')}>
                Registreeri
              </a>
            </p>
          </MDBTabsPane>

          <MDBTabsPane open={showRegisterForm}>
            <h3>Tere tulemast!</h3>
            <p>Konto registreerides tagatakse sinu täielik privaatsus ja anonüümsus!</p>

            <MDBInput wrapperClass="mb-4" label="Nimi" id="form3-name" type="text" />
            <MDBInput wrapperClass="mb-4" label="Parool" id="form4-password" type="password" />
            <MDBInput wrapperClass="mb-4" label="Korda parooli" id="form5-password" type="password" />

            <MDBBtn className="login-register-btn">Registreeri</MDBBtn>
            <p className="login-register-link">
              Konto olemas?{' '}
              <a href="#!" onClick={() => handleTabClick('login')}>
                Logi sisse
              </a>
            </p>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </div>
  );
}

export default LoginRegister;
