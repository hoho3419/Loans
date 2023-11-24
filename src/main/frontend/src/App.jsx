import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import MainPage from "./components/MainPage";

function App() {
  return (
    <GlblStyleBox>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </GlblStyleBox>
  );
}

export default App;

const GlblStyleBox = styled.div`
  font-family: "여기어때 잘난체", Arial;
`;
