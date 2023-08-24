# Update
### 2023.08.24 업데이트 내용
- 유지보수와 가독성을 위해 TailwindCss -> Styled-Components로 변경
- redux 전역상태 이용해 inView상태 저장 -> Contacts의 inView가 true일 때 Nav바 색상 변경
- 모바일 반응형 추가 및 사이드메뉴 생성
- Experience 메뉴 추가
- Project 메뉴 UI/UX 변경
- 사용하지 않는 코드 & 패키지 제거

<br/>

### 이슈 
  ```
  File public/videos/[파일명].mp4 is 156.28 MB; this exceeds GitHub's file size limit of 100.00 MB
  ```
  100MB가 넘는 파일을 올려 에러가 발생했다. git lfs를 통해 해결이 가능하지만, 나는 이미 해당 파일을 commit한 후였기에 파일을 삭제해도 해결이 되지 않았다.
  
  해결방법: 해당 파일을 commit하기 이전으로 reset 후 변경 사항을 다시 commit 후 재push
  
