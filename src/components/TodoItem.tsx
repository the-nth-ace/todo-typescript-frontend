import { VStack, Text } from "@chakra-ui/react";
import React from "react";
import { TodoService } from "../services";

export interface ITodoItemComponent {
  id: string;
  text: string;
  key: string;
  done: boolean;
}

const todoService = new TodoService();

export const TodoItem = (props: ITodoItemComponent) => {
  function markAsDone() {
    todoService
      .markTodoAsDone(props.id)
      .then(() => {
        window.location.reload();
      })
      .catch(console.error);
  }

  return (
    <VStack
      w="250px"
      border="1px solid black"
      borderRadius={10}
      p={4}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Text
        color={props.done ? "gray" : "black"}
        onClick={() => {
          markAsDone();
        }}
      >
        {props.text}
      </Text>
    </VStack>
  );
};
