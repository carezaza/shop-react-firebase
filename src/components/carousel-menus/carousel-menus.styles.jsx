import styled from "styled-components";
import Slider from 'react-slick';

export const CarouselContainer = styled(Slider)`
  width: 100%;

  & .slick-next {
    right: 3%;
    z-index: 1;
  }

  & .slick-prev {
    left: 3%;
    z-index: 1;
  }
`;
