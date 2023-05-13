import { useEffect, useState } from "react"
import moment from "moment"

export const getYear = () => {
  const year = new Date().getFullYear()

  return year
}

export const getRemainingDay = () => {
  const day = new Date().getDay()

  return day
}

export const getRemainingHour = (hour) => {
  let fullHour = hour;
  let currentHours = new Date().getHours();

  let remainingHour = fullHour - currentHours;

  if (remainingHour === 0) {
    remainingHour = fullHour
  }

  return remainingHour
}

export const getRemainingMinute = () => {
  let fullMinute = 60
  let currentMinute = new Date().getMinutes()

  let remainingMinute = fullMinute - currentMinute

  return remainingMinute
}

export const getSeconds = () => {
  let fullSeconds = 60
  let currentSeconds = new Date().getSeconds()

  let remainingSecond = fullSeconds - currentSeconds

  return remainingSecond
}