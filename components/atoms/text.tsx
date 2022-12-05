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
            fontSize={{ base: '10px', md: '24px', lg: '30px' }}
            fontWeight="light"

        >
            {text}
        </Text>
    )


}

export default Texts