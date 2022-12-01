import { Text } from '@chakra-ui/react'

type TextType = {
    color: string
    text: string
}


function Texts({ color, text }: TextType) {
    return (
        <Text
            fontFamily="Bodoni MT"
            color={color}
            fontSize="20px"
            fontWeight="light"

        >
            {text}
        </Text>
    )


}

export default Texts