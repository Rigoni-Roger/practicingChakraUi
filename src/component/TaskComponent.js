import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";


export const TaskComponent = ({ task }) => {
  return (
    <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
      <CardHeader>
        <Flex>
          <Box w="50px" h="50px">
            AV
          </Box>
          <Box>
            <Heading as="h3" size="sm">
              {task.title}
            </Heading>
            <Text>by {task.author}</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody color="gray.500">
        <Text>{task.description}</Text>
      </CardBody>
      <Divider borderColor="gray.200" />
      <CardFooter>
        <HStack>
          <Button variant="ghost" leftIcon={<ViewIcon />}>
            Watch
          </Button>
          <Button variant="ghost" leftIcon={<EditIcon />}>
            Edit
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};
