const url = window.location.href
const params = new URLSearchParams(window.location.search)

const score = params.get('score')
const title = 'Find out your score today!'
const text = `I scored ${score ?? '(missing score value)'}`

const shareData = {
  title: title,
  text: text,
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button")
const btnURL = document.getElementById("btnCopyURL")
const resultPara = document.querySelector(".result")

// Share must be triggered by “user activation”
btn.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      resultPara.textContent = "Score shared successfully"
    } catch (err) {
      resultPara.textContent = `Error: ${err}`
    }
  } else {
    // btnURL.style.display = 'none'
    alert('showing this popup')
  }
});

btnURL.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(url)
    alert(`Link ${url} copied to clipboard!`);
  } catch(err) {
    console.error(err.message)
  }
})