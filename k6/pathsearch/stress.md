
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
/          \   |  |\  \ |  (‾)  |
/ __________ \  |__| \__\ \_____/ .io

execution: local
script: load.js
output: -

scenarios: (100.00%) 1 scenario, 510 max VUs, 3m20s max duration (incl. graceful stop):
* default: Up to 510 looping VUs for 2m50s over 6 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (2m51.0s), 000/510 VUs, 56042 complete and 0 interrupted iterations
default ✓ [======================================] 000/510 VUs  2m50s

     ✓ page load success

     checks.........................: 100.00% ✓ 56042      ✗ 0    
     data_received..................: 65 MB   378 kB/s
     data_sent......................: 4.5 MB  26 kB/s
     http_req_blocked...............: avg=16.82µs min=1µs      med=5.43µs  max=19.09ms  p(90)=9.11µs   p(95)=9.85µs  
     http_req_connecting............: avg=8.14µs  min=0s       med=0s      max=19.02ms  p(90)=0s       p(95)=0s      
✓ http_req_duration..............: avg=2.53ms  min=256.47µs med=1.72ms  max=119.33ms p(90)=5.09ms   p(95)=7.02ms  
{ expected_response:true }...: avg=2.53ms  min=256.47µs med=1.72ms  max=119.33ms p(90)=5.09ms   p(95)=7.02ms  
http_req_failed................: 0.00%   ✓ 0          ✗ 56042
http_req_receiving.............: avg=92.18µs min=10.04µs  med=65.48µs max=20.85ms  p(90)=122.24µs p(95)=172.32µs
http_req_sending...............: avg=34.63µs min=4.14µs   med=22.52µs max=17.41ms  p(90)=40.6µs   p(95)=53.37µs
http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
http_req_waiting...............: avg=2.41ms  min=230.27µs med=1.57ms  max=119.22ms p(90)=4.93ms   p(95)=6.83ms  
http_reqs......................: 56042   327.773402/s
iteration_duration.............: avg=1s      min=1s       med=1s      max=1.12s    p(90)=1s       p(95)=1s      
iterations.....................: 56042   327.773402/s
vus............................: 207     min=10       max=509
vus_max........................: 510     min=510      max=510
