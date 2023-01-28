import {
  Box,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

export const Create = () => {
  return (
    <Box maxW="480px">
      <Form>
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a description task name.</FormHelperText>
        </FormControl>
        <FormControl mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a description for the task"
            name="description"
          />
        </FormControl>
        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox colorScheme="purple" name="isPriority" size="lg" />
          <FormLabel ml="10px" mb="0">Make this a priority task</FormLabel>
        </FormControl>
        <Button type="submit">Create</Button>
      </Form>
    </Box>
  );
};
