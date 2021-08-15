# next-js-project
/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-05-12 22:31:07
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-08-15 20:23:49
 * @FilePath: /ack-slh-frontend/src/pages/Landing/index.tsx
 */
import React from 'react';
import { modal } from 'src/utils/Modal';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
const format = 'HH:mm';
const Landing = () => {
  const [from_date, setFrom_date] = React.useState<any>(null);
  const [from_time, setFrom_time] = React.useState<any>(null);
  const [to_date, setTo_date] = React.useState<any>(null);
  const [to_time, setTo_Time] = React.useState<any>(null);
  const Hours = Array.from(Array(24), (v, k) => k);
  const Minutes = Array.from(Array(60), (v, k) => k);

  const fromDisableRange = (d: any) => {
    if (to_date) {
      return !moment(d).isBefore(to_date);
    }
    return false;
  };
  const isSameDate = moment(from_date).isSame(to_date, 'day');
  const toDisableRange = (d: any) => {
    if (from_date) {
      return moment(d).isBefore(from_date);
    }
    return false;
  };

  const disEndHouse = () => {
    if (from_time && isSameDate) {
      const h = from_time.hour();
      return Hours.slice(0, h);
    }
    return [];
  };
  const disStartHouse = () => {
    if (to_time && isSameDate) {
      const h = to_time.hour();
      return Hours.slice(h, Hours.length - 1);
    }
    return [];
  };

  const disEndMinute = (h: any) => {
    if (from_time && isSameDate) {
      if (h > from_time.hour()) return [];
      const m = from_time.minute();
      return Minutes.slice(0, m);
    }
    return [];
  };
  const disStartMinute = (h: any) => {
    if (to_time && isSameDate) {
      if (h < to_time.hour()) return [];
      const m = to_time.minute();
      return Minutes.slice(m, Minutes.length - 1);
    }
    return [];
  };

  return (
    <div>
      <DatePicker
        disabledDate={fromDisableRange}
        value={from_date}
        onChange={(e) => {
          setFrom_date(e);
        }}
      />
      <TimePicker
        disabledHours={disStartHouse}
        disabledMinutes={disStartMinute}
        format={format}
        value={from_time}
        onChange={(e) => {
          setFrom_time(e);
        }}
      />
      <DatePicker
        disabledDate={toDisableRange}
        value={to_date}
        onChange={(e) => {
          setTo_date(e);
        }}
      />
      <TimePicker
        disabledHours={disEndHouse}
        disabledMinutes={disEndMinute}
        format={format}
        value={to_time}
        onChange={(e) => {
          setTo_Time(e);
        }}
      />
      {/* <button
        onClick={() => {
          modal.error({ title: 'test', content: 'Content' });
        }}
      >
        asd
      </button> */}
    </div>
  );
};
export default Landing;
