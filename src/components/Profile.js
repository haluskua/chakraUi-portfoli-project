import Icon from "@chakra-ui/icon";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { DiAndroid, DiCodeigniter, DiWebplatform } from "react-icons/di";
import React from "react";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600");

  return (
    <Flex
      flexWrap="wrap-reverse"
      justifyContent="center"
      direction={isNotSmallerScreen ? "column" : "fow"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="flex-start" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" fontSize="3rem">
          2+
        </Heading>
        <Text fontSize="3x1" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box
        alignSelf="center"
        px="32"
        py="16"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Text fontWeight="bold" fontSize="2x1">
          Product Designer and Developer, Specialised in Web App development
        </Text>
        <Flex
          direction={isNotSmallerScreen ? "column" : "row"}
          mt={8}
          flex-wrap="wrap"
        >
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
            cursor="pointer"
            mx="3px"
          >
            <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            h="30vh"
            w="30vh"
            justify="flex-end"
            bg="blue.400"
            _hover={{ bg: "teal.400" }}
            cursor="pointer"
            mx="3px"
          >
            <Icon color="white" p="4" as={DiCodeigniter} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            h="30vh"
            w="30vh"
            justify="flex-end"
            bg="blue.400"
            _hover={{ bg: "teal.400" }}
            cursor="pointer"
            mx="3px"
          >
            <Icon color="white" p="4" as={DiWebplatform} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
