import { SimpleGrid } from "@chakra-ui/react";
import { TaskComponent } from "../component/TaskComponent";
import { FAKE_DATA } from "../data/FAKE_DATA";

export const Dashboard = () => {
  const tasks = FAKE_DATA;
  return (
    <SimpleGrid minChildWidth="300px" spacing={10}>
      {tasks && tasks.map((task) => <TaskComponent task={task} />)}
    </SimpleGrid>
  );
};
