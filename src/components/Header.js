import React from "react";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
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
          <Text color={isDark ? "gray.2000" : "gray.500"}>
            {"GDE - React developer, Artist, Frontend Designer "}
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Header;
