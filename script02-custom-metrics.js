// for run with date ant time info:
// k6 run --out csv=results/script02-%date:~6,4%-%date:~3,2%-%date:~0,2%T%time:~0,2%-%time:~3,2%-%time:~6,2%.csv script02-custom-metrics.js
import http from 'k6/http';
import { Trend } from 'k6/metrics';

const myTrend = new Trend('new_waiting_time');

export default function () {
  const r = http.get('https://httpbin.org');
  myTrend.add(r.timings.waiting);
  console.log(myTrend.name);
}
