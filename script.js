// 2 saniye bekledikten sonra yükleme ekranını kaldır
window.addEventListener('load', () => {
  setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');

      if (loadingScreen) {
          loadingScreen.style.display = 'none';
      }
      const content = document.getElementById('content');
      if (content) {
          content.style.display = 'block';
      }
  }, 500); // 1 saniye
});

// İnceleme metnini değiştirme işlevi
function changeReview(button) { 
  const movie = button.dataset.movie;
  const reviewAuthor = button.dataset.review;
  let newReview = "";

  // Yorumları tanımlama
  if (movie === "dark-knight") {
      if (reviewAuthor === "Tan") {
          newReview = "Christopher Nolan'ın Batman üçlemesindeki zirve noktası. Heath Ledger'ın Joker performansı unutulmaz.";
      } else if (reviewAuthor === "Aytaç") {
          newReview = "Efsane bir suç draması. Aksiyon sahneleri ve karakter gelişimi muhteşem.";
      }
  } else if (movie === "inception") {
      if (reviewAuthor === "Tan") {
          newReview = "Bir rüyanın içinde başka bir rüya! İzleyiciyi sürekli düşündüren bir başyapıt.";
      } else if (reviewAuthor === "Aytaç") {
          newReview = "Bilim kurgu ve psikolojik gerilim sevenler için mükemmel bir seçenek.";
      }
  }

  // Yorum metnini güncelle
  const reviewElement = document.getElementById(`review-${movie}`);
  if (reviewElement) {
      reviewElement.textContent = newReview;
  }
}
