+++
title = '[42cursus] push_swap'
date = 2024-02-12
featured_image = "https://i.imgur.com/SdY8X4J.png"
tags = ['C', '42cursus']
draft = false
+++

> Because Swap_push isn’t as natural

<br>

# 소개
____
42서울 본과정 입과 후 네번째로 수행한 과제로, 스택에 있는 데이터를 한정된 명령어를 이용하여 최대한 적은 횟수 내에 정렬하는 것을 목표로 하는 과제이다.
상당히 아이러니한 과제이다. 스택이라고 명시되어있지만, 과제에서 요구하는 구조는 스택과는 거리가 멀고, 명령어도 한정되어있다.

또한 정렬 시 복잡도를 고려하는 것이 아니라 명령어 갯수만 어떻게든 줄여서 출력하면 ok를 받을 수 있다.

그렇다보니 가장 많이 쓰이는 방법이 그리디 알고리즘를 통해 모든 정렬 경우의 수를 먼저 체크하고, 명령어 수를 최적화하여 이후에 출력하는 것이다.
정렬 시 사용한 명령어 개수에 따라 점수가 달라질 수 있다. (**기수 정렬**도 하나의 방법!)

<br>
<br>

# push_swap 명세서
____
- **PROTOTYPE**
	- `push_swap`
- **DESCRIPTION**
	- **Mandatory part**
		- 데이터를 정렬하는 프로젝트
		- 과제에서 정렬해야하는 int 값들과 두 개의 스택, 그리고 이 스택을 조작하는 명령어 집합이 주어진다.
		- 최대한 명령어를 적게 사용해서, int 값들을 정렬해보자.
	- **Bonus part**
		- int 값이 잘 정렬되었는지 확인하는 checker 프로그램을 만드는 것.
		- `push_swap`을 구현하는 과정에서 자연스럽게 기능을 만들 수 있으므로 난이도가 낮다.
		- 단, **Mandatory part**가 100점으로 완벽해야 **Bonus part** 점수를 얻을 수 있다는 것 유념하자.

<br>
<br>

# 개념 정리
____
<img src="https://i.imgur.com/tOh91Wf.png" width="700">

## Swap 규칙
- `sa` : stack a의 상위 두 요소를 교환한다.
- `sb` : stack b의 상위 두 요소를 교환한다.

## Push 규칙
- `pa` : stack b의 상위 요소를 stack a의 상위로 보낸다.
- `pb` : stack a의 상위 요소를 stack b의 상위로 보낸다.

## Rotate 규칙
- `ra` : stack a의 최상위 요소를 stack a의 최하위로 보낸다.
- `rb` : stack b의 최상위 요소를 stack b의 최하위로 보낸다.
- `rra` : stack a의 최하위 요소를 stack a의 최상위로 보낸다.
- `rrb` : stack b의 최하위 요소를 stack b의 최상위로 보낸다.

<br>

## 기수정렬
해당 과제를 풀이하기 위한 알고리즘은 정말 다양하며, 나는 기수정렬을 사용했다.

기수정렬은 매 시행마다 각 기수(1의자리, 10의 자리, 100의 자리...)를 비교해가며 정렬하는 알고리즘이다.
때문에 기수정렬을 사용하기 위해서는 기수에 따라 잠시 숫자를 담기 위한 기수 종류 만큼의 박스가 필요하다.
10진수를 정렬하기 위해서는 0부터 9의 박스, 3진수를 정렬하기 위해서는 0부터 2의 박스, 2진수를 정렬하기 위해서는 0부터 1의 박스.

과제에서 제시한 스택을 살펴보면, 우리가 사용할 수 있는 공간은 스택이 2개라 단순히 2개인 것이 아니라, 활용에 따라 그 이상이 될 수 있음을 알 수 있다.
사실상 각 스택은 **위 아래가 뚫려있는 관**처럼 생겼기 때문에 스택 A의 위-아래, 스택 B의 위-아래로 생각해도 벌써 4개의 공간을 사용할 수 있다.
명령어를 통해서 숫자를 몇개 넘겼는지 추적한다면 공간을 4개 이상으로 사용할 수도 있을 것이다.

박스가 많아질수록 공간 복잡도가 높아지고 시간 복잡도는 줄어들겠지만, 박스를 늘릴 경우 요소의 이동과정에서 신경써야할 것이 많아진다.
또한 이번 과제의 최종 산출물은 시간 복잡도 측면에서 우수한 프로그램이 아니라 명령어 최적화를 통한 적은 명령어 수 출력이기 때문에 큰 기수를 가진 정렬은 논외로 했다. 최종적으로 2진수 기수정렬 (박스 2개 필요)와 3진수 정렬 (박스 3개 필요) 중에서 고민하다가 결국 **3진수 정렬**을 선택했다.

<br>
<br>

# Mandatory
____

### step 01 : 사전 최적화
결국 숫자를 순서대로 정렬하는 것이고, 3진수로 변환해야하기 때문에 인자의 크기는 작을수록 좋다.
인자의 크기가 커질수록 3진수로 변환된 길이는 길어질 것이고, 그만큼 비교-정렬 과정이 길어질 것이다.
그렇기 때문에 어떤 정수의 집합이 들어와도, 그것을 0부터 시작하는 집합으로 인덱싱 과정이 필요하다.  

만약 `123, 38, 234, -231, 0, 23, 11` 이 인자로 들어왔다면, `5, 4, 6, 0, 1, 3, 2` 로 바꾸어주자!

<br>

### step 02 : Hard sorting
``` c
void	ps_hardsort(t_head *head, int len)
{
	if (len == 2)
		ps_hardsort_2(head);
	else if (len == 3)
		ps_hardsort_3(head);
	else if (len == 4)
		ps_hardsort_4(head);
	else if (len == 5)
		ps_hardsort_5(head);
}
```
최적화가 끝났다면, 이제 인자가 적을 경우 더 나은 정렬을 위한 조치가 필요하다. 인자가 5개 이하일 경우 과제 요구사항을 충족하기 위해 나름의 하드 코딩을 진행했다. 우선 n-1 개를 정렬하고, 나머지 하나를 추가하는 방식으로 정렬했다.

<br>

### step 03 : 기수정렬

<img src="https://i.imgur.com/yiREh79.png" width="700">

#### 01
기수 0인 인자는 스**택 B**의 상위로, 기수가 1인 인자는 **스택 A**의 하위로, 기수가 2인 인자는 **스택 B**의 하위로 보내준다.  

#### 02
0, 1, 2 기수에 따라 분류가 완료되었다면, 이제 다음 자리수의 기수 비교를 위해 나눠진 인자들을 다시 한 공간에 모아야 한다.
흩어진 인자를 **스택 A**에 다시 모아주자. 이때 순서는 기수 0, 기수 1, 기수 2 순으로 유지한다. **스택 B**의 상위에 모아두었던 기수 0 모음을 **스택 A**의 상위로 옮겨주자.  

#### 03
그렇다면 현재 **스택 A**에 기수 0 모음, 기수 1 모음 순으로 정렬되어 있을 것이다. 이제 나머지 기수 2 모음을 **스택 A**의 하위로 옮겨주자.
최종적으로 **스택 A**에 기수 순으로 정렬이 완료 되었다. 이제 다음 자릿수 비교를 반복하자. 다시 step 1로!

<br>

## Mandatory 구현

### ps_radixsort

``` c
void	ps_radixsort(t_head *head, int len, int trlen)
{
	int		i;
	int		j;
	int		cnt_0;
	int		cnt_2;
	t_node	*a_cur;

	if (!(head->a) || !(head->b))
		return ;
	j = trlen - 1;
	while (j >= 0)
	{
		a_cur = head->a->next;
		cnt_0 = 0;
		cnt_2 = 0;
		i = 0;
		while (i < len && a_cur && j >= 0)
		{
			ps_div_radix(a_cur->num_tr[j], head, &cnt_0, &cnt_2);
			a_cur = head->a->next;
			i++;
		}
		ps_merge_0(head, cnt_0);
		ps_merge_2(head, cnt_2);
		j--;
	}
}
```
기수에 따라 나누고 (`ps_div_radix`), 다시 합치는 (`ps_merge_n`) 과정에서 명령어 구성은 사실상 변하지 않는다.
이때 0그룹과 1그룹의 위치를 어디에 놓아야 명령어 갯수가 최적화 되는지 다양하게 살펴보자. 0부터 1000까지 정수를 3진수로 변환했을때
각각 기수 0의 갯수, 1의 갯수, 2의 갯수를 카운트하는 것도 도움이 될 수 있다.

<br>

### main
``` c
int	main(int ac, char **av)
{
	t_input	*input;
	t_head	*head;

	if (ac == 0 || ac == 1)
		return (0);
	head = init_head();
	input = init_input();
	if (!head || !input)
	{
		ps_free_all(&input, &head);
		return (0);
	}
	input->arr = ps_set_input((const char **)av, input);
	if (!(input->arr))
	{
		ps_free_all(&input, &head);
		return (0);
	}
	ps_set_stack(&(head->a), input);
	if (2 <= input->len && input->len <= 5)
		ps_hardsort(head, input->len);
	else
		ps_radixsort(head, input->len, input->trlen);
	ps_free_all(&input, &head);
	return (0);
}
```

<br>
<br>

# Reference
____
- [wiki] https://buly.kr/6tZknhQ
- [tistory] https://buly.kr/CshW9Qu
- [velog] https://velog.io/@blank_/PushSwap-Radix-Sort

<br>
{{<alert>}}
<a href="https://elecbrandy.github.io/tags/42cursus/"> 42cursus</a>
{{</alert>}}
<br>
