import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../component/Navbar";

export const RootLayout = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" p={{base: "20px", lg: "30px"}} colSpan={{base: 6, lg: 2, xl: 1}} minHeight={{lg: "100hv"}}  bg="purple.400">
        <span>SIDE BAR</span>
      </GridItem>
      <GridItem  as="main" colSpan={{base: 6, lg: 4, xl: 5}} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};
