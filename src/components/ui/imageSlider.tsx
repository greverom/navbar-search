
import useImageSlider from "../../hooks/useImageSlider";
import { NextButton, PrevButton, Slide, SliderContainer, SlideWrapper } from "../../styles/imageSlider.style";


const images = [
  "https://picsum.photos/1400/500",
];

const ImageSlider = () => {
  const { currentIndex, goToPrevious, goToNext } = useImageSlider(images, 20000);

  return (
    <SliderContainer>
      <SlideWrapper index={currentIndex}>
        {images.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SlideWrapper>
      <PrevButton onClick={goToPrevious}>❮</PrevButton>
      <NextButton onClick={goToNext}>❯</NextButton>
    </SliderContainer>
  );
};

export default ImageSlider;