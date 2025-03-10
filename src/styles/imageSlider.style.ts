import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: relative;
`;

export const SlideWrapper = styled.div<{ index: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ index }) => `-${index * 100}%`});
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 700px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
     mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0));
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0));
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 33%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0);
  color: orange;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 2;
  font-size: 30px;

  &:hover {
    background: rgba(0, 0, 0, 0.37);
  }
`;

export const PrevButton = styled(Button)`
  left: 10px;
`;

export const NextButton = styled(Button)`
  right: 10px;
`;