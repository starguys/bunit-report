import React, { useState } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

const CalendarItem = () => {
  const today = new Date();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  //   const todayMonth = 10;
  const todayDate = today.getDate();

  const [selectedYear, setSelectedYear] = useState(todayYear);
  const [selectedMonth, setSelectedMonth] = useState(todayMonth);

  return (
    <Container>
      {/* Header */}
      <HeaderContainer>
        <HeaderLeftBox>
          <Icon name="chevron-back" size={24} style={{ color: "#87CEFA" }} />
        </HeaderLeftBox>
        <HeaderCenterBox>
          <HeaderCenterText>
            {selectedYear} -{" "}
            {selectedMonth >= 10 ? selectedMonth : "0" + selectedMonth}
          </HeaderCenterText>
        </HeaderCenterBox>
        <HeaderRightBox>
          <Icon name="chevron-forward" size={24} style={{ color: "#87CEFA" }} />
        </HeaderRightBox>
      </HeaderContainer>

      {/* Body */}
      <BodyContainer>
        <WeekContainer>
          <WeekSundayText>일</WeekSundayText>
          <WeekDayText>월</WeekDayText>
          <WeekDayText>화</WeekDayText>
          <WeekDayText>수</WeekDayText>
          <WeekDayText>목</WeekDayText>
          <WeekDayText>금</WeekDayText>
          <WeekSatdayText>토</WeekSatdayText>
        </WeekContainer>
      </BodyContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 80%;
  border: solid 1px red;
  margin-top: 10%;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
`;

const HeaderLeftBox = styled.View``;

const HeaderCenterBox = styled.View``;

const HeaderCenterText = styled.Text`
  font-size: 24px;
`;

const HeaderRightBox = styled.View``;

const BodyContainer = styled.View`
  padding: 20px;
`;

const WeekContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const WeekSundayText = styled.Text`
  color: #ff0000;
`;

const WeekSatdayText = styled.Text`
  color: #0000ff;
`;

const WeekDayText = styled.Text`
  opacity: 0.4;
`;

export default CalendarItem;
