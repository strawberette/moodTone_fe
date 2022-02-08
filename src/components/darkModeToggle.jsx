import React from "react";
import { Button, Flex, useColorMode } from "@chakra-ui/react";
//comment
const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex
        align="start"
        justify="space-around"
        height="50px"
        width="100vw"
        direction="column"
        padding="10px"
        boxSizing="border-box"
      >
        <Button width="auto" onClick={() => toggleColorMode()}>
          {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </Flex>
    </div>
  );
};

export default Toggle;
