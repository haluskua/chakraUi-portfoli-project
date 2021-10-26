import React from "react";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { getQueriesForElement } from "@testing-library/react";
function Header() {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack p="12">
      <Circle
        position="absolute"
        bg="orange.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      ></Circle>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Omphalus Kua
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            GDE - React developer, Artist, Frontend Designer
          </Text>
          <Button
            mt={8}
            color="gray.100"
            onClick={() => window.open("https://haluskua-folio21.netlify.app/")}
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            p="21px"
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300"
          src="https://avatars.githubusercontent.com/u/17259982?v=4"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
