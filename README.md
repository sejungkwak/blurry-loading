# blurry-loading

<img width="1423" alt="Screenshot 2021-03-07 at 16 11 02" src="https://user-images.githubusercontent.com/71224770/110246526-d78e9b00-7f5f-11eb-8ec3-f0e812bed1e9.png">


project notes

1. HTML<br />
bg img<br />
h1 number<br />

2. CSS<br />
background image<br />
blur<br />

3. JavaScript<br />
change blur value, and the numbers<br />


# Takeaway from the instructor

1. HTML<br />
n/a<br />

2. CSS<br />
-bg-img<br />
  size: cover<br />
  Position: absolute<br />
  + to fix white edge when blurry top & left: -30px, width & height: calc(100 vx/vh+ 60px)<br />

3.JavaScript<br />
every thing is in 1 function<br />

const scale = (num, in-min, in-max, out-min, out-max) => {<br />
return (num - in-min) * (out-max - out-min) / (in-max - in-min) + out-min;<br />
}<br />
from stackoverflow post: map a range of numbers to another range of numbers

