
import About from "../Navbar/About";
// import Services from "../Navbar/Services";

import Text from "../Navbar/Text";
import Text2 from "../Navbar/Text2";
import Text3 from "../Navbar/Text3";
import Text4 from "../Navbar/Text4";
// import Text5 from "../Navbar/Text5";
import Banner from "./Banner";
import Services from "../Navbar/Services";
import MoreServices from "../Navbar/MoreServices";
import Products from "../Navbar/Products";
import MoreProducts from "../Navbar/MoreProducts";
import Team from "../Navbar/Team";
import ChooseUsCards from "../Navbar/ChooseUsCards";


const Home = () => {

  return (
    <div>
      {/* <h3>Welcome to the home page</h3> */}
      <Banner></Banner>
      <About></About>
      <Text></Text>
      

      <Services></Services>
      <MoreServices></MoreServices>
      <Text2></Text2>
      <Products></Products>
      <MoreProducts></MoreProducts>
      <Text3></Text3>
      <Team></Team>
      <Text4></Text4>
      <ChooseUsCards></ChooseUsCards>
      {/* <Text5></Text5> */}
    </div>
  );
};

export default Home;
