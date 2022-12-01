import { Button, ButtonGroup, Heading } from '@chakra-ui/react'

type MainTitleType = {
    text: string
}

function MainTitle({ text }: MainTitleType) {
    return (
        <Heading
            fontFamily="Bodoni MT"
            color='#e41541'
            fontSize="9rem"
            fontWeight="light"
        >
            {text}
        </Heading>
    )
}

export default MainTitle