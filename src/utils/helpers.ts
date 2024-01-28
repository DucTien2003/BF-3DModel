import { onMounted, onUnmounted } from 'vue';
import { Dayjs } from 'dayjs';

export const extend = Object.assign;

// Add zero
export const addZero = (number: number) => {
  return number < 10 ? '0' + number : number;
};

// Dayjs
export const getDate = (date: Dayjs) => {
  return date.format('YYYY-MM-DD');
};
export const getTime = (time: Dayjs) => {
  return time.format('HH:mm');
};

export const showQuantity = (number: number) => {
  return number >= 1000 ? (number / 1000).toFixed(1) + 'k' : number;
};

// Size of device
export const listenerResize = (handleResize: () => void) => {
  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
};
