import { Box, Flex } from "@chakra-ui/react";
import Title from "../components/atoms/title";
import Headers from "../components/organisms/header";
import Forms from "../components/organisms/form";

function Contact() {
    return (
        <Box minHeight="100vh" minWidth="100vw" bgColor="blackAlpha.900">
            <Headers active="contact" pt="2" />
            <Flex height="80vh" width="100vw" alignItems="center" flexDirection="column" >
                <Box width="96vw" height="2px" backgroundColor='#e41541' mt="10px">
                </Box>
                <Title text="CONTACT" />
                <Box width="96vw" height="2px" backgroundColor='#e41541'>
                </Box>
                <Flex height="100vh" w="100vw" alignItems="center" justifyContent="center">
                    <Flex direction="column" w={{ base: '70vw', md: '50vw', lg: '50vw' }}>
                        <Forms margin="4" />
                    </Flex>
                </Flex>

            </Flex>
        </Box >
    )
}

export default Contact