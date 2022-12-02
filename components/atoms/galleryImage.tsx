import { Image } from "@chakra-ui/react";

type GalleryImageType = {
    src: string
}

function GalleryImage({ src }: GalleryImageType) {
    return (
        <div style={{
            marginBottom: "1.5rem",
            display: "inline - block",
            width: "100%",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
        }}>
            <Image
                src={src}
                filter="grayscale(100%)"
                transition="all .25s ease-in-out"
                _hover={{
                    filter: "grayscale(0)",
                }}
            />
        </div >
    )
}

export default GalleryImage