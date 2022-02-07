// for run:
// k6 run --out json=results/script01-01.json script01-with-options.js
import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
