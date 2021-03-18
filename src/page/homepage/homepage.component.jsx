import React from "react";
import { HomePageContainer } from "./home-page.styles";
import Directory from "./../../component/directory/directory.component";
const HomePage = () => {
  return (
    <HomePageContainer>
      <div className="directory-menu">
        <Directory />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
