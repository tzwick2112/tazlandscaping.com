import dynamic from "next/dynamic";

const ReactViewer = dynamic(() => import("react-viewer"), { ssr: false });

type GalleryProps = {
  imageSrc: string;
};
type GalleryImageModalProps = {
  gallery: GalleryProps[];
  viewerVisible: boolean;
  currentImage: number;
  closeImageViewer: () => void;
};

const GalleryImageModal = ({ gallery, viewerVisible, currentImage, closeImageViewer }: GalleryImageModalProps) => {
  return viewerVisible ? (
    <ReactViewer
      visible={true}
      onClose={closeImageViewer}
      images={gallery.map((item, index) => ({
        src: item.imageSrc,
        alt: `gallery-${index}`,
      }))}
      activeIndex={currentImage}
      rotatable={true}
      scalable={true}
      zoomable={true}
      noNavbar={true}
      changeable={false}
      noImgDetails
      drag={false}
      showTotal={false}
      className="lightbox-wrapper"
      zoomSpeed={0.5}
      minScale={0.6}
      maxScale={2}
      disableMouseZoom
      onMaskClick={closeImageViewer}
    />
  ) : null;
};
export default GalleryImageModal;
