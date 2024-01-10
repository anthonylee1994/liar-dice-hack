import React from "react";
import {Box, Flex, Table, TableContainer, Tag, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {Dice} from "./Dice.tsx";
import {ResultProbability} from "../util/type.ts";

interface Props {
    stats: ResultProbability[];
}

export const ResultTable = React.memo<Props>(({stats}) => {
    const tagColor = (probability: number | null) => {
        if (probability === null) {
            return "purple";
        } else if (probability >= 0.68) {
            return "green";
        } else if (probability <= 0.34) {
            return "red";
        } else {
            return "yellow";
        }
    };

    const tagValue = (probability: number | null) => {
        if (probability === null) {
            return "冇得叫";
        } else {
            return `${(probability * 100).toFixed(2)}%`;
        }
    };

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
                                <Tag size="sm" colorScheme={tagColor(stat.nonPureProbability)}>
                                    {tagValue(stat.nonPureProbability)}
                                </Tag>
                            </Td>

                            <Td textAlign="right">
                                <Tag size="sm" colorScheme={tagColor(stat.pureProbability)}>
                                    {tagValue(stat.pureProbability)}
                                </Tag>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
});
