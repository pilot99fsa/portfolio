import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import promotion1 from "../image/promotion1.png";

export const SelfPromotion: FC = () => {
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
            Promotion
            <Box as={"span"} fontFamily={"serif"}>
              　- 自己PR -
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
              src={promotion1}
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
            <Box display={"block"}>
              <Text textAlign={"left"} marginBottom={"10px"}>
                【職務経歴概要】
              </Text>
              <Text textAlign={"left"}>
                私は、大学卒業後は製造業の会社において5年近く、現場で製品を製造する業務を担当しました。
                業務に携わる中で主に、可能な限り無駄を省いて短い時間で多くの製品を生産することで
                利益を生み出す事に集中して会社に貢献してきました。この製造業での経験や培ってきた考え方は、多くの業界および職種においても活かせるものであると考えています。
              </Text>
              <Text textAlign={"left"} marginBottom={"10px"} marginTop={"20px"}>
                【ITスキルについて】
              </Text>
              <Text textAlign={"left"}>
                私は、以前より自分の今後の事を考えて転職を考える様になり、その中で自分の適性などを模索した結果、IT業界のWEB系の仕事に就くことを志す様になりました。
                <br />
                しかし、年齢が20代後半であること、さらに未経験の業界および職種ということで実務に関するスキルがないため、WEBデザインのスクールに半年以上通い
                IllustratorとPhotoshopの使い方とデザインの手法、さらにHTMLとCSSとJavaScript、JQueryによるWEBサイトの作成方法について学びました。
                <br />
                しかし自分自身では、学校に通ったからすぐにプロになれるとは考えておらず、情報収集する中で実務に就くにはまだまだ知識や技術が足りないと実感し、スクールで教わった以外のスキルや最新のトレンドについても積極的にも自身で勉強し、実際に当サイトをモダンなJavaScriptフレームワークとされるReactで構築しました。もちろんこれだけで一人前とは言えませんが、今後もIT系の会社に就職しても積極的に自分のスキルを高めていくつもりです。
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
