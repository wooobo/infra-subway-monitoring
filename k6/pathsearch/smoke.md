
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
/          \   |  |\  \ |  (‾)  |
/ __________ \  |__| \__\ \_____/ .io

execution: local
script: smoke.js
output: -

scenarios: (100.00%) 1 scenario, 1 max VUs, 40s max duration (incl. graceful stop):
* default: 1 looping VUs for 10s (gracefulStop: 30s)


running (10.0s), 0/1 VUs, 10 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  10s

     ✓ page load success

     checks.........................: 100.00% ✓ 10       ✗ 0  
     data_received..................: 12 kB   1.2 kB/s
     data_sent......................: 800 B   80 B/s
     http_req_blocked...............: avg=20.13µs  min=2.95µs   med=8.93µs   max=137.44µs p(90)=22.67µs  p(95)=80.05µs 
     http_req_connecting............: avg=8.58µs   min=0s       med=0s       max=85.85µs  p(90)=8.58µs   p(95)=47.21µs 
✓ http_req_duration..............: avg=1.5ms    min=752.84µs med=1.53ms   max=2.3ms    p(90)=2.25ms   p(95)=2.27ms  
{ expected_response:true }...: avg=1.5ms    min=752.84µs med=1.53ms   max=2.3ms    p(90)=2.25ms   p(95)=2.27ms  
http_req_failed................: 0.00%   ✓ 0        ✗ 10
http_req_receiving.............: avg=105.97µs min=50.4µs   med=111.12µs max=192.84µs p(90)=140.37µs p(95)=166.61µs
http_req_sending...............: avg=32.57µs  min=14.41µs  med=38.04µs  max=42.89µs  p(90)=42.1µs   p(95)=42.49µs
http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
http_req_waiting...............: avg=1.37ms   min=609.76µs med=1.39ms   max=2.15ms   p(90)=2.02ms   p(95)=2.09ms  
http_reqs......................: 10      0.997566/s
iteration_duration.............: avg=1s       min=1s       med=1s       max=1s       p(90)=1s       p(95)=1s      
iterations.....................: 10      0.997566/s
vus............................: 1       min=1      max=1
vus_max........................: 1       min=1      max=1
