import { Box, Image, Text, Button } from "@chakra-ui/react";
import { MdSlideshow } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import cctns from "../images/cctns.png"
import food from "../images/food.png"
import ecom from "../images/ecom.png"
import crud from "../images/crud.png"


import React, { useState } from "react";

function Project() {
  const [viewmore, setViewmore] = useState(false);

  let initialdata = [
    {
      name: "CCTNS ",
      img: cctns,
      desc: "Introducing CCTNS Raj Police Portal's 'E-FIR Vehicle Theft Module': an online platform enabling civilians to report vehicle thefts seamlessly. This responsive UI is currently under development, designed to streamline reporting for enhanced public safety.",
      techstack:
        "HTML, CSS , JavaScript , React JS ",
      livelink: "https://rajasthanpolicecctns.netlify.app/",
      gitlink: "https://github.com/hemraj8078saini/Rajpolice_vehicle_theft_portal",
    },

    {
      name: "food website",
      img:food,
      desc: "food website, where user can see all foods ,foods devided by categary or add to cart and many other functionality.",
      techstack:
        "HTML , CSS , JavaScript , React JS ,  Bootstrap, MongoDB , NodeJS , Express JS , MongoDb",
      livelink: "https://food.vesrcel.app/",
      gitlink: "https://github.com/hemraj8078saini/Food_website_mern",
    },
    {
      name: "Ecommerce website",
      img: ecom,
      desc: "Ecommerce website , where users can see all products, search product by pricing and rating and filter all products.",
      techstack: "HTML, CSS, JavaScript, React",
      livelink: "https://filteringswebsites.netlify.app/",
      gitlink: "https://github.com/hemraj8078saini/Ecommerwebsite_Filtering",
    },

    {
      name: "CRUD OPERATION",
      img: crud,
      desc: "crud operation , It is a react crud operation website , where user can perform  create, read, update and delete operation in react.",
      techstack: "HTML, CSS, JavaScript , React, Json Server",
      livelink: "https://crudoperationsinreact.netlify.app/",
      gitlink: "https://github.com/hemraj8078saini/Crud_Operation_React",
    },
  ];

  let projectdata = [
   
  ];

  return (
    <>
      <Box
        id="projects"
        className="project"
        w="full"
        color="#ffffff"
        p="30px 0px"
        textAlign="center"
        marginTop={["0", "0", "0", "150px"]}
      >
        <Box w="85%" m="auto">
          <Box
            gap={"10px"}
            display={"flex"}
            mb="25px"
            textAlign="center"
            fontWeight="400"
          >
            <Text
              ml={["110px", "235px", "240px","460px"]}
              color={"#00b9e8"}
              fontSize={["3xl", "4xl", "5xl"]}
            >
              Projects
            </Text>
            <Text mt={["8px", "10px", "15px"]} fontSize={["3xl", "4xl", "5xl"]}>
              <MdSlideshow className="bounce" color={"#00b9e8"} />
            </Text>
          </Box>
          {viewmore ? (
            <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">
              {projectdata &&
                projectdata.map((project) => {
                  return (
                    <Box className="proj" bg={"#0c1014"}>
                      <Box
                        display={["inline", "inline", "flex"]}
                        justifyContent="space-between"
                        border={"3px solid #1877f2"}
                      >
                        <Image
                          w={["100%", "97%", "60%"]}
                          m="auto"
                          src={project.img}
                          alt="project-thumbnail"
                        />
                        <Box w={["100%", "97%", "39%"]} m="auto">
                          <Text fontSize={["2xl", "3xl", "4xl"]}>
                            {project.name}
                          </Text>
                          
                          <Text
                            textAlign={"center"}
                            w={["100%", "90%", "70%"]}
                            m="auto"
                            fontSize={["sm", "md", "md"]}
                          >
                            {project.desc}
                          </Text>
                          <Text
                            w="85%"
                            m="auto"
                            mt="10px"
                            fontSize={["md", "mlgd", "lg"]}
                          >
                            Techstacks :-{project.techstack}
                          </Text>
                          <Box
                            display="flex"
                            w={["100%", "80%", "100%"]}
                            m="auto"
                            justifyContent="space-around"
                          >
                            <Button
                              as="a"
                              target="_blank"
                              href={project.livelink}
                              _hover={{ color: "blue" }}
                              mt="10px"
                              w={"100px"}
                              p={["5px 5px", "10px 10px", "10px 10px"]}
                              fontSize={["md", "lg", "lg"]}
                              color="black"
                              border="1px solid white"
                              variant="solid"
                              leftIcon={<BiLinkExternal />}
                            >
                              Live
                            </Button>
                            <Button
                              as="a"
                              target="_blank"
                              href={project.gitlink}
                              _hover={{ color: "blue" }}
                              mt="10px"
                              w={"100px"}
                              p={["5px 5px", "10px 10px", "10px 10px"]}
                              fontSize={["md", "lg", "lg"]}
                              color="black"
                              border="1px solid white"
                              variant="solid"
                              leftIcon={<BsGithub />}
                            >
                              Github
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
          ) : (
            <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">
              {initialdata &&
                initialdata.map((project) => {
                  return (
                    <Box className="proj" bg={"#0c1014"}>
                      <Box
                        display={["inline", "inline", "flex"]}
                        justifyContent="space-between"
                        border={"3px solid #1877f2"}
                      >
                        <Image
                          w={["100%", "97%", "60%"]}
                          m="auto"
                          src={project.img}
                          alt="project-thumbnail"
                        />
                        <Box w={["100%", "97%", "39%"]} m="auto">
                          <Text fontSize={["2xl", "3xl", "4xl"]}>
                            {project.name}
                          </Text>
                          <Text fontSize={["xl", "2xl", "3xl"]}>
                            ( {project.type} )
                          </Text>
                          <Text
                            textAlign={"center"}
                            w={["100%", "90%", "70%"]}
                            m="auto"
                            fontSize={["sm", "md", "md"]}
                          >
                            {project.desc}
                          </Text>
                          <Text
                            w="85%"
                            m="auto"
                            mt="10px"
                            fontSize={["md", "mlgd", "lg"]}
                          >
                            Techstacks :-{project.techstack}
                          </Text>
                          <Box
                            display="flex"
                            w={["100%", "80%", "100%"]}
                            m="auto"
                            justifyContent="space-around"
                          >
                            <Button
                              as="a"
                              target="_blank"
                              href={project.livelink}
                              _hover={{ color: "blue" }}
                              mt="10px"
                              w={"100px"}
                              p={["5px 5px", "10px 10px", "10px 10px"]}
                              fontSize={["md", "lg", "lg"]}
                              color="black"
                              border="1px solid white"
                              variant="solid"
                              leftIcon={<BiLinkExternal />}
                            >
                              Live
                            </Button>
                            <Button
                              as="a"
                              target="_blank"
                              href={project.gitlink}
                              _hover={{ color: "blue" }}
                              mt="10px"
                              w={"100px"}
                              p={["5px 5px", "10px 10px", "10px 10px"]}
                              fontSize={["md", "lg", "lg"]}
                              color="black"
                              border="1px solid white"
                              variant="solid"
                              leftIcon={<BsGithub />}
                            >
                              Github
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
          )}
        </Box>
        
      </Box>
    </>
  );
}
export default Project;
