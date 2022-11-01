import React, { useEffect, useState } from "react";
import { VStack, Grid, GridItem } from "@chakra-ui/react";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../interfaces/ITodo";
import { TodoService } from "../services";

const todoService = new TodoService();
export const TodoList = () => {
  const [items, setItems] = useState<Array<ITodo>>([]);

  useEffect(() => {
    todoService
      .getAllTodos()
      .then((data) => {
        setItems(data);
      })
      .catch(console.error);
  }, []);
  return (
    <Grid
      w="full"
      p={["4", "20"]}
      templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      gridRowGap="12"
      justifyItems="center"
    >
      {items.map((item) => (
        <GridItem>
          <TodoItem
            id={item._id}
            key={item._id}
            text={item.text}
            done={item.done}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
