+++
title = 'Makefile'
date = 2023-11-03
featured_image = "https://images.unsplash.com/photo-1589557944589-c1d0eaabc88e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JUVCJTgzJTg0JUVCJUI5JTg0JTIwJUVDJTlBJTk0JUVCJUE2JUFDfGVufDB8fDB8fHww"
tags = ['C', '42cursus', 'cs101']
+++

> The script that automates software build processes with the make utility

<br>

`Makefile` 은 소프트웨어 개발 과정에서 빌드를 자동화하는 강력한 도구이다. 복잡한 빌드 단계를 단순하고 반복 가능하게 만들어 주는 것이 핵심 기능이다. 프로그래머들에게 시간을 절약하고 오류를 줄여주는 데 큰 도움을 준다.
<br>

# Makefile

- `Makefile` 이란 자동화, 의존성 관리, 효율성, 모듈성, 표준화를 목적으로 함
	- 자동화
		- 복잡한 빌드 명령어를 자동화하여 개발자가 빌드 프로세스를 쉽게 반복
	- 의존성 관리
		- 소스 파일과 헤더 파일 간의 의존성을 추적하여 변경 시에만 관련 파일을 재컴파일
	- 효율성
		- 전체 프로젝트를 빌드하는 대신 변경된 부분만 빌드하여 시간과 자원을 절약
	- 모듈성
		- 빌드 프로세스를 여러 단계로 분리하여 복잡성을 관리해 유지보수가 용이
	- 표준화
		- 일관된 빌드 절차로 다른 개발자가 쉽게 이해하고 사용할 수 있음
- `Makefile` 의 기본적 구성
	- `target` : 하나의 실행 가능 파일
	- `dependency` : 하나의 대상과 그것이 의존하는 소스파일
	- `rule` : 의존 파일들로부터 대상 파일을 생성하는 방법을 정의

<br>

## 예시
``` Makefile
CC = cc
CFLAGS = -Wall -Wextra -Werror
INS = .
NAME = libft.a
```

- `cc` 컴파일러와 `-Wall -Wextra -Werror` 옵션을 이용할 예정
- 헤더파일을 검색할 곳은 `.` 즉 현재 폴더
- 최종으로 만들 것 `libft.a`

``` Makefile
SRCS = ~.c
OBJS = $(SRCS:.c=.o)

SRC_BONUS = ~~.c
OBJS_BONUS = $(SRC_BONUS:.c=.o)
```

- `SRCS` 는 사용자가 설정한 `.c` 확장자 파일을 뜻하며, `SRCS` 에서 파생된 `.o` 파일을 `OBJS` 라고 정의함
- `SRCS_BONUS` 는 사용자가 설정한 `.c` 확장자 파일을 뜻하며, `SRCS_BONUS` 에서 파생된 `.o` 파일을 `OBJS_BONUS` 라고 정의함

``` Makefile
all : $(NAME)

$(NAME) : $(OBJS)
	ar -rc $@ $^
```

- `$(NAME)` 라는 의존성 파일로부터 타겟인 `all` 을 생성(하겠음)
- `$(OBJS)` 라는 의존성 파일로부터 타겟인 `$(NAME)` 을 생성(하겠음)
	- `ar` : 아카이브 유틸리티를 의미하며 정적 라이브러리를 생성, 수정 시 사용
	- `-r` : `ar` 에 주어진 옵션으로, 라이브러리에 파일을 추가하거나 기존 파일을 대체하라는 의미
	- `-c` : `ar` 에 주어진 옵션으로, 라이브러리 생성 시 경고메세지를 억제하라는 의미
	- `$@` : 현재 타겟을 의미하는 자동 변수
	- `$^` : 현재 모든 의존성 리스트를 의미하는 자동변수

``` Makefile
ifdef tmp
	OBJS := $(OBJS) $(OBJS_BONUS)
endif

bonus :
 	@tmp=1 make
```

- `bonus` 명령어의 경우 `tmp=1` 경우의 `make` 를 수행함
- `@` 의 경우 명령어의 출력을 가려줌

``` Makefile
%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@ -I$(INS)
```

- `%.c` 라는 의존성 파일로부터 타겟인 `%.o` 를 생성(하겠음)
	- `$(CC) $(CFLAGS)` : 앞서 설정한 다양한 변수에 담긴 내용
	- `-c` : 컴파일러에게 컴파일만하고 링킹을 하지 말라는 옵션 only compile
	- `$<` : 현재 의존성 목록에서 첫 번째 요소로, 현재 처리 중인 `.c` 파일
	- `-o $@` : 출력 파일로 , `$@` 는 현재 타겟을 의미
	- `-I$(INS)` : 컴파일러에게 include files의 위치를 알려줌
		- 여기서 $(INS)는 include 디렉터리를 지정하는 변수!

``` Makefile
clean :
	rm -f $(OBJS) $(OBJS_BONUS)

fclean : clean
	rm -f $(NAME)

re : fclean all
```

- `clean` 의 경우 `rm -f $(OBJS) $(OBJS_BONUS)` 를 이행함
- `fclean` 의 경우 `clean` 을 의존성 파일로 가지고 있음
	- 실행 시 `clean` 이후 `rm -f $(NAME)` 를 이행함
- `re` 의 경우 `fclean` 이후  `all` 을 이행함

``` Makefile
.PHONY: all clean fclean re bonus
```

- `.PHONY` 타겟은 makefile 내에서 가짜 타겟이나 특별한 타겟을 명시하기 위해 사용됨
	- 해당 설정을 하지 않을 경우 대상 파일 내에 `clean` 이 존재할 경우, `make clean` 을 실행하면 단순히 해당 파일의 타임스탬프만 확인하고 아무 일도 없을 수 있음

<br>

## Relink
- Relink란 소스파일이 수정되지 않은 상태에서 `make` 명령어를 다시 실행했을 때 `.a` 이 다시 만들어지는 것
- [Libft](../42cursus/libft.md) 에서 bonus 과제와 관련된 Relink 문제 발생
	``` Makefile
	bonus : $(OBJS) $(OBJS_BONUS)
		ar -rsc $@ $^
	```
	- Makefile은 타겟 파일을 만들면서 의존성파일의 타임 스탬프를 항상 확인함
	- 이때 bonus의 경우 타겟 파일이 아닌 명령어이기 때문에, make는 타임스탬프는 확인하지만 일단 주어진 명령(레시피)을 무조건 실행함
	- 타임스탬프를 비교할 파일이 없는 것과 다름없음
	- 이 과정에서 make bonus를 할 경우 relink가 계속 일어날 수 있음

<br>

## Test
``` Makefile
test: $(OBJS)
	$(CC) $(CFLAGS) $^ -o a.out
```

<br>

# Reference
- https://www.gnu.org/software/make/manual/make.html#Archive-Suffix-Rules
- https://www.ibm.com/docs/ko/aix/7.2?topic=ar-command

<br>

{{<alert>}}
<a href="https://elecbrandy.github.io/tags/cs101"> cs101 </a>
{{</alert>}}
