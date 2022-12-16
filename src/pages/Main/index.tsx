import { Tabs, Tab } from "react-bootstrap";

import RecordComponent from "./Record";
import TrainingComponent from "./Training";
import * as S from "./index.style";

const MainPage = () => {
  return (
    <S.TabsWrapper>
      <Tabs
        className="mb-3"
        defaultActiveKey="training"
        transition={false}
        fill
      >
        <Tab title="학습하기" eventKey="training">
          <TrainingComponent />
        </Tab>
        <Tab title="녹음하기" eventKey="record">
          <RecordComponent />
        </Tab>
      </Tabs>
    </S.TabsWrapper>
  );
};

export default MainPage;
