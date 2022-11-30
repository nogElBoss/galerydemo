import { Button, layout } from '@chakra-ui/react'

type ButtonType = {
    label: string
    width: string
}

function Buttona({ label, width }: ButtonType) {
    return (
        <Button borderRadius={0} colorScheme="red" variant="outline" width={width} _hover={{
            backgroundColor: "red.600",
            color: "black",
        }}>
            {label}
        </Button>
    )
}

export default Buttona