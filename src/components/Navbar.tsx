import React from "react";
import { HStack, Text, Heading, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

export const Navbar = (props: any) => {
  return (
    <HStack
      w="full"
      py={4}
      px={[10, 24]}
      justifyContent="space-between"
      boxShadow="1px 9px 5px 0px rgba(0,0,0,0.02);
    -webkit-box-shadow: 1px 9px 5px 0px rgba(0,0,0,0.02);
    -moz-box-shadow: 1px 9px 5px 0px rgba(0,0,0,0.02);"
    >
      <Heading fontSize="14px"> Todo.List </Heading>
      <Button
        leftIcon={<AiOutlinePlus />}
        colorScheme="teal"
        variant="solid"
        size={["sm", "md"]}
        onClick={() => {
          props.toggleShowAdd();
        }}
      >
        Add New
      </Button>
    </HStack>
  );
};
