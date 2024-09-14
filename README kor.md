# freshPink

![tn.png](https://raw.githubusercontent.com/ElecBrandy/freshpink/main/images/tn.png)
![screenshot.png](https://raw.githubusercontent.com/elecbrandy/freshpink/main/images/screenshot.png)

안녕하세요! **freshpink** 테마에 대해서 설명드리겠습니다!  
hugo를 사용할 때 한국어 튜토리얼이 많이 없어서 불편했는데, 이 기회에 테마를 만들며 한국어 튜토리얼로 적어보려합니다!

## Demo site
우선 아래는 데모 사이트입니다. 간단한 예시와 자세한 튜토리얼이 나와있습니다!
[Go to Demo site](https://elecbrandy.github.io/freshpink/).

## 설치 방법
freshPink 테마를 설치하는 방법은 두 가지가 있습니다. Git 서브모듈을 사용하는 방법(업데이트를 쉽게 하기 위해 권장됨)과 직접 다운로드하는 방법입니다. 큰 이유가 없다면 서브모듈을 사용하는 방법을 추천드립니다.

### 방법 1: Git 서브모듈로 설치 (권장)

1. **Hugo 사이트 디렉토리로 이동**:
	터미널을 열고 Hugo 사이트의 루트 디렉토리로 이동합니다. 만약 아직 Hugo 사이트를 생성하지 않았다면, 아래 명령어로 사이트를 생성할 수 있습니다!

```bash
hugo new site yourSiteName
```

2. **Git 서브모듈로 테마 추가**:
	FreshPink 테마를 사이트에 Git 서브모듈로 추가합니다. 터미널에서 아래 명령어를 실행하세요.

```bash
git submodule add git@github.com:ElecBrandy/freshpink.git themes/freshpink
```

3. **사이트 설정 파일 업데이트**:
	사이트의 `config.toml` 파일을 텍스트 편집기에서 열고, `theme` 변수를 `"freshpink"`로 업데이트합니다:
	
```toml
theme = "freshpink"
```

4. **사이트 미리보기**:
	사이트가 정상적으로 동작하는지 확인하려면 아래 명령어로 로컬 서버에서 사이트를 실행하세요:
	
```bash
hugo server
```

### 방법 2: 직접 다운로드 후 설치

1. **테마 다운로드**:
[FreshPink GitHub 저장소](https://github.com/ElecBrandy/freshpink)로 이동하여 테마를 ZIP 파일로 다운로드합니다.

2. **테마 압축 해제 및 이동**:
ZIP 파일의 압축을 해제한 후, 해제된 폴더를 Hugo 사이트의 `themes` 디렉토리로 이동합니다.

3. **사이트 설정 파일 업데이트**:
Git 서브모듈 방식과 마찬가지로, `config.toml` 파일을 열어 `theme` 변수를 `"freshpink"`로 설정합니다.

4. **사이트 미리보기**:
아래 명령어로 로컬 서버에서 사이트를 빌드하고 미리보기를 확인합니다:

```bash
hugo server
```

## 테마 커스터마이징

freshPink 테마는 쉽게 커스터마이징할 수 있도록 설계되었습니다. 스타일, 레이아웃, 콘텐츠 등을 필요에 따라 수정하여 사이트에 맞게 조정할 수 있습니다. 관련된 내용을 데모사이트의 튜토리얼을 따라가면서 직접 실행해보세요!

## 도움이 필요하신가요?

문제가 발생하거나 질문이 있다면 [GitHub 저장소](https://github.com/ElecBrandy/freshpink/issues)에 이슈를 등록해 주시면 감사하겠습니다!

freshPink 테마를 선택해 주셔서 감사합니다! :)

