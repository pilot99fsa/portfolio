import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import hk4 from "../image/hk4.png";

export const AboutMe: FC = () => {
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
            About
            <Box as={"span"} fontFamily={"serif"}>
              - 自己紹介 -
            </Box>
          </Box>
        </Heading>
        <Box
          m={{ base: "none", lg: "20px" }}
          display={{ base: "inline-block", lg: "flex" }}
          width={"100%"}
          p={{ base: "none", lg: "20px" }}
        >
          <Box height={"100%"} width={{ base: "none", lg: "50%" }}>
            <Image
              src={hk4}
              boxSize={{ base: "150px", lg: "250px" }}
              borderRadius={"50%"}
              alt="Kenta Hisagi"
              m={"0 auto"}
              marginTop={"5"}
              marginBottom={"5"}
              boxShadow={"-1px 1px 4px 0 #353535"}
            />
          </Box>
          <Box
            width={{ base: "100%", lg: "50%" }}
            lineHeight={"1.8em"}
            fontSize={{ base: "16px", lg: "18px" }}
            letterSpacing={"1px"}
            bg={"white"}
            borderRadius={"5px"}
            p={{ base: "10px", lg: "20px" }}
            boxShadow={"-1px 1px 4px 0 #353535"}
            marginRight={{ base: "none", lg: "20px" }}
          >
            <Text
              fontSize={{ base: "18px", lg: "20px" }}
              textAlign={"center"}
              marginBottom={"10px"}
            >
              ○名前
              <br />楸 健太 (ひさぎ けんた)
            </Text>
            <Text
              fontSize={{ base: "16px", lg: "20px" }}
              textAlign={"center"}
              marginTop={"10px"}
            >
              ○生年月日
            </Text>
            <Text fontSize={{ base: "16px", lg: "20px" }} textAlign={"center"}>
              1994年7月19日
            </Text>
            <Text
              fontSize={{ base: "16px", lg: "20px" }}
              textAlign={"center"}
              marginTop={"10px"}
            >
              ○出身
            </Text>
            <Text fontSize={{ base: "16px", lg: "20px" }} textAlign={"center"}>
              京都府 京都市
            </Text>
            <Text
              fontSize={{ base: "16px", lg: "20px" }}
              textAlign={"center"}
              marginTop={"10px"}
            >
              ○趣味・特技
            </Text>
            <Text
              display={"block"}
              fontSize={{ base: "16px", lg: "20px" }}
              textAlign={"left"}
              margin={"0 auto"}
              maxWidth={"260px"}
              paddingLeft={{ base: "none", lg: "30px" }}
            >
              ・ウエイトリフティング
              <br />
              ・ロードバイク
              <br />
              ・読書
              <br />
              ・一眼レフで風景撮影
              <br />
              ・DJ
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
