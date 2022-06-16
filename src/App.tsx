import styled from "styled-components";
import { motion } from "framer-motion";
import DivideSlider from "./components/DivideSlider";
import Variants from "./components/Variants";
import Final from "./components/Final";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  // 자동으로 돌아가는 코드

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setVisible(prev => (prev === 10 ? 1 : prev + 1));
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [visible]);

  return (
    <Wrapper>
      {/* <DivideSlider /> */}
      {/* <Variants /> */}
      <Final />
    </Wrapper>
  );
}

export default App;
