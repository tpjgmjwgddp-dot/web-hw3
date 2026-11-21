const movies = [
  {
    title: "극장판 치이카와: 인어 섬의 비밀",
    year: 2026,
    date: "2026-09-30",
    rating: 7.6,
    audience: 0,
    poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg",
    type: "mine",
    rank: null,
    overview: "보수 100배와 맛있는 음식을 준다는 전단지에 이끌려 특별한 섬으로 떠난 치이카와 일행이 주민들을 위협하는 거대한 세이렌과 인어의 비밀을 마주하며 벌이는 모험을 그린 애니메이션 영화입니다."
  },
  {
    title: "기생충",
    year: 2016,
    date: "2016-05-30",
    rating: 8.5,
    audience: 0,
    poster: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    type: "mine",
    rank: null,
    overview: "전원 백수인 기택네 장남 기우가 고액 과외 면접을 위해 박사장네 집에 발을 들이면서 시작된 두 가족의 만남이 걷잡을 수 없는 사건으로 번져가는 이야기를 그린 블랙 코미디 스릴러입니다."
  },
  {
    title: "옥자",
    year: 2017,
    date: "2017-06-28",
    rating: 7.3,
    audience: 0,
    poster: "/pHlRr2MfjK77VIIAO7p0R4jhsJI.jpg",
    type: "mine",
    rank: null,
    overview: "강원도 산골에서 10년간 함께 자란 소녀 미자와 거대 동물 옥자가 글로벌 기업의 손에 뉴욕으로 끌려가자, 미자가 옥자를 구하기 위해 위험천만한 여정에 나서는 어드벤처 영화입니다."
  },
  {
    title: "살인의 추억",
    year: 2003,
    date: "2003-05-02",
    rating: 8.1,
    audience: 0,
    poster: "/jcgUjx1QcupGzjntTVlnQ15lHqy.jpg",
    type: "mine",
    rank: null,
    overview: "1980년대 경기도 화성에서 연쇄 살인 사건이 발생하자, 현지 형사 박두만과 서울에서 파견된 형사 서태윤이 서로 다른 수사 방식으로 얼굴 없는 범인을 추적하는 범죄 스릴러입니다."
  },
  {
    title: "설국열차",
    year: 2013,
    date: "2013-08-01",
    rating: 7.1,
    audience: 0,
    poster: "/kw6YQudA0TMcNmGUGy5XIw7zbnV.jpg",
    type: "mine",
    rank: null,
    overview: "기상 이변으로 얼어붙은 지구에서 유일한 생존 공간인 열차에 탑승한 인류 중, 굶주림과 억압에 시달리던 꼬리칸 사람들이 자유를 쟁취하기 위해 엔진칸을 향해 반란을 일으키는 SF 액션 영화입니다."
  },
  {
    title: "극장판 치이카와: 인어 섬의 비밀",
    year: 2026,
    date: "2026-09-30",
    rating: 7.6,
    audience: 23394977,
    poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg",
    type: "boxoffice",
    rank: 1,
    overview: "보수 100배와 맛있는 음식을 준다는 전단지에 이끌려 특별한 섬으로 떠난 치이카와 일행이 주민들을 위협하는 거대한 세이렌과 인어의 비밀을 마주하며 벌이는 모험을 그린 애니메이션 영화입니다."
  },
  {
    title: "암살자(들)",
    year: 2026,
    date: "2026-03-15",
    rating: 7.2,
    audience: 3382132,
    poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg",
    type: "boxoffice",
    rank: 2,
    overview: "1974년 8월 15일 발생한 저격 사건을 모티브로, 형사 철구와 신문사 사회부장 재환, 신입 기자 영일이 공식 수사 결과의 빈틈과 숨겨진 진실을 추적하는 미스터리 범죄 스릴러입니다."
  },
  {
    title: "실낙원",
    year: 2026,
    date: "2026-07-22",
    rating: 8.0,
    audience: 112193,
    poster: "/wkm9BQLok7U2KihcCspCa663Qse.jpg",
    type: "boxoffice",
    rank: 3,
    overview: "9년 전 버스 실종 사건으로 아들을 잃고 AI 프로그램 속 가상 아들에게 의지하던 엄마 소영 앞에 19세 청년이 된 실제 아들이 돌아오면서 벌어지는 서스펜스 미스터리 스릴러입니다."
  },
  {
    title: "타짜: 벨제붑의 노래",
    year: 2026,
    date: "2026-11-05",
    rating: 7.0,
    audience: 2006488,
    poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg",
    type: "boxoffice",
    rank: 4,
    overview: "온라인 카지노 사업으로 승승장구하던 절친한 친구 장태영과 박태영이 질투와 배신으로 갈라선 뒤, 각자의 욕망과 복수를 걸고 글로벌 도박판에서 다시 맞붙는 범죄 드라마입니다."
  },
  {
    title: "클레이페이스",
    year: 2026,
    date: "2026-04-18",
    rating: 7.5,
    audience: 84051,
    poster: "/LSGpoSAlitss0KOvVakkeUToZo.jpg",
    type: "boxoffice",
    rank: 5,
    overview: "범죄 조직의 습격으로 얼굴과 커리어를 모두 잃은 할리우드 배우 맷 헤이건이 최첨단 나노 기술 치료의 부작용으로 진흙처럼 변형되는 괴물이 되어 처절한 복수에 나서는 바디 호러 스릴러입니다."
  }
];
