let params = new URLSearchParams(document.location.search)

let score = params.get('score')

let title = 'Find out your score today!'

const text = `I scored ${score ?? '(missing score value)'}`

const shareData = {
  title: title,
  text: text,
  url: "https://developer.mozilla.org",
};
const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");
// Share must be triggered by “user activation”
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "Score shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});