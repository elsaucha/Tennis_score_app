import * as hmUI from "@zos/ui";
import { getDeviceInfo } from '@zos/device'
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

/*
export const TEXT_A = {
  text: "",
  x: px(185),
  y: px(20),
  w: px(125),
  h: px(30),
  color: 0xffffff,
  text_size: px(20),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};
*/
export const POINT_A_TEXT = {
  text: "0",
  x: px(137),
  y: px(-10),
  w: px(120),
  h: px(120),
  color: 0xeffffff,
  text_size: px(90),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const SET_1A_TEXT = {
  text: "0",
  x: px(0),
  y: px(160),
  w: DEVICE_WIDTH,
  h: px(55),
  color: 0xffffff,
  text_size: px(40),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const SET_1ATB_TEXT = {
  text: "",
  x: px(-3),
  y: px(190),
  w: DEVICE_WIDTH,
  h: px(45),
  color: 0xffffff,
  text_size: px(22),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const SET_2A_TEXT = {
  text: "0",
  x: px(20),
  y: px(160),
  w: DEVICE_WIDTH,
  h: px(55),
  color: 0xffffff,
  text_size: px(40),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const SET_2ATB_TEXT = {
  text: "",
  x: px(17),
  y: px(190),
  w: DEVICE_WIDTH,
  h: px(45),
  color: 0xffffff,
  text_size: px(22),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const SET_3A_TEXT = {
  text: "0",
  x: px(40),
  y: px(160),
  w: DEVICE_WIDTH,
  h: px(55),
  color: 0xffffff,
  text_size: px(40),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const SET_1B_TEXT = {
  text: "0",
  x: px(0),
  y: px(225),
  w: DEVICE_WIDTH,
  h: px(55),
  color: 0xffffff,
  text_size: px(40),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const SET_1BTB_TEXT = {
  text: "",
  x: px(-3),
  y: px(245),
  w: DEVICE_WIDTH,
  h: px(45),
  color: 0xffffff,
  text_size: px(22),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const SET_2B_TEXT = {
  text: "0",
  x: px(20),
  y: px(225),
  w: DEVICE_WIDTH,
  h: px(55),
  color: 0xffffff,
  text_size: px(40),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const SET_2BTB_TEXT = {
  text: "",
  x: px(17),
  y: px(245),
  w: DEVICE_WIDTH,
  h: px(45),
  color: 0xffffff,
  text_size: px(22),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const SET_3B_TEXT = {
  text: "0",
  x: px(40),
  y: px(225),
  w: DEVICE_WIDTH,
  h: px(55),
  color: 0xffffff,
  text_size: px(40),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
};

export const POINT_B_TEXT = {
  text: "0",
  x: px(137),
  y: px(DEVICE_WIDTH-70),
  w: px(120),
  h: px(120),
  color: 0xeffffff,
  text_size: px(90),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.BOTTOM,
};

export const RESET_BUTTON = {
  text: "RESET",
  x: px(135),
  y: px(DEVICE_HEIGHT),
  w: px(120),
  h: px(60),
  radius: px(10),
  normal_color: 0xA5C2F1,
  press_color: 0xe28559E,
  text_size: px(30),
  char_space: 2,
  line_space: 4,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.BOTTOM,
};