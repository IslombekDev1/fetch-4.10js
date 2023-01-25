// setTimeout
// setTimeout(() => {
//   // document.body.style = `background:red`
// }, 1000)//vaqt tugashini belgilang

// // setInterval - belgilangan interval
// setInterval(() => {
//   // document.body.style = `background:red`
// }, 1000)// belgilangan seconddan keyin code qayta-qayta ishga tushaveradi

// setInterval(() => {
//   const time = new Date()
//   clock.innerText = `${time.getHours().toString().padStart(2, "0")} : ${time.getMinutes().toString().padStart(2, "0")} : ${time.getSeconds().toString().padStart(2, "0")}`
//   milli.innerText = `${time.getMilliseconds().toString().padStart(3, "0")}`
// });

// let ad = setTimeout(() => {
//   title.style = "display:block"
// }, 3000);

// btn.addEventListener("click", () => {
//   clearTimeout(ad)
// })

// let selectedTime = new Date("January 25, 2023 07:51:00").getTime()

// let timer = setInterval(() => {
//   let now = new Date().getTime();
//   let difference = selectedTime - now;
//   let days = Math.floor(difference / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((difference % (1000 * 60)) / 1000);
//   title2.innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
//   if(difference <= 1000){
//     clearInterval(timer)
//     title2.innerText = `0 days 0 hours 0 minutes 0 seconds`
//   }
// }, 1);

// btn.addEventListener("click", () => {
//   clearTimeout(timer)
// })

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(user => {
//       const p = document.createElement("p");
//       p.innerText = user.name;
//       document.body.appendChild(p);
//     });

//   })

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((a) => a.json())
  .then((b) => {
    b.forEach(element => {
      let img = document.createElement("img")
      img.setAttribute("src", element.thumbnailUrl)
      box.appendChild(img)
    })
  });

