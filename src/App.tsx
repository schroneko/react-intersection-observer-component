import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";

const App: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Section ref={ref} inView={inView}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
      <p>This is a paragraph.</p>
    </Section>
  );
};

interface Props {
  inView: boolean;
}

const Section = styled.section<Props>`
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0.5)};
`;

export default App;
