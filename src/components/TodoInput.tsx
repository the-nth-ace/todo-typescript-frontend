import {
  VStack,
  Text,
  Input,
  Button,
  Spacer,
  Textarea,
  HStack,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { TodoService } from "../services/";
import { Formik, Field, Form } from "formik";

export interface ITodoInput {
  toggleShowAdd: Function;
}

const todoService = new TodoService();

export const TodoInput = (props: ITodoInput) => {
  const [inputText, setInputText] = useState("");

  function handleChange(event: any) {
    setInputText(event.target.value);
  }

  return (
    <Stack
      position="absolute"
      w="full"
      h="full"
      placeItems="center"
      backgroundColor="rgba(255,255,255,0.9)"
      marginTop={14}
    >
      <VStack
        w={["90%", "50%"]}
        borderRadius="10px"
        px="4"
        pt="2"
        pb="6"
        border="1px solid black"
        spacing={4}
      >
        <HStack w="full" justifyContent="right">
          <IconButton
            aria-label="close"
            bg="none"
            border="1px solid black"
            size="xs"
            onClick={() => {
              props.toggleShowAdd();
            }}
            px={8}
            icon={<AiOutlineClose />}
          ></IconButton>
        </HStack>
        <Formik
          initialValues={{ text: "" }}
          onSubmit={(values, actions) => {
            todoService
              .createTodo(values)
              .then(() => {
                actions.setSubmitting(false);
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {(props) => (
            <Form
              style={{
                width: "100%",
              }}
            >
              <VStack w="full" px="2">
                <Field name="text">
                  {({ field, form }: any) => (
                    <Textarea
                      {...field}
                      outline="1px solid black"
                      placeholder="Go to the mall"
                    />
                  )}
                </Field>

                <Spacer />
                <Button
                  bg="none"
                  border="1px solid black"
                  type="submit"
                  isLoading={props.isSubmitting}
                >
                  Add Todo
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </VStack>
    </Stack>
  );
};
