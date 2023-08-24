## 📍 페이지 소개

next.js와 typescript를 사용해 만든 개인용 포트폴리오 페이지입니다.
<br/><br/>

## 📍 Blockers

#### 문제1

- 문제: local 환경에서는 잘 보이던 gif 파일이 배포 후에 보이지 않는 이슈 발생.
- 해결 방법: gif 용량문제 때문인 것을 확인하고 gif 파일을 모두 mov 또는 mp4 파일로 변경

#### 문제2

- 문제: 상위 component에서 state를 props로 내려 관리하다보니, 하위 컴포넌트 중 한 개만 event가 발생해도 전체 state가 변경되는 이슈 발생
- 해결 방법: 상위 component의 state를 지우고 하위 컴포넌트 각각에 state를 따로 만들어주었다.
