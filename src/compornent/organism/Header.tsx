import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProvider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import theme from "../page/theme/theme";

export const Header: FC = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <>
        <Box
          display={{ base: "flex", lg: "block" }}
          as="nav"
          bg={"#2d2c2c"}
          borderRadius={"0 0 20px 20px"}
          color="white"
          fontWeight={600}
          p={{ base: "3", lg: "5" }}
          verticalAlign={"center"}
          justifyContent={{ base: "space-between", lg: "none" }}
          boxShadow={"-1px 1px 4px 0 #353535"}
        >
          <Heading
            marginLeft={{ base: "5" }}
            as="h1"
            fontSize={{ base: "md", lg: "3xl" }}
            paddingTop={"4px"}
            lineHeight={{ base: "center", lg: "none" }}
            fontFamily={"helvetica"}
            _active={{ opacity: "0.5" }}
          >
            <Link to="/">
              KENTA{" "}
              <Box
                as="span"
                bg="white"
                color="#2d2c2c"
                fontWeight={300}
                borderRadius={"2px"}
                p={"2px 4px"}
              >
                HISAGI
              </Box>{" "}
              - Profile Site -
            </Link>
          </Heading>
          <HStack
            display={{ base: "none", lg: "flex" }}
            alignItems={"center"}
            justifyContent={"space-around"}
            maxWidth={"800px"}
            margin={"0 auto"}
            marginTop={"20px"}
            fontFamily={"helvetica"}
          >
            <Button
              bg={"#614cff"}
              width={"120px"}
              fontFamily={"helvetica"}
              onClick={() => navigate(`/about_me`)}
              _hover={{ color: "#614cff", bg: "white" }}
              _active={{ opacity: "0.5" }}
            >
              About
            </Button>

            <Button
              bg={"#3fb769"}
              width={"120px"}
              fontFamily={"helvetica"}
              onClick={() => navigate(`/resume`)}
              _hover={{ color: "#3fb769", bg: "white" }}
              _active={{ opacity: "0.5" }}
            >
              Resume
            </Button>

            <Button
              bg={"#bc4bbb"}
              width={"120px"}
              onClick={() => navigate(`/self_promotion`)}
              _hover={{ color: "#bc4bbb", bg: "white" }}
              _active={{ opacity: "0.5" }}
            >
              Promotion
            </Button>

            <Button
              bg={"#b0b14a"}
              width={"120px"}
              onClick={() => navigate(`/contact`)}
              _hover={{ color: "#b0b14a", bg: "white" }}
              _active={{ opacity: "0.5" }}
            >
              Contact
            </Button>
          </HStack>
          <IconButton
            aria-label="メニューボタン"
            icon={<HamburgerIcon />}
            display={{ base: "block", lg: "none" }}
            marginRight={"20px"}
            size={"sm"}
            variant="unstyled"
            onClick={onOpen}
          />
        </Box>
        <Drawer placement="top" size={"md"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent borderRadius={"0 0 10px 10px"}>
              <DrawerBody
                display={{ base: "flex", lg: "none" }}
                flexDirection={"column"}
                padding={"10px 40px 20px 20px"}
                justifyContent={"space-between"}
                maxWidth={"400px"}
                textAlign={"left"}
                color={"white"}
              >
                <Button
                  display={"flex"}
                  textAlign={"left"}
                  justifyContent={"space-between"}
                  bg={"#614cff"}
                  onClick={() => navigate(`/about_me`)}
                  marginTop={"10px"}
                  _hover={{
                    bg: "#eeeeee",
                    color: "#614cff",
                    boxShadow: "-5px 5px 2px 0 #000",
                  }}
                  _active={{ opacity: "0.2" }}
                >
                  <Box>About</Box>
                  <Box fontFamily={"serif"}>　- 自己紹介 -</Box>
                </Button>

                <Button
                  display={"flex"}
                  textAlign={"left"}
                  justifyContent={"space-between"}
                  bg={"#3fb769"}
                  onClick={() => navigate(`/resume`)}
                  marginTop={"20px"}
                  _hover={{
                    bg: "#eeeeee",

                    color: "#3fb769",
                    boxShadow: "-5px 5px 2px 0 #000",
                  }}
                  _active={{ opacity: "0.2" }}
                >
                  <Box>Resume</Box>
                  <Box fontFamily={"serif"}>　- 経歴 -</Box>
                </Button>

                <Button
                  display={"flex"}
                  textAlign={"left"}
                  justifyContent={"space-between"}
                  bg={"#bc4bbb"}
                  onClick={() => navigate(`/self_promotion`)}
                  marginTop={"20px"}
                  _hover={{
                    bg: "#eeeeee",
                    color: "#bc4bbb",
                    boxShadow: "-5px 5px 2px 0 #000",
                  }}
                  _active={{ opacity: "0.2" }}
                >
                  <Box>Promotion</Box>
                  <Box fontFamily={"serif"}>　- 自己PR -</Box>
                </Button>

                <Button
                  display={"flex"}
                  textAlign={"left"}
                  justifyContent={"space-between"}
                  bg={"#b0b14a"}
                  onClick={() => navigate(`/contact`)}
                  marginTop={"20px"}
                  _hover={{
                    bg: "#eeeeee",
                    color: "#b0b14a",
                    boxShadow: "-5px 5px 2px 0 #000",
                  }}
                  _active={{ opacity: "0.2" }}
                >
                  <Box>Contact</Box>
                  <Box fontFamily={"serif"}>　- 連絡先 -</Box>
                </Button>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    </ChakraProvider>
  );
};
