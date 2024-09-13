+++
title = '[42cursus] libft'
date = 2023-11-03
featured_image = "http://t1.daumcdn.net/cfile/116C5A10B09188A10A"
tags = ['C', '42cursus']
+++

> Your very first own library

<br>

# 소개
____
42서울 본과정 입과 후 첫번째로 만나는 과제로 앞으로 본과정에서 사용할 라이브러리를 만드는 것이 목표이다.
이후 과제를 수행하며 자주 사용할 함수들이 몇가지 있기 때문에 최대한 범용성 높게 - 커스텀하기 쉽게 만드는 것을 목표로 했다.
항상 느끼는 것이지만 `norm` 규칙의 첫번째 목표는 카뎃이 다른 카뎃의 코드를 보았을 때 최소한의 일관성을 유지하여 쉽게 읽을 수 있게 하는 것... 이고
두번째는 코드 길이를 적당히 조절함으로써 자연스럽게 모듈화를 하게 하는 것. 그 이상의 의미는 두지 않기로 했다.

<br>
<br>

# libft 명세서
____
- **Part 1 - Libs functions**
	- ft_isalpha, ft_isdigit, ft_isalnum, ft_isascii, ft_isprint
	- ft_strlen , ft_memset, ft_bzero, ft_memcpy, ft_memmove, ft_strlcpy, ft_strlcat, ft_strncmp
	- ft_strchr, ft_strrchr, ft_toupper, ft_tolower
	- ft_memchr, ft_memcmp, ft_strnstr, ft_atoi
	- ft_calloc, ft_strdup

- **Part 2 - Addtional functions**
	- ft_substr, ft_strjoin, ft_split, ft_itoa, ft_strmapi, ft_striteri
	- ft_putchar_fd, ft_putstr_fd, ft_putendl_fd, ft_putnbr_fd

- **Part 3 - Bonus functions**
	- ft_lstnew, ft_lstadd_front, ft_lstsize, ft_lstlast, ft_lstadd_back, ft_lstdelone, ft_lstclear, ft_lstiter, ft_lstmap

<br>
<br>

# 개념 정리
____
## size_t
- 해당 운영체제에서 포함할 수 있는 최대 크기의 데이터 타입으로, 32비트 운영체제에서 4바이트, 64비트 운영체제에서 8바이트로 정의되어있다.
- 객체의 크리를 나타내는 부호 없는 정수 유형이다.
- `sizeof` 연산자의 결과값이기도 하며, 결국 '크기'를 다룰 때 선호한다.
- 레지스터 별로 달랐던 자료의 범위 값으로 인한 메모리의 낭비나 부족을 막기 위해 사용했다.

<br>

## atoi의 한계
- 사실 `atoi` 함수는 **LONG_MAX**와 **LONG_MIN**을 초과하는 범위에서 결과값이 고정되어있다.
- 이는 현재 `atoi` 함수 내부를 들여다보면 궁금증을 풀 수 있으니 여러 버전의 오픈소스를 통해 `atoi`의 구현을 살펴보자.
- `strol` 함수에 대해서 공부해보자.

<br>

## Parity bit
- 패리티 비트는 정보 전달 과정에서 오류가 생겼는지 검사하기 위한 비트이다.
- 오류 검출을 위해 전송하는 데이터의 끝에 1비트를 더하여 전송하는 방법이다.
- 1바이트(8비트) 구조에서 피리티 비트는 7비트 크기의 ASCII 코드를 제외한 나머지 1비트를 의미한다.

<br>
<br>

{{<alert>}}
<a href="https://elecbrandy.github.io/tags/42cursus"> 42cursus </a>
{{</alert>}}
<br>
