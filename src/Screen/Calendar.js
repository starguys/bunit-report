import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import CalendarItem from "../Componets/CalendarItem";

const Calendar = () => {
  return (
    <Container>
      <CalendarItem />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export default Calendar;
