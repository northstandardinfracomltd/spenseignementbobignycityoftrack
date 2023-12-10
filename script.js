
console.log("Hello 🌎");


const btn = document.querySelector("button"); // Get the button from the page
if (btn) { 
  btn.onclick = function () {
    // 
    btn.classList.toggle("dipped");
  };
}


let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// 
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});
