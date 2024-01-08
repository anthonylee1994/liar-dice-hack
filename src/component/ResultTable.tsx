import React from "react";
import {Box, Flex, Table, TableContainer, Tag, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {ResultProbability} from "../util/GameUtil/type.ts";
import {Dice} from "./Dice.tsx";

interface Props {
    stats: ResultProbability[];
}

export const ResultTable = React.memo<Props>(({stats}) => {
    return (
        <TableContainer bgColor="white">
            <Table variant="striped" size="sm">
                <Thead>
                    <Tr>
                        <Th textAlign="left">叫法</Th>
                        <Th textAlign="right">
                            <Flex justifyContent="flex-end" alignItems="center">
                                叫贏概率&nbsp;<Tag size="sm">唔齋</Tag>
                            </Flex>
                        </Th>
                        <Th textAlign="right">
                            <Flex justifyContent="flex-end" alignItems="center">
                                叫贏概率&nbsp;
                                <Tag colorScheme="orange" size="sm">
                                    齋
                                </Tag>
                            </Flex>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {stats.map((stat, index) => (
                        <Tr key={index}>
                            <Td>
                                <Flex w="full" justifyContent="flex-start" alignItems="center" textAlign="right">
                                    <Box w={38}>{stat.totalOfSame}&nbsp;個</Box>
                                    <Dice height={8} ml={2} value={stat.diceType} />
                                    &nbsp;
                                </Flex>
                            </Td>
                            <Td textAlign="right">
                                <Tag size="sm" colorScheme={stat.nonZhaiProbability > 0.5 ? "green" : "red"}>
                                    {(stat.nonZhaiProbability * 100).toFixed(2)}%
                                </Tag>
                            </Td>

                            <Td textAlign="right">
                                <Tag size="sm" colorScheme={stat.zhaiProbability > 0.5 ? "green" : "red"}>
                                    {(stat.zhaiProbability * 100).toFixed(2)}%
                                </Tag>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
});
