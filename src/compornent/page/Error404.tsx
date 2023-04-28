import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Error404: FC = () => {
  return (
    <Box
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      minHeight={"100Vh"}
      bg={"white"}
      paddingBottom={"30px"}
    >
      <Box
        borderRadius={"4px"}
        bg={"#cfcece"}
        p={"5"}
        width={"80%"}
        m={"0 auto"}
        maxWidth={"1000px"}
        marginTop={"10"}
        boxShadow={"-1px 1px 4px 0 #353535"}
      >
        <Heading as={"h1"}>404エラー！</Heading>
        <Box
          m={{ base: "none", lg: "20px" }}
          display={{ base: "inline-block", lg: "flex" }}
          width={"100%"}
          p={{ base: "none", lg: "20px" }}
        >
          <Box
            width={{ base: "none", lg: "100%" }}
            lineHeight={"1.8em"}
            fontSize={{ base: "14px", lg: "18px" }}
            letterSpacing={"1px"}
            bg={"white"}
            borderRadius={"5px"}
            p={{ base: "7px", lg: "20px" }}
            m={"5px"}
            boxShadow={"-1px 1px 4px 0 #353535"}
            marginRight={{ base: "none", lg: "20px" }}
          >
            <Box display={"block"}>
              <Text textAlign={"center"} marginBottom={"10px"}>
                このページは存在しません！
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
