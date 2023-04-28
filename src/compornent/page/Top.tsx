import { Box, Heading, Image, Text, Button, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";

import hk4 from "../image/hk4.png";

export const Top: FC = () => {
  const navigate = useNavigate();

  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    delay: 1200,
    onRest: () => setFlip(!flip),
  });
  return (
    <>
      <animated.div style={props}>
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height={"100%"}
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
            <Heading as={"h1"}>TOPページです！</Heading>
            <Box
              m={{ base: "none", lg: "20px" }}
              display={{ base: "inline-block", lg: "flex" }}
            >
              <Box display={"block"} width={{ base: "none", lg: "50%" }}>
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
              <Text
                width={{ base: "none", lg: "50%" }}
                lineHeight={"1.8em"}
                fontSize={{ base: "16px", lg: "18px" }}
                letterSpacing={"1px"}
                textAlign={"left"}
                bg={"white"}
                borderRadius={"5px"}
                p={{ base: "10px", lg: "40px" }}
                m={"5px"}
                boxShadow={"-1px 1px 4px 0 #353535"}
              >
                &emsp;楸
                健太のプロフィールサイトをご覧頂きありがとうございます！
                <br />
                &emsp;当サイトはReactとChakra UIを使用して作成しました!
                <br />
                &emsp;勉強中の身ではありますが、見やすさを意識して作りましたので、最後までご覧になって頂ければ幸いです。
              </Text>
            </Box>
          </Box>
          <VStack
            alignItems={"left"}
            width={"80%"}
            height={"100%"}
            maxWidth={"400px"}
            margin={"0 auto"}
            marginTop={"40px"}
            fontFamily={"helvetica"}
            gridGap={4}
          >
            <Button
              display={"flex"}
              textAlign={"left"}
              justifyContent={"space-between"}
              bg={"#614cff"}
              color={"#eeeeee"}
              onClick={() => navigate(`/about_me`)}
              marginTop={"10px"}
              _hover={{
                bg: "#eeeeee",
                color: "#614cff",
                boxShadow: "-5px 5px 2px 0 #000",
              }}
              _active={{ opacity: "0.2" }}
            >
              <Box>・About</Box>
              <Box fontFamily={"serif"}>　- 自己紹介 -</Box>
            </Button>

            <Button
              display={"flex"}
              textAlign={"left"}
              justifyContent={"space-between"}
              bg={"#3fb769"}
              color={"#eeeeee"}
              onClick={() => navigate(`/resume`)}
              marginTop={"40px"}
              _hover={{
                bg: "#eeeeee",

                color: "#3fb769",
                boxShadow: "-5px 5px 2px 0 #000",
              }}
              _active={{ opacity: "0.2" }}
            >
              <Box>・Resume</Box>
              <Box fontFamily={"serif"}>　- 経歴 -</Box>
            </Button>

            <Button
              display={"flex"}
              textAlign={"left"}
              justifyContent={"space-between"}
              bg={"#bc4bbb"}
              color={"#eeeeee"}
              onClick={() => navigate(`/self_promotion`)}
              marginTop={"40px"}
              _hover={{
                bg: "#eeeeee",
                color: "#bc4bbb",
                boxShadow: "-5px 5px 2px 0 #000",
              }}
              _active={{ opacity: "0.2" }}
            >
              <Box>・Promotion</Box>
              <Box fontFamily={"serif"}>　- 自己PR -</Box>
            </Button>

            <Button
              display={"flex"}
              textAlign={"left"}
              justifyContent={"space-between"}
              bg={"#b0b14a"}
              color={"#eeeeee"}
              onClick={() => navigate(`/contact`)}
              marginTop={"40px"}
              _hover={{
                bg: "#eeeeee",
                color: "#b0b14a",
                boxShadow: "-5px 5px 2px 0 #000",
              }}
              _active={{ opacity: "0.2" }}
            >
              <Box>・Contact</Box>
              <Box fontFamily={"serif"}>　- 連絡先 -</Box>
            </Button>
          </VStack>
        </Box>
      </animated.div>
    </>
  );
};
