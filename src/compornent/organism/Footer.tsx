import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Footer: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <ChakraProvider>
        <Box
          position={"sticky"}
          top={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          h={20}
          bg={"#2d2c2c"}
          borderRadius={"20px 20px 0 0"}
        >
          <Button
            bg={"#990e2a"}
            color="white"
            width={"120px"}
            onClick={() => navigate(`/`)}
            _hover={{ color: "#990e2a", bg: "white" }}
            _active={{ opacity: "0.5" }}
          >
            TOP
          </Button>
        </Box>
      </ChakraProvider>
    </>
  );
};
