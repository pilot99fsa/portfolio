import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import contact from "../image/contact.png";

export const Contact: FC = () => {
  return (
    <Box
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      minHeight={"700px"}
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
        <Heading as={"h1"}>
          <Box>
            Contact
            <Box as={"span"} fontFamily={"serif"}>
              　- 連絡先 -
            </Box>
          </Box>
        </Heading>
        <Box
          m={{ base: "none", lg: "20px" }}
          display={{ base: "inline-block", lg: "flex" }}
        >
          <Box height={"100%"} width={{ base: "none", lg: "50%" }}>
            <Image
              width={{ base: "150px", lg: "80%" }}
              height={{ base: "150px", lg: "80%" }}
              borderRadius={"5px"}
              alt="promotion"
              m={"0 auto"}
              src={contact}
              marginTop={"5"}
              marginBottom={"5"}
              boxShadow={"-1px 1px 4px 0 #353535"}
            />
          </Box>
          <Box
            width={{ base: "none", lg: "50%" }}
            lineHeight={"1.8em"}
            fontSize={{ base: "16px", lg: "18px" }}
            letterSpacing={"1px"}
            bg={"white"}
            borderRadius={"5px"}
            p={"20px"}
            m={"5px"}
            boxShadow={"-1px 1px 4px 0 #353535"}
          >
            <Box
              display={"block"}
              width={"100%"}
              height={"100%"}
              margin={"0 auto"}
            >
              <Text textAlign={"left"} marginBottom={"10px"}>
                【Email】
              </Text>
              <Text textAlign={"left"} marginBottom={"10px"}>
                ddj1000fox@gmail.com
              </Text>
              <Text textAlign={"left"} marginBottom={"10px"}>
                【TEL】
              </Text>
              <Text textAlign={"left"} marginBottom={"10px"}>
                プライバシー保護のため
                <br />
                履歴書に記載の情報をご確認下さい。
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
