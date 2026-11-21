const liked = JSON.parse(localStorage.getItem("liked") || "[]");

// 현재 liked 배열을 localStorage에 저장
function saveLiked() {
    localStorage.setItem("liked", JSON.stringify(liked));
}

const dialog = document.querySelector("dialog");

// 현재 검색·필터·정렬 조건으로 카드 목록 다시 그리기
function refresh() {
    renderCards(getView());
}

// TMDB 포스터 경로와 크기로 이미지 생성
function posterUrl(path, size) {
  return "https://image.tmdb.org/t/p/" + size + path;
}

// 기준 키와 정렬 방향으로 정렬한 새 배열 생성
function sortBy(list, key, desc) {
  const copy = [...list];
  copy.sort((a, b) => {
    if (typeof a[key] === "string") return a[key].localeCompare(b[key]);
    return a[key] - b[key];
  });
  if (desc) copy.reverse();
  return copy;
}

// 제목에 검색어가 포함된 영화만 걸러 배열 만듬
function search(list, keyword) {
  const k = keyword.trim().toLowerCase();
  return list.filter(m => m.title.toLowerCase().includes(k));
}

// 검색어 ,정렬 기준을 순서대로 적용한 최종 배열 반환
function getView() {
    const keyword = document.getElementById("q").value;
    const type = document.querySelector('input[name="type"]:checked').value;
    const key = document.getElementById("sort").value;
    let list = search(movies, keyword);
    if (type !== "all") {
        list = list.filter(m => m.type === type);
    }
    return sortBy(list, key, key !== "title");
}

// 배열로 카드를 생성보드하고 편 찜 상태 갱신
function renderCards(list) {
    const board = document.querySelector(".board");
    board.innerHTML = "";
    for (const m of list) {
        const card = document.createElement("article");
        card.className = "card";
        if (m.rating >= 8) {
            card.classList.add("hot");
        }
        card.setAttribute("data-type", m.type);
        card.setAttribute("data-title", m.title);

        const rankBadge = m.type === "boxoffice" ? `<span class="rank">${m.rank}</span>` : "";
        let posterHtml = "";
        if (m.poster === null) {
            card.classList.add("no-poster");
            posterHtml = `<div class="poster-fallback">${m.title[0]}</div>`;
        } else {
            posterHtml = `<img class="poster" src="${posterUrl(m.poster, "w342")}" alt="${m.title} 포스터">`;
        }
        
        let heart = "like";
        if (liked.includes(m.title)) {
            heart = "like liked";
        }
        
        card.innerHTML = `
            ${posterHtml}
            ${rankBadge}
            <span class="badge">${m.rating}</span>
            <div class="info">
                <h3>${m.title}</h3>
                <p class="year">${m.year}</p>
                <button class="${heart}" type="button">♥</button>
            </div>`;
        board.appendChild(card);
    }
    document.getElementById("count").textContent = list.length + "편";
    document.getElementById("likeCount").textContent = liked.length;
    if (list.length === 0) {
        board.classList.add("is-empty");
    } else {
        board.classList.remove("is-empty");
    }
}

// 영화정보 상세 열기
function openDetail(title) {
    const movie = movies.find(m => m.title === title);
    if (!movie) return;

    document.getElementById("detailBody").innerHTML = `
        <img src="${posterUrl(movie.poster, "w500")}" alt="${movie.title} 포스터">
        <h2>${movie.title}</h2>
        <p>개봉일 ${movie.date}, 평점 ${movie.rating}</p>
        <p>${movie.overview}</p>`;
    dialog.showModal();
}
//찜 버튼이면 저장·초기화, 카드 본체면 상세 열기
document.querySelector(".board").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const title = card.getAttribute("data-title");
    if (e.target.closest(".like")) {
        const i = liked.indexOf(title);
        if (i === -1) {
            liked.push(title);
        } else {
            liked.splice(i, 1);
        }
        saveLiked();
        refresh();
        return;
    }
    openDetail(title);
});

document.getElementById("q").addEventListener("input", refresh);
document.getElementById("sort").addEventListener("change", refresh);
document.getElementById("typeFilter").addEventListener("change", refresh);
document.getElementById("closeDetail").addEventListener("click", () => {
    dialog.close();
});
refresh();
