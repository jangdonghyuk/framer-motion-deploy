import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: #e882db;
  border-radius: 10px;
  height: 250px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const BtnWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: 600;
  }
`;

function Final() {
  const [id, setId] = useState<null | string>(null);
  const [CircleId, setCircleId] = useState("2");
  const toggleCircle = useCallback(() => {
    if (CircleId === "2") {
      setCircleId("3");
    } else if (CircleId === "3") {
      setCircleId("2");
    }
  }, [CircleId]);

  return (
    <>
      <Grid>
        {["1", "2", "3", "4"].map(n => (
          <Box
            whileHover={{
              scaleX: 1.1,
              scaleY: 1.1,
              transition: { duration: 0.5 },
            }}
            onClick={() => setId(n)}
            key={n}
            layoutId={n}
          >
            {n === CircleId ? <Circle layoutId="circle" /> : null}
          </Box>
        ))}
      </Grid>
      <BtnWrapper>
        <button
          style={{ color: CircleId === "2" ? "#FEB419" : "#93CCFE" }}
          onClick={toggleCircle}
        >
          Switch
        </button>
      </BtnWrapper>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              animate={{ backgroundColor: "white" }}
              layoutId={id}
              style={{ width: 300, height: 300 }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Final;
