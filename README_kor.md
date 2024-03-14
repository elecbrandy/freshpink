# FreshPink Hugo 테마
---
안녕하세요! FreshPink Hugo 테마에 오신 것을 환영합니다!

## 설치 방법
---
FreshPink 테마를 설치하는 데는 총 두 가지 방법이 있습니다! : Git 서브모듈로 설치하는 방법(업데이트가 쉬움)과 직접 다운로드하여 설치하는 방법입니다.

### 방법 1: Git 서브모듈로 설치하기
---
1. **Hugo 사이트 디렉토리로 이동하기**:
   터미널을 열고 Hugo 사이트의 루트 디렉토리로 이동합니다. Hugo 사이트를 아직 만들지 않았다면, `hugo new site yourSiteName` 명령어를 실행하여 하나 생성하세요.

2. **테마를 Git 서브모듈로 추가하기**:
   다음 명령어를 실행하여 FreshPink 테마를 사이트의 `themes` 디렉토리 안에 Git 서브모듈로 추가합니다:
   ```bash
   git submodule add git@github.com:ElecBrandy/freshpink.git themes/freshpink
   ```

3. **사이트 설정 업데이트하기**:
   사이트의 `config.toml` 파일을 텍스트 편집기로 열고, `theme` 변수의 값을 `"freshpink"`로 변경합니다:
   ```toml
   theme = "freshpink"
   ```

4. **사이트 미리보기하기**:
   로컬에서 사이트를 실행하여 테마를 미리 봅니다:
   ```bash
   hugo server
   ```

### 방법 2: 직접 다운로드하여 설치하기
---
1. **테마 다운로드하기**:
   [FreshPink GitHub 저장소](https://github.com/ElecBrandy/freshpink)로 이동하여 테마를 ZIP 파일로 다운로드합니다.

2. **파일 압축 해제 및 이동하기**:
   다운로드한 ZIP 파일을 압축 해제하고, 해제된 폴더를 Hugo 사이트의 `themes` 디렉토리 안에 복사합니다.

3. **사이트 설정 업데이트하기**:
   Git 서브모듈 방법과 마찬가지로, `config.toml` 파일을 열고 `theme` 변수의 값을 `"freshpink"`로 설정합니다.

4. **사이트 미리보기하기**:
   `hugo server` 명령어를 사용하여 사이트를 로컬에서 빌드하고 미리 봅니다.

## 테마 사용자 정의하기
---
FreshPink은 쉽게 사용자 정의할 수 있도록 설계되었습니다. 스타일, 레이아웃, 콘텐츠 등을 필요에 따라 수정하여 사이트의 요구사항에 맞출 수 있습니다.

## 문의사항
---
문제가 발생하거나 질문이 있으시면, [GitHub 저장소](https://github.com/ElecBrandy/freshpink/issues)에 이슈를 열어주세요.

FreshPink를 선택해주셔서 감사합니다 :)

