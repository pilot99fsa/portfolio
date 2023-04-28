import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import resume from "../image/resume.png";

export const Resume: FC = () => {
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
            Resume
            <Box as={"span"} fontFamily={"serif"}>
              　- 経歴 -
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
              width={{ base: "150px", lg: "80%" }}
              height={{ base: "150px", lg: "80%" }}
              borderRadius={"5px"}
              alt="Kenta Hisagi"
              m={"0 auto"}
              src={resume}
              marginTop={"5"}
              marginBottom={"5"}
              boxShadow={"-1px 1px 4px 0 #353535"}
            />
          </Box>
          <Box
            width={{ base: "none", lg: "50%" }}
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
            <Box display={"flex"}>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"35%"}
              >
                2010年 4月
              </Text>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"65%"}
              >
                京都府立東稜高等学校普通科 入学
              </Text>
            </Box>
            <Box display={"flex"}>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"35%"}
              >
                2013年 3月
              </Text>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"65%"}
              >
                京都府立東稜高等学校普通科 卒業
              </Text>
            </Box>
            <Box display={"flex"}>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"35%"}
              >
                2013年 4月
              </Text>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"65%"}
              >
                天理大学 体育学部
                <br />
                体育学科 入学
              </Text>
            </Box>
            <Box display={"flex"}>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"35%"}
              >
                2018年 3月
              </Text>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"65%"}
              >
                天理大学 体育学部
                <br />
                体育学科 卒業
              </Text>
            </Box>
            <Box display={"flex"}>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"35%"}
              >
                2018年 4月
              </Text>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"65%"}
              >
                河長樹脂工業株式会社 入社
              </Text>
            </Box>

            <Box display={"flex"}>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"35%"}
              >
                2021年 9月
              </Text>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"65%"}
              >
                デジタルハリウッドSTUDIO
                <br />
                京都校 WEBデザイナー専攻 入校
              </Text>
            </Box>
            <Box display={"flex"}>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"35%"}
              >
                2022年 6月
              </Text>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"65%"}
              >
                デジタルハリウッドSTUDIO <br />
                京都校 WEBデザイナー専攻 修了
              </Text>
            </Box>
            <Box display={"flex"}>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"35%"}
              >
                2023年 3月
              </Text>
              <Text
                textAlign={"left"}
                marginBottom={"10px"}
                fontFamily={"serif"}
                width={"65%"}
              >
                河長樹脂工業株式会社 退職
              </Text>
            </Box>
            {/* <br /> 2013年 4月 京都府立東稜高等学校 卒業
              <br />
              2013年 4月 天理大学 体育学部 体育学科 入学
              <br /> 2018年 3月 天理大学 体育学部 体育学科 卒業
              <br />
              2018年 4月 河長樹脂工業株式会社 入社 <br />
              2021年 9月
              <Box as={"span"} maxWidth={"200px"}>
                デジタルハリウッドSTUDIO 京都校 WEBデザイナー専攻 入校
              </Box>
              <br />
              2021年 6月 デジタルハリウッドSTUDIO 京都校 WEBデザイナー専攻 修了
              <br />
              2018年 3月 河長樹脂工業株式会社 退職 */}
            {/* </Text> */}
            <Text
              fontSize={{ base: "16px", lg: "20px" }}
              textAlign={{ base: "left", lg: "center" }}
              marginTop={"10px"}
            ></Text>
            <Text
              fontSize={{ base: "16px", lg: "20px" }}
              textAlign={{ base: "right", lg: "center" }}
            ></Text>
            <Text
              fontSize={{ base: "16px", lg: "20px" }}
              textAlign={{ base: "left", lg: "center" }}
              marginTop={"10px"}
            ></Text>
            <Text
              fontSize={{ base: "16px", lg: "20px" }}
              textAlign={{ base: "right", lg: "center" }}
            ></Text>
            <Text
              fontSize={{ base: "16px", lg: "20px" }}
              textAlign={{ base: "left", lg: "center" }}
              marginTop={"10px"}
            ></Text>
            <Text
              display={"block"}
              fontSize={{ base: "16px", lg: "20px" }}
              textAlign={"left"}
              margin={"0 auto"}
              maxWidth={"300px"}
              paddingLeft={{ base: "none", lg: "30px" }}
            ></Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
