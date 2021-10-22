import React from "react";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == "dark";

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          OK-Folio
        </Heading>
        <Spacer></Spacer>

        <IconButton
          ml={2}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <Header />
        <Social />
        <Profile />
      </Flex>
    </VStack>
  );
}

export default App;
