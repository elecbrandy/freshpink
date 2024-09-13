+++
title = '[기초통계] 01'
date = 2024-06-04
featured_image = "https://64.media.tumblr.com/f3d68e23f22d838acfecbb3ba63e54fb/ca332e19c19528dd-05/s640x960/19d6054e78181fa162efdceed5348572fd06ce15.jpg"
tags = ['C', '42cursus']
draft = true
+++

> As beautiful as a shell

<br>

# 소개
____
<img src="https://imgur.com/2R4ZmUq.png" width="700">

42서울 본과정 입과 후 여덟번째로 수행한 과제로, 작은 크기의 shell을 구현하는 과제이다. 우리는 이제 간단한 빌트인 함수부터 여러 명령어를 수행할 수 있는 **minishell**을 만들어야 한다. 너무 큰 shell을 만들기 위해서 노력하다가 블랙홀에 빠지지 않게 조심하자!  

<br>

# minishell 명세서
____
- **PROGRAM NAME**
	- `minishell`
- **PARAMETER**
	- `commands...`
- **DESCRIPTION**
	1. **명령 대기 중 프롬프트 표시**
		- 새 명령을 기다릴 때 프롬프트를 표시해야함!

	2. **작업 이력 관리**
		- 이전 명령의 작업 이력을 관리할 수 있어야 함!
	
	3. **실행 파일 검색 및 실행**
		- `PATH` 변수를 기반으로 올바른 실행 파일을 검색하고 실행해야하고, 상대 경로나 절대 경로를 사용할 수 있어야 한다.
	
	4. **신호 처리**
		- **전역 변수 사용**은 오로지 하나!
	
	5. **해석하지 말아야 할 항목**
		- 닫히지 않은 인용부호(따옴표)나 주제와 관련 없는 특수 문자(`\`, `;`)는 해석하지 않아야 함...
	
	6. **따옴표 처리**
		- **싱글 쿼트**(`'`): 인용된 시퀀스에서 메타문자가 해석되지 않도록 해야 하고, **더블 쿼트**(`"`): `$`를 제외한 메타문자가 해석되지 않도록 해야 한다.
	
	7. **리디렉션 구현**:
		- `<`: 입력을 리디렉션
		- `>`: 출력을 리디렉션
		- `<<`: 구분자를 지정한 다음, 구분자를 포함한 줄을 읽을 때까지 입력을 받아야 함. (이 작업은 이력에 기록되지 않아야 한다.)
		- `>>`: 출력을 추가 모드로 리디렉션

	8. **파이프라인 구현**
		- `|` 문자: 각 명령의 출력을 다음 명령의 입력으로 연결해야 함.

	9. **환경 변수 처리**
		- `$`로 시작하는 문자열은 해당 값으로 확장되어야 함.

	10. **특수 변수 처리**
		- `$?`: 최근에 실행된 포그라운드 파이프라인의 종료 상태로 확장되어야 함.

11. **특수 키 처리**:
	- `Ctrl-C`: 새로운 줄에 새 프롬프트를 표시해야 함.
	- `Ctrl-D`: 셸을 종료해야 함.
	- `Ctrl-\`: 아무런 동작도 하지 않아야 함.

12. **built-in 구현**:
	- `echo` 옵션 `-n` 지원
	- `cd` 상대 경로 또는 절대 경로만 지원
	- `pwd` 옵션 없이 지원
	- `export` 옵션 없이 지원
	- `unset` 옵션 없이 지원
	- `env` 옵션이나 인수 없이 지원
	- `exit` 옵션 없이 지원

<br>

# 개념 정리
___

## Shell
**Shell**은 사용자가 OS와 상호작용할 수 있도록 해주는 프로그램이다. 사용자가 명령어를 입력하면 이를 OS가 이해할 수 있도록 해석하고, 그에 따른 작업을 수행한다. Shell은 커맨드 라인 인터페이스를 제공하며, 사용자의 명령어를 **읽고-해석하고-실행하고-결과를 출력**한다.  

shell에는 Bash, Zsh 등등 다양한 종류가 존재한다. 이때 Bash는 가장 널리 사용되는 shell이고, 클러스터 맥에 설치되어있는 기본 shell 이기도 하다. bash의 동작을 잘 뜯어보면서 과제를 수행해보자.

<br>

## 환경 변수
**환경 변수**는 운영 체제에서 프로그램이 실행되는 동안 사용할 수 있는 변수이다. 이 변수들은 시스템 전체에 걸쳐 정보를 전달하거나 설정을 저장하는 데 사용된다. 환경 변수는 주로 시스템 경로, 사용자 정보, 설정 정보 등을 담고 있다.

<br>

## built-in
과제 상 구현해야하는 **built-in** 함수의 정체는 무엇일까?  

Shell에서 **built-in** 함수란 Shell 자체에 내장된 명령어 또는 기능을 의미한다. 이러한 함수는 별도의 외부 프로그램을 실행하지 않고, Shell 자체에서 직접 수행된다. 이는 특정 작업을 보다 빠르게 수행할 수 있게 하며, Shell 스크립트에서 자주 사용되는 기본적인 작업들을 처리하는 데 유용하다.  

이 말은 즉슨, 해당 함수들은 환경변수 PATH가 변경되거나 망가지는 일이 있어도 정상적으로 동작해야한다는 점!  

<br>
<br>

# Mandatory
____

이번 과제는 2인이 협동해야하는 팀 과제이다! 주로 역할분배는 **명령어 파싱부**와 **실행부**로 구분하곤 한다.  

명령어 파싱의 경우 bonus를 고려하지 않으면 주로 연결리스트로 관리를 하고, bonus를 고려할 경우 트리형태로 관리한다. 실행부의 경우 이전 과제인 **pipex**와 사실상 유사하기 때문에 익숙한 작업이 주를 이룬다.  

우리 팀의 경우 내가 `실행부 + 빌트인함수`를 맡았고, 함께한 `dongeunk` 님이 `파싱부 + here_doc 등`을 맡았다. `파싱부 + here_doc` 부분이 예외처리 부분이 상당히 많다. 팀원분이 상당히 수고해주셔서.. 너무 고생하셨고 대단하심.  

이에 따라, 이번 과제 정리는 내가 담당한 빌트인 함수만 주로 다루어보고자 한다. (실행부는 **pipex**와 유사)

<br>

## built-in 구현

### `ft_cd`

``` c
void	ft_cd(t_env **env, t_node *node)
{
	int	error;

	if (ft_arrlen_2d(node->cmd) == 1)
	{
		error = cd_withoutarg(env);
		ft_cd_error(error, node->cmd[1]);
	}
	else
	{
		error = cd_witharg(env, node, node->cmd[1]);
		ft_cd_error(error, node->cmd[1]);
	}
}

static int	cd_withoutarg(t_env **env)
{
	t_env	*cur;

	cur = is_env(*env, "HOME");
	if (!cur)
		return (1);
	else
	{
		if (ft_strncmp(cur->cmd, "HOME", ft_strlen(cur->cmd)) == 0)
			return (1);
		else if (ft_strncmp(cur->cmd, "HOME=", ft_strlen(cur->cmd)) == 0)
			return (move_path(env, "."));
		else
			return (move_path(env, cur->value));
	}
	return (0);
}

static int	cd_witharg(t_env **env, t_node *node, char *path)
{
	int		error;

	if ((ft_strlen(path) == 1 && path[0] == '~') \
	|| (ft_strlen(path) == 1 && path[0] == '-'))
		error = 2;
	else
		error = check_path(node->cmd[1]);
	if (error != 0)
		return (error);
	return (move_path(env, node->cmd[1]));
}

static int	move_path(t_env **env, char *path)
{
	char	*cur_path;
	char	*pre_path;

	if (!env)
		return (1);
	pre_path = getcwd(NULL, 0);
	if (chdir(path) == -1)
		return (12);
	if (!pre_path)
		return (12);
	cur_path = getcwd(NULL, 0);
	if (!cur_path)
	{
		ft_free((void **)&pre_path);
		return (12);
	}
	if (update_pwd(env, cur_path) == FALSE)
		return (12);
	if (update_oldpwd(env, pre_path) == FALSE)
		return (12);
	ft_free((void **)&pre_path);
	ft_free((void **)&cur_path);
	return (0);
}
```

bash에서의 `cd`

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
