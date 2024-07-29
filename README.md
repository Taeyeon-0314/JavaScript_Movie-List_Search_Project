## 프로젝트 개요
1. 순수 바닐라 자바스크립트만으로 영화 리트 조회 및 검색 UI 구현
2. 자바스크립트문법을 최대한 활용
    - jQuery 사용 X
3. CSS 익숙해 지기
* **진행 기간**
* **24.07.22 ~ 24.07.29**

---
<div align=Left><h1>📚 STACKS</h1></div>
<div align=left>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

---

## 🗂️ 기능 설명
## 필수 구현 사항
### 1. jQuery 라이브러리 사용없이 순수 바닐라 자바스크립트 사용
<details>
<summary style="font-weight:bold; font-size: 18px">2. TMDB오픈 API를 이용하여 인기영화 데이터 가져오기</summary>
<div dir="auto">
전세계에서 가장 많이 사용하는 영화 정보 오픈 API 중 하나로 '감독','출연진','포스터' 등 다양한 서비스를 대부분 무료로 제공합니다.

* **TMDB 가입 및 API 요청 방법**
    * 1.회원가입 : https://www.themoviedb.org/signup?language=ko
    * 2.이메일 인증: 회원가입 시 입력한 이메일함에 가서 "Activate My Account" 버튼 클릭 후 로그인
    * 3.프로필과 설정 버튼 크릭후 설정 클릭
    * 4.좌측 사이드메뉴에서 API 메뉴 클릭 후 API 키 요청 세션의 'click here' 클릭
    * 5.“What type of API key do you wish to register?” 라는 질문에 Developer 클릭 후 동의
    * 6.API 신청양식 채우고 제출버튼 클릭
    * 7.API 문서로 이동
    * 8.영화 API요청 코드 복사
    * 9.복사한 코드를 js코드에 적용
</div>
</details>

### 3. 영화정보 카드 리스트 UI 구현
* TMDB에서 받아온 데이터를 브라우저 화면에 카드 형태의 데이터로 보여줍니다.
* 카드에는 title(제목) , overview(내용요약) , poster_path(포스터 이미지 경로), vote_average(평점) 이렇게 4가지 정보가 필수로 들어가야합니다.
* 카드 클릭 시 클릭한 영화 id값을 alert창에 띄웁니다.

### 4. 영화 검색 UI 구현
* API로 받아온 전체 영화들 중 영화 제목에 input 창에 입력한 문자값이 포함되는 영화들만 화면에 보이도록 합니다.
* 입력 후 검색버튼 클릭시 검색 결과를 화면에 보이도록 합니다.


### 5. 기재된 Javascript 문법 요소를 이용하여 구현
* const와 let만을 이용한 변수 선언!
* 화살표 함수 : 1개 이상 사용
* 배열 메소드 : 2개 이상 사용
* DOM 제어하기 : 2개 이상 사용

---

## 선택 구현 사항

1. CSS
    * flex 사용하기 (미구현)
    * grid 사용하기 (미구현)
2. 웹사이트 랜딩 또는 새로고침 후 검색 입력란에 커서 자동 위치 (구현)
3. 대소문자 관계없이 검색 가능하게 하기 (구현) 
4. 키보드 enter키를 입력해도 검색버튼 클릭한 것과 동일하게 검색 실행(구현)
