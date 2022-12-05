import { Button, layout } from '@chakra-ui/react'

type ButtonType = {
    label: string
    width: string
}

function Buttons({ label, width }: ButtonType) {
    return (
        <Button
            fontFamily="Bodoni MT"
            fontWeight="light"
            fontSize={{ base: '15px', md: '20px', lg: '25px' }}
            minW="60px"
            borderRadius={0}
            color="black"
            backgroundColor="white"
            width={width}
            _hover={{
                backgroundColor: "#111111",
                color: "white",
                borderWidth: "3px"
            }}>
            {label}
        </Button >
    )
}

export default Buttons