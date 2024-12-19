// 2 saniye bekledikten sonra yükleme ekranını kaldır
window.addEventListener("load", () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");
    loadingScreen.style.display = "none";
    content.style.display = "block";
  }, 1000);
});
