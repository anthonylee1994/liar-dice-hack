import React from "react";
import {Flex} from "@chakra-ui/react";

export const TopBar = React.memo(() => {
    return (
        <Flex bgColor="red.500" p={3} color="white" fontSize="xl" fontWeight="bold" justifyContent="center" boxShadow="md">
            大話骰破解器
        </Flex>
    );
});
