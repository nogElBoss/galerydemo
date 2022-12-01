import { Button, ButtonGroup, Heading } from '@chakra-ui/react'

type TitleType = {
    text: string
}

function Title({ text }: TitleType) {
    return (
        <Heading
            fontFamily="Bodoni MT"
            color='#e41541'
            fontSize="4rem"
            fontWeight="light"
        >
            {text}
        </Heading>
    )
}

export default Title