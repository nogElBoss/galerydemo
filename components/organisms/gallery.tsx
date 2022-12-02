import GalleryImage from "../atoms/galleryImage"

function Galleries() {
    return (
        <div style={{
            marginTop: "30px",
            columns: "3 200px",
            columnGap: "1.5rem",
            width: "90%",
            margin: "0 auto",
        }}>
            <GalleryImage src="/images/img0.jpg" />
            <GalleryImage src="/images/img8.jpg" />
            <GalleryImage src="/images/img1.jpg" />
            <GalleryImage src="/images/img7.jpg" />
            <GalleryImage src="/images/img2.jpg" />
            <GalleryImage src="/images/img6.jpg" />
            <GalleryImage src="/images/img3.jpg" />
            <GalleryImage src="/images/img5.jpg" />
            <GalleryImage src="/images/img4.jpg" />
        </div>
    )


}

export default Galleries