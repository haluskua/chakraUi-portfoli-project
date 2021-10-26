import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FaFacebook, FaFacebookF, FaGoogle } from "react-icons/fa";
import Icon from "@chakra-ui/icon";

function Social() {
  return (
    <HStack spacing="24">
      <Icon as={FaFacebookF} boxSize="30" />
      <Icon as={FaGoogle} boxSize="30" />
    </HStack>
  );
}

export default Social;
