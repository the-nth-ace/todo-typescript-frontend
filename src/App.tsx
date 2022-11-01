import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { Navbar, TodoInput, TodoItem, TodoList } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [showAdd, setShowAdd] = useState(false);

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <VStack w="full" spacing={8}>
      <Navbar toggleShowAdd={toggleShowAdd} />;
      {showAdd && <TodoInput toggleShowAdd={toggleShowAdd} />}
      <TodoList />
    </VStack>
  );
}

export default App;
