+++
title = '[42cursus] pipex'
date = 2024-02-28
featured_image = "https://i.imgur.com/TqbaZ79.png"
tags = ['C', '42cursus']
+++

> Cristina: "Go dance salsa somewhere :)"

<br>

# 소개
____
42서울 본과정 입과 후 다섯번째로 수행한 과제로, UNIX 동작 원리를 프로그래밍을 통해 상세히 파헤쳐보는 과제이다.
Shell에서의 파이프를 구현하는 과제이며 Redriection, File discriptor, Process, Pipe, Fork 등을 공부할 수 있다.

<br>
<br>

# pipex 명세서
____
## Mandatory part
- `pipex`는 `./pipex file1 cmd1 cmd2 file2` 형태로 실행된다.
- file1과 file2는 파일 이름이다.
- cmd1과 cmd2는 매개 변수가 존재하는 쉘 명령어이다.
- 프로그램은 `< file1 cmd1 | cmd2 > file2` 명령과 동일하게 작동해야 한다.
- 즉, file1을 input으로 받아 cmd1를 실행하고, 그 결과를 파이프를 통해 cmd2로 넘긴 후 output인 file2로 내보낸다.

## Bonus part
- **Bonus part**에서는 다중 파이프와 here_doc를 구현해야 한다.
- **다중 파이프**
	- pipex : `./pipex file1 cmd1 cmd2 cmd3 ... cmdn file2`
	- bash : `< file1 cmd1 | cmd2 | cmd3 ... | cmdn > file2`
- **here_doc**
	- pipex : `./pipex here_doc LIMITER cmd cmd1 file`
	- bash : `cmd << LIMITER | cmd1 >> file`

<br>
<br>

# 개념 정리
___
## Redirection
redirection은 shell에서 입력과 출력의 흐름을 재지정하는 프로세스이다. 기본적으로 커맨드는 표준 입력(stdin), 표준 출력(stdout), 그리고 표준 에러(stderr)라는 세 가지 주요 통신 채널을 사용한다. 리디렉션을 사용하면 이러한 통신 채널을 파일이나 다른 프로그램으로 전환할 수 있다. 유닉스 및 리눅스 기반 시스템에서 매우 강력한 도구로 시스템 관리, 스크립팅 및 데이터 관리에 유용하다.

- 표준 입력 : 커맨드에 데이터를 입력하기 위한 주요 수단으로, 기본적으로 키보드에서 입력 (stdin)
- 표준 출력 : 커맨드의 결과를 출력하는 채널로, 기본적으로 터미널 화면에 결과를 표시 (stdout)
- 표준 에러 : 에러 메시지나 진단 정보를 출력하는 데 사용되며, 이것 역시 기본적으로 터미널 화면에 표시 (stderr)

``` bash
# ls 커맨드의 출력을 filelist.txt 파일로 Redirection
ls > filelist.txt

# filelist.txt 파일의 내용을 sort 커맨드의 입력으로 Redirection
sort < filelist.txt

# 에러 메시지를 errorlog.txt로 Redirection
rm somefile.txt > errorlog.txt
```

<br>

## Here Documents
Here Document(here_doc)는 커맨드에 여러 줄의 입력을 직접 제공할 수 있는 Redirection 방법이다.
``` bash
cat << EOF
여러 줄의 텍스트
EOF
```

<br>

## Pipeline
Shell에서의 파이프라인은 커맨드 간의 데이터 스트림을 연결하는 데 사용된다.
이를 통해 한 커맨드의 출력을 다른 커맨드의 입력으로 직접 전달할 수 있으며, 복잡한 데이터 처리 작업을 효율적으로 수행할 수 있다.
기본적으로 여러 커맨드를 연결하여 첫 번째 커맨드의 출력을 두 번째 커맨드의 입력으로 전달하는 메커니즘이다.

파이프라인을 통해 연결된 각 프로세스는 별도의 프로세스로 실행되며, 이들 사이에서 데이터는 파이프라인을 통해 흐른다.
각 프로세스는 데이터를 비동기적으로 읽고 쓰며, 이는 서로의 실행을 차단하고, 병렬적이다.

**병렬실행** 이란 각 커맨드가 앞 또는 뒤의 프로세스의 종료를 기다리지 않고, 독립적으로 실행되는 것을 의미한다.
각 커맨드는 실행과 동시에 파이프에 읽기와 쓰기를 진행하며, 정보는 실시간으로 이동한다.

<br>

## EOF (End of File)
한 프로세스가 파이프를 통해 데이터를 보내고 모든 데이터를 전송한 후 출력 스트림을 닫으면, 다음 프로세스는 더 이상 읽을 데이터가 없다는 것을 인지할 때까지 데이터를 계속 읽는다. 마지막 데이터를 읽고 나서 다시 읽기 시도를 할 때, 시스템은 더 이상 데이터가 없다는 신호인 **EOF**를 반환한다. **EOF**는 오류나 예외 상황이 아니고, 단지 데이터 스트림의 끝을 나타낸다. **EOF**에 도달한 프로세스는 일반적으로 데이터 처리를 마치고 종료한다.

<br>

## SIGPIPE
한 프로세스가 더 이상 데이터를 받지 않는 파이프에 데이터를 쓰려고 할 때 발생한다. 예를 들어, 한 프로세스가 종료되거나 파이프의 읽기 측면을 닫았는데, 다른 프로세스가 여전히 그 파이프에 데이터를 쓰려고 시도하면 SIGPIPE 시그널이 발생한다. 기본적으로 SIGPIPE 시그널은 해당 프로세스를 종료시키는데, 이는 데이터를 읽을 프로세스가 없는데도 데이터를 쓰려고 시도하는 것이 무의미하기 때문이다.

<br>

## EOF와 SIGPIPE의 차이점
- **읽기 vs 쓰기**
	- EOF는 데이터를 읽는 동작과 관련이 있다. 모든 데이터를 읽고 나서 더 이상 읽을 데이터가 없을 때 발생한다.
	- 반면, SIGPIPE는 데이터를 쓰는 동작과 관련이 있다. 읽을 대상이 없는데도 데이터를 계속 쓰려고 할 때 발생한다.
- **정상 종료 vs 비정상 종료**
	- EOF는 정상적인 데이터 스트림의 종료를 나타내며 오류가 아니다.
	- SIGPIPE는 예상치 못한 상황에서 발생하는 오류 상태를 나타내며 기본적으로 프로세스를 종료시킬 수 있다.

<br>

## Pipeline 작동
### Case 01
``` bash
cat a.txt | grep A | sort
```
각 커맨드는 실행되자마자 자신의 역할을 수행한다. 각 명령어는 독립적으로 실행되며, 설정된 파이프를 통해 데이터를 지속적으로 읽고 쓴다.
- **cat** 이 실행을 마치고 출력을 모두 첫 번째 파이프에 쓴 후, EOF(End of File) 신호를 보낸다. 이는 **cat** 프로세스의 종료를 의미한다.
- **grep** 은 첫 번째 파이프에서 EOF 신호를 받고, 더 이상 읽을 데이터가 없음을 인지하고 종료된다.
- **sort** 또한 두 번째 파이프에서 EOF 신호를 받아 읽을 데이터가 없음을 인지하고 종료된다.

<br>

### Case 02
``` bash
cat | cat | ls
```
각 커맨드는 실행되자마자 자신의 역할을 수행한다.
- **ls** 는 출력만 하기 때문에 바로 결과물을 출력하고 종료된다.
- **ls** 가 종료됨으로써 두 번째 파이프의 한쪽 끝이 닫힌다.
- 이후 쉘은 첫 번째와 두 번째 **cat** 프로세스가 살아있기 때문에 사용자의 입력을 기다린다.
- 사용자의 shell 을통한 첫 번째 입력은 두 번째 **cat** 에 전달된다.
- 두 번째 **cat** 은 입력을 받은 후 두 번째 파이프에 쓰려고 하지만, 해당 파이프의 한쪽 끝이 이미 닫혀 있어 `SIGPIPE` 신호가 발생하고 종료된다.
- 첫 번째 **cat** 또한 입력을 받은 후 첫 번째 파이프에 쓰려고 하지만, 이 파이프의 한쪽 끝도 이미 닫혀 있어 `SIGPIPE` 신호가 발생하며 종료된다.

<br>

### Case 03
```bash
yes | head -n 1
```
각 커맨드는 실행되자마자 자신의 역할을 수행한다.
- **yes** 는 `y\n`을 계속해서 출력하게 작동한다.
- **head -n 1** 은 파이프를 통해 전달된 yes의 출력을 읽는다. 이때 옵션에 따라 첫번째 줄만 출력하고 종료한다.
- **head** 가 종료되면서 파이프 읽기 끝이 닫힌다.
- **yes** 는 계속해서 파이프에 쓰려고하지만, 해당 파이프의 한쪽 끝은 이미 닫혀있어 `SIGPIPE` 신호가 발생하고 종료된다.

<br>
<br>

# Mandatory
____
<img src="https://i.imgur.com/s1coAtk.png" width="700">

<br>

### step 01 : Redirection 조절
기본적으로 infile과 outfile이 존재해야하므로, 각각의 파일을 `open` 한다.
이어서 `dup` 또는 `dup2` 함수를 통해서 입출력을 조절하고, `close` 를 통해 fd 테이블을 정리한다.

```C
int	open_file(char **av, t_data *data)
{
	data->infile = open(av[1], O_RDONLY, 0644);
	if (data->infile == -1)
		return (0);
	data->outfile = open(av[4], O_WRONLY | O_CREAT | O_TRUNC, 0777);
	if (data->infile == -1)
	{
		close_file(data);
		return (0);
	}
	return (1);
}
```

<br>

### step 02 : Pipeline 생성과 fork
Mandatory는 단순히 두 커맨드 사이의 상호작용, 즉 두 자식 프로세스의 통신을 구현하는 것이다.
부모에서(main) pipe를 열고 자식 프로세스 2개를 fork 하면, 해당 자식 프로세스들은 pipe를 통해 통신이 가능하다.

```C
// 프로세스 관리 함수
void	pipex_process(char **av, char **envp, t_data *data)
{
	child_01(av, envp, data);
	child_02(av, envp, data);
	if (close_pipe(data) == 0)
		print_error(NULL);
	if (close_file(data) == 0)
		print_error(NULL);
	wait_process(2);
	return ;
}

// 첫번째 자식 프로세스 함수
static void	child_01(char **av, char **envp, t_data *data)
{
	pid_t	pid;

	pid = fork();
	if (pid == -1)
		print_error(NULL);
	else if (pid == 0)
	{
		if (access(av[1], F_OK) == -1 || access(av[1], R_OK) == -1)
			print_error(NULL);
		dup2(data->infile, STDIN_FILENO);
		dup2(data->pipe[1], STDOUT_FILENO);
		if (close_pipe(data) == 0 || close_file(data) == 0)
			print_error(NULL);
		cmd_execve(av[2], envp);
	}
	else
		return ;
}

// 마지막 자식 프로세스 함수
static void	child_02(char **av, char **envp, t_data *data)
{
	pid_t	pid;

	pid = fork();
	if (pid == -1)
		print_error(NULL);
	else if (pid == 0)
	{
		if (av[4] == NULL || access(av[4], W_OK) == -1)
			print_error(NULL);
		dup2(data->pipe[0], STDIN_FILENO);
		dup2(data->outfile, STDOUT_FILENO);
		if (close_pipe(data) == 0 || close_file(data) == 0)
			print_error(NULL);
		cmd_execve(av[3], envp);
	}
	else
		return ;
}
```

<br>
<br>

# Bonus
____

Bonus 부분에서는 다중 파이프를 구현해야한다. 두가지 선택지가 존재한다. 첫번째 동적할당으로 필요한만큼 파이프 fd를 사용하는 것, 두번째는 fd값을 재활용하는 것.
전자의 경우 데이터 흐름을 이해하기 쉽지만 그만큼 자원이 많이 들어가기 때문에 이후 과제인 minishell을 생각하면 피하는게 좋아보인다. 따라서 나는 후자를 선택했다.
(기본적으로 Redirection 조절 등은 Mandatory와 유사하다.)

다음 자식이 어느 파이프에 읽어야하는지를 부모에서 잠시 기억해준다고 생각하자.
이해 과정에서 너무 헷갈려서 최대한 상세히 정리했다.

### step 01

<img src="https://i.imgur.com/FpX35wF.png" width="700">

1. 부모 프로세스인 상태에서, pipe를 하나 연다.
2. 부모 프로세스는 이제 pipe1의 읽기와 쓰기 끝 주소를 모두 알고 있는 상태이다.

<br>

### step 02

<img src="https://i.imgur.com/8I9BFHE.png" width="700">

1. pipe1의 읽기와 쓰기 끝을 아는 상태에서 `fork()`하고, `dup2`를 통해 자식 프로세스가 pipe1의 쓰기 끝에 쓰게한다.
2. 이때 부모 프로세스는 `dup2`를 통해 pipe1의 읽기 끝 주소를 fd table 0번에 잠시 기억하게 한다. 이는 다음 자식 프로세스가 데이터를 읽어와야할지 알려주기 위함이다.
3. 각각의 프로세스에서 쓸모없어진 fd를 닫는다.

<br>

### step 03

<img src="https://i.imgur.com/6HHkOA9.png" width="700">

1. pipe1의 읽기 끝을 아는 상태에서 `fork()`하고, `dup2`를 통해 자식 프로세스가 pipe2의 쓰기 끝에 쓰게한다.
2. 이때 부모 프로세스는 `dup2`를 통해 pipe2의 읽기 끝 주소를 fd table 0번에 잠시 기억하게 한다. 이는 다음 자식 프로세스가 데이터를 읽어와야할지 알려주기 위함이다.
3. 각각의 프로세스에서 쓸모없어진 fd를 닫는다.

<br>

### step 04

<img src="https://i.imgur.com/c1jOzry.png" width="700">

최종적으로 자식 프로세스는 자신이 읽어야할 파이프의 위치, 써야할 파이프의 위치를 모두 알고 있는 상태에서 작동하며, 각각의 자식 프로세스는 **병렬**로 작동한다는 점!

<br>
<br>

# Reference
____
- https://man7.org/linux/man-pages/man2/pipe.2.html
- https://www.gnu.org/software/libc/manual/html_node/Creating-a-Pipe.html
- https://nomad-programmer.tistory.com/110
- https://www.youtube.com/watch?v=bKzonnwoR2I
- https://www.youtube.com/watch?v=uHH7nHkgZ4w

<br>
{{<alert>}}
<a href="https://elecbrandy.github.io/tags/42cursus/"> 42cursus</a>
{{</alert>}}
<br>
