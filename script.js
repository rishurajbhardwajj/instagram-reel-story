var arr = [
  // 0,1,2,43,5
  {
    dp: "https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/1999895/pexels-photo-1999895.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/14903522/pexels-photo-14903522.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/2270078/pexels-photo-2270078.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/18973711/pexels-photo-18973711/free-photo-of-young-woman-in-a-traditional-pink-saree-dress-posing-outside.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/9900509/pexels-photo-9900509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
var clutter = "";
arr.forEach(function (details, idx) {
  clutter += ` <div id="profile">
  <img id="${idx}" src="${details.dp}" alt="">
</div>`;
});

var storyians = document.getElementById("storyian");
storyians.innerHTML = clutter;

storyians.addEventListener("click", function (dets) {
  document.querySelector("#reel").style.display = "block";
  document.querySelector("#reel").style.backgroundImage = `url(
    ${arr[dets.target.id].story})`;
  setTimeout(()=>{
    document.querySelector("#reel").style.display = "none";
  }, 3000);
});

//
