import React, {useState} from "react";
import {
  Container,
  SelectWrap,
} from './elements';
import{ Select } from "antd";

const List: React.FunctionComponent = props => {
  const [city, setCity] = useState('경기도');
  const [address, setAddress] = useState('시흥시');
  const [address2, setAddress2] = useState('정왕동');

  return (
    <Container>
      <h2 style={{ color: '#FDDFCA' }}>Cafe List</h2>
      <SelectWrap>
        <Select value={city} onChange={setCity}>

        </Select>
        <Select value={address} onChange={setAddress}>

        </Select>
        <Select value={address2} onChange={setAddress2}>

        </Select>
      </SelectWrap>
    </Container>
  )
}

export default List;