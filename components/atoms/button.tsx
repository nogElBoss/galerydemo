import { Button, layout } from '@chakra-ui/react'

type ButtonType = {
    label: string
    width: string
}

function Buttons({ label, width }: ButtonType) {
    return (
        <Button
            minW="60px"
            borderRadius={0}
            color="black"
            backgroundColor="white"
            width={width}
            _hover={{
                backgroundColor: "black",
                color: "white",
                borderWidth: "3px"
            }}>
            {label}
        </Button >
    )
}

export default Buttons