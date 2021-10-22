import React from "react";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
function Header() {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      ></Circle>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Header;
