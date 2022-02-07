// for run:
// k6 run --out json=results/script00-01.json tests/script00-first-script.js
import http from 'k6/http';
import { sleep } from "k6";

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
