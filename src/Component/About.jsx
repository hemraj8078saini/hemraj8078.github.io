import React from "react";
import { FaUser } from "react-icons/fa";
import "./about.css";
// import profile_img from "../images/profile_img.png";
// import LightSpeed from "react-reveal/LightSpeed";

import { Box, Flex,Text } from "@chakra-ui/react";

function About() {
  return (
    <Box id="about" width="80%" margin="auto"  marginTop={["250px", "150px", "150px"]}>
      <Flex
        flexDirection={["row", "row", "row"]}
        justifyContent={["center", "center", "flex-start"]}
        alignItems={["center", "center", "center"]}
        border="0px solid red"
      >
        <Box
          width={["100%", "100%", "50%"]}
          border="0px solid green"
          marginLeft={["50px", "50px", "158px", "75px"]}
        >
          <Text
            color="#00b9e8"
            textAlign={["right", "right", "right"]}
            fontSize={["30px", "30px", "30px", "40px"]}
          >
            About Me
          </Text>
        </Box>
        <Box
          width={["90%", "100%", "50%"]}
          border="0px solid grey"
          padding="8px"
          marginLeft={["0", "0", "0"]}
        >
          <FaUser class="bounce" color="#00b9e8" fontSize="40px" />
        </Box>
      </Flex>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        justifyContent={["center", "center", "space-evenly"]}
        alignItems={["center", "center", "center"]}
      >
       

        <Box
          width={["100%", "100%", "60%"]}
          border="0px solid orange"
          padding="18px"
        >
         
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
