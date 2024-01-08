import React from "react";
import {Flex, Table, TableContainer, Tag, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {DiceCallWithProbability} from "../util/GameUtil/type.ts";

interface Props {
    stats: DiceCallWithProbability[];
}

export const ResultTable = React.memo<Props>(({stats}) => {
    return (
        <TableContainer bgColor="white">
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th textAlign="right">叫法</Th>
                        <Th textAlign="right">叫概率</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {stats.map((stat, index) => {
                        return (
                            <Tr key={index}>
                                <Td>
                                    <Flex w="full" justifyContent="flex-end" alignItems="center">
                                        {stat.totalOfSame} 個 {stat.diceType}&nbsp;
                                        <Tag colorScheme={stat.pure ? "red" : "gray"}>{stat.pure ? "齋" : "純"}</Tag>
                                    </Flex>
                                </Td>
                                <Td textAlign="right">
                                    <Tag colorScheme={stat.probability > 0.5 ? "green" : "red"}>{(stat.probability * 100).toFixed(2)}%</Tag>
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
});
