+++
title = '[42cursus] get_next_line'
date = 2023-12-18
featured_image = "http://t1.daumcdn.net/cfile/15110210A8445BF80D"
tags = ['C', '42cursus']
+++

> Reading a line on a fd is way too tedious

<br>

# 소개
____
<img src="https://imgur.com/2R4ZmUq.png" width="700">

42서울 본과정 입과 후 세번째로 수행한 과제로, 파일 디스크립터로부터 읽혀진 - 개행으로 끝나는 한 줄을 반환하는 함수를 만드는 과제이다. 즉 파일 하나를 연 다음, 파일 내용에서 개행으로 끝나는 줄 하나를 반환해야한다. 파일을 열고, 지정된 **BUFFER_SIZE** 만큼 `read`함수를 통해 파일을 읽다가 개행문자 `\n`이 나타나면 개행문자 전까지만 반환한다.

<br>
<br>

# get_next_line 명세서
____
- **PROTOTYPE**
	- `char *get_next_line(int fd);`
- **PARAMETER**
	- `int fd` : 읽어들일 파일의 디스크립터
- **DESCRIPTION**
    - **Mandatory part**
    	- 호출마다 한 번에 한 줄씩 파일 디스크립터가 가리키는 파일을 읽어온다.
    	- 더 이상 읽어올 것이 없거나 에러가 발생하면 `NULL`을 반환한다.
    	- 파일 끝에 도달하였고, 개행문자 `\n`이 존재하지 않을 때를 제외하고 반환하는 문자열에는 `\n`이 포함되어야 한다.
    - **Bonus part**
		- 정적 변수를 하나만 사용하여 개발해야한다.
		- `get_next_line()` 이 여러 개의 파일 디스크립터를 한번에 관리해야 한다.
		- 한번 호출하여 3, 4, 5 그 이후 다시 4, 5 등등을 읽을 수 있어야 한다.
	- **External functs**
		- read, malloc, free
- **RETURN VALUES**
	- 한 줄을 제대로 읽은 정상작동의 경우 읽은 라인을 반환한다.
	- 비정상작동의 경우 `NULL`을 반환한다.

<br>
<br>

# 개념 정리
___
## 연결리스트와 OPEN_MAX
본 과제를 **BONUS**까지 수행한다면, 즉 동시에 여러 파일 디스크립터를 감안하는 프로그램을 만들고 싶다면 크게 두가지 방법이 존재한다.

1. 연결리스트로 구현하는 것이고
연결리스트 구조를 통해 생성되는 파일 디스크립터를 담은 노드를 계속 뒤에 이어 붙이며 관리

2. `OPEN_MAX`로 구현
해당 시스템에서 용인하는 최대 파일 디스크립터 수를 정의한 `OPEN_MAX`를 통해 정적 배열로 관리

평가 기준에 다른 카뎃들의 여러가지 논의가 있는 것은 맞으나! 평가자를 납득시킬 수 있는 설명(또는 노력)을 통해 원하는 방법으로 보너스까지 노려보자.

<br>

## OPEN_MAX
나는 `OPEN_MAX`를 통해 보너스를 구현했다.

그 이유는 본 과제에서 중요하게 배워야하는 것은 파일 디스크립터라는 생소한 개념과 파일을 열고 read하고 닫고, 동적할당한 메모리를 적절하게 해제하는 것이라고 생각하기 때문이다. 연결리스트로 분명히 구현은 가능하지만, 굳이 공수를 더 들일 필요 또한 없다고 생각했다.

`OPEN_MAX`의 경우 한계점이 존재하는 것은 사실이다. `limits.h`에 정의된 `OPEN_MAX`는 단순 정의일 뿐이고, 리눅스 버전에 따라 다르기도 하다. 또한 컴퓨터 환경에 따라 달라지는 실질적인 파일 디스크립터 수를 반영하지 못하며 bash 환경과 vscode의 터미널 상에서 파일 디스크립터 값을 확인했을 때 차이가 존재하는 것을 알 수 있다.

그렇지만 최종적으로 이 과제에서 더 중점으로 다뤄야 하는 것은 따로 있다고 생각하기 때문에 `OPEN_MAX`로 구현하더라도 그 한계지점과 그 한계지점을 찾기 위한 본인의 노력을 평가 시에 함께 어필한다면 충분히 통과할 수 있다고 생각한다.(개인적인 기준)

<br>

## 동적할당과 해제
메모리 누수를 막기위해서 동적으로 할당한 힙 영역의 메모리는 사용이 끝난 경우 해제해야 하는 것이 당연하다.
이때 아래 함수를 통해서 free를 조금 더 안전하고 유용하게 사용할 수 있다.
``` c
void	ft_free(void **target)
{
	if (target != NULL && (*target) != NULL)
	{
		free(*target);
		*target = NULL;
	}
}
```
메모리 해제 후 포인터를 NULL로 설정함으로써, 포인터의 `Dangling Pointer` 상태(해제된 메모리를 가르키는 상태)를 방지한다. 또한 이 과정을 통해 이미 할당 해제된 메모리 주소에 다시 접근하는 것을 방지할 수 있다.

<br>
<br>

# Mandatory
____

<img src="https://imgur.com/w1qsdXS.png" width="700">

<br>

### step 01
개행문자 `\n`을 만날 때까지 또는 `EOF`에 도달할 때까지 **BUFFER_SIZE** 만큼 읽어나간다.

### step 02
개행문자 전까지만 따로 분리해서 return을 준비한다.

### step 03
추후 **BUFFER_SIZE** 실행을 위해서 `main_buf`에 나머지 남은 문자열을 저장한다.

<br>

## Mandatory 구현

### get_next_line

``` c
char	*get_next_line(int fd)
{
	static char	*main_buf;
	char		*line;

	line = NULL;
	if (fd < 0 || BUFFER_SIZE <= 0)
		return (NULL);
	main_buf = read_line_fd(fd, main_buf); // step 01
	if (!main_buf)
		return (NULL);
	line = extract_line(main_buf); // step 02
	if (!line)
		return (ft_free(&main_buf));
	main_buf = ready_main_buf(main_buf); // step 03
	return (line);
}
```
`main_buf` 변수는 **static** 변수이기 때문에, 프로그램 실행 시 단 한 번 초기화 되며, 이후에 `get_next_line` 함수가 호출되어도 초기화되지 않고 이전에 저장된 값을 유지한다.

`read_line_fd`를 통해 개행 또는 EOF 전까지 **BUFFER_SIZE**만큼씩 파일을 읽는다.

읽은 내용은 `main_buf`에 저장되며, `extrac_line` 함수를 통해 개행 전까지 잘라 `line`에 담는다.

`read_main_buf`를 통해 `main_buf`를 정리(잘라낸 line을 없애고 나머지만 남김)하여 다음 호출을 대비한다.

<br>
<br>

# BONUS
____

본 과제를 **BONUS**까지 수행한다면,
위에서 언급한 것 처럼 우리가 만든 `get_next_line`이 여러 파일 디스트립터를 관리할 수 있어야 한다. 쉽게 말하면, **a.txt**를 읽다가 갑자기 **b.txt**을 읽을 수 있어야 한다는 것! 다시 **a.txt**로 읽기 위해 돌아갔을 때, 그 전에 어디까지 읽었는지 당연히 기억하고 있어야 한다.

아래는 `OPEN_MAX`를 통해 디스크립터 테이블만큼 배열을 만들어 정적 배열을 통해 여러 파일 디스크립터를 다루는 방법이다.

<br>

## BONUS 구현
``` c
char	*get_next_line(int fd)
{
	static char	*main_buf[OPEN_MAX];
	char		*line;

	line = NULL;
	if (fd < 0 || BUFFER_SIZE <= 0)
		return (NULL);
	main_buf[fd] = read_line_fd(fd, main_buf[fd]);
	if (!main_buf[fd])
		return (NULL);
	line = extract_line(main_buf[fd]);
	if (!line)
		return (ft_free(&(main_buf[fd])));
	main_buf[fd] = ready_main_buf(main_buf[fd]);
	return (line);
}
```

<br>
<br>

# Reference
____
- https://man7.org/linux/man-pages/man2/read.2.html
- https://www.gnu.org/software/libc/manual/html_node/Streams-and-File-Descriptors.html
- https://code-lab1.tistory.com/65


<br>
{{<alert>}}
<a href="https://elecbrandy.github.io/tags/42cursus"> 42cursus </a>
{{</alert>}}
<br>
