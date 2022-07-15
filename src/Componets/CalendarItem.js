import React, { useState } from "react";
import styled from "styled-components/native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, Text, View } from "react-native";

const CalendarItem = () => {
  const [momentState, setMomentState] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(moment());
  const today = momentState;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      console.log(week);
      result = result.concat(
        <WeekDateContainer>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (days.format("YYYYMMDD") === selectedDate.format("YYYYMMDD")) {
                return (
                  <SelectedBox>
                    <SelectedText>{days.format("D")}</SelectedText>
                  </SelectedBox>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedDate(days);
                    }}
                  >
                    <CalendarBox>
                      <OtherMonths>{days.format("D")}</OtherMonths>
                    </CalendarBox>
                  </TouchableOpacity>
                );
              }

              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDate(days);
                  }}
                >
                  <CalendarBox>
                    <Text>{days.format("D")}</Text>
                  </CalendarBox>
                </TouchableOpacity>
              );
            })}
        </WeekDateContainer>
      );
    }
    // console.log("result", result);
    return result;
  };
  return (
    <Container>
      {/* Header */}
      <HeaderContainer>
        <TouchableOpacity
          onPress={() => {
            setMomentState(momentState.clone().subtract(1, "month"));
          }}
        >
          <HeaderLeftBox>
            <Icon name="chevron-back" size={24} style={{ color: "#87CEFA" }} />
          </HeaderLeftBox>
        </TouchableOpacity>
        <HeaderCenterBox>
          <HeaderCenterText>{today.format("YYYY년 MM월")}</HeaderCenterText>
        </HeaderCenterBox>
        <TouchableOpacity
          onPress={() => {
            setMomentState(momentState.clone().add(1, "month"));
          }}
        >
          <HeaderRightBox>
            <Icon
              name="chevron-forward"
              size={24}
              style={{ color: "#87CEFA" }}
            />
          </HeaderRightBox>
        </TouchableOpacity>
      </HeaderContainer>

      {/* Body */}
      <BodyContainer>
        <WeekContainer>
          <CalendarBox>
            <WeekSundayText>일</WeekSundayText>
          </CalendarBox>
          <CalendarBox>
            <WeekDayText>월</WeekDayText>
          </CalendarBox>
          <CalendarBox>
            <WeekDayText>화</WeekDayText>
          </CalendarBox>
          <CalendarBox>
            <WeekDayText>수</WeekDayText>
          </CalendarBox>
          <CalendarBox>
            <WeekDayText>목</WeekDayText>
          </CalendarBox>
          <CalendarBox>
            <WeekDayText>금</WeekDayText>
          </CalendarBox>
          <CalendarBox>
            <WeekSatdayText>토</WeekSatdayText>
          </CalendarBox>
        </WeekContainer>

        {calendarArr()}
      </BodyContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 80%;
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
  align-items: center;
  padding: 20px;
`;

const WeekContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 350px;
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

const WeekDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
`;

const CalendarBox = styled.View`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const OtherMonths = styled.Text`
  color: gray;
`;

const SelectedBox = styled.View`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: solid 3px #ffcc01;
  border-radius: 25px;
`;

const SelectedText = styled.Text`
  color: #ffcc01;
`;

export default CalendarItem;
