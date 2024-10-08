import React from "react";
import { Image, Box, Heading, Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";


const GithubGraph = () => {
  return (
    <Box mt={["80px", "50px", "100px"]}>
      <Heading
        mr={["10%", "0%", "5%"]}
        fontSize={["2xl", "3xl", "4xl"]}
        fontWeight="400"
        color={"#00b9e8"}
      >
        <Text ml={["", "", "10px"]} color={"#00b9e8"}>
          My Github Stats
        </Text>
        <Text
          mt={["-34px", "-42px", "-49px"]}
          marginLeft={["325px", "370px", "550px", "785px"]}
          fontSize={["3xl", "4xl", "5xl"]}
        >
        </Text>
      </Heading>

      <Box>
        <Box
          display={["inline", "inline", "flex"]}
          width={"79%"}
          margin={"auto"}
        >
          <Image
            ml={["28px", "20px", "0px"]}
            width={["85%", "95%", "50%"]}
            mt={["-30px", "30px", "30px"]}
            height={"300px"}
            src="https://github-readme-stats.vercel.app/api?username=hemraj8078saini&show_icons=true&locale=en&theme=algolia"
          />

          <Image
            ml={["28px", "20px", "5px"]}
            width={["85%", "95%", "50%"]}
            mt={["-130px", "8px", "30px"]}
            height={"300px"}
            src="https://github-readme-streak-stats.herokuapp.com/?user=hemraj8078saini&theme=algolia"
          />
        </Box>
       

        <Box
          border={"2px solid white"}
          borderRadius={"10px"}
          backgroundColor={"#282a36"}
          padding={[6, 8, 10]}
          color={"#1877f2"}
          margin={"auto"}
          textAlign={"left"}
          mt={["-30px", "-10px", "30px"]}
          fontSize={["12px", "20px", "20px"]}
          ml={["28px", "20px", "160px"]}
          width={["85%", "95%", "78%"]}
        >
          <GitHubCalendar
            username="hemraj8078saini"
            blockSize={20}
            blockMargin={6}
            color={"#1877f2"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GithubGraph;
