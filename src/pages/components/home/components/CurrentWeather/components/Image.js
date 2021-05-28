import styled from "styled-components";
import responsive from "../../../../../../responsive/responsive";

const Image = styled.img`
  height: 1.5rem;
  margin: 0.5rem;
  @media only screen and ${responsive.xs}{
    height: 0.5rem;
  };
  @media only screen and ${responsive.sm}{
    height: 0.8rem;
  };

  @media only screen and  ${responsive.md}{
    height: 1rem;
  };

  @media only screen and  ${responsive.lg}{
    height: 1.2rem;
  };

  @media only screen and  ${responsive.xl}{
    height: 1.5rem;
  };
`;

export default Image;