+++
title = '[자료구조] Queue'
date = 2024-09-05
featured_image = "https://programmercave.com/assets/images/Memes-Linkedlist/llmeme1.jpg"
tags = ['C++', 'dataStructure', 'CS101']
+++

**📂 : 자료구조**
____
> <a href="https://elecbrandy.github.io/tags/dataStructure/list"> **[0]** List </a>  

> <a href="https://elecbrandy.github.io/tags/dataStructure/stack"> **[1]** Stack </a>  

> <a href="https://elecbrandy.github.io/tags/dataStructure/queue"> **[2]** Queue </a>  

> <a href="https://elecbrandy.github.io/tags/dataStructure/heap"> **[3]** Heap </a>  

> <a href="https://elecbrandy.github.io/tags/dataStructure/tree"> **[4]** Tree </a>  

> <a href="https://elecbrandy.github.io/tags/dataStructure/graph"> **[5]** Graph </a>  

> <a href="https://elecbrandy.github.io/tags/dataStructure/hashtable"> **[6]** HashTable </a>  

<br>
<br>

# List
____
List는 순서가 있는 데이터의 집합을 나타내는 가장 기초적인 자료구조 중 하나로, 배열(array)과의 근본적인 차이는 동적 크기 변화와 복잡한 데이터 구조를 지원하는 것이다. List는 CS에서 다양한 형태로 존재하며, 대표적으로 배열 리스트(Array List)와 연결 리스트(Linked List)가 존재한다.

## Array List
``` C++
std::vector<int> vec;  // 동적 크기를 갖는 배열 리스트
vec.push_back(1);      // 새로운 요소 추가
```
Array List는 연속적인 메모리 공간에 데이터를 저장하는 방식이다. 이는 인덱스를 통한 빠른 접근 속도(시간 복잡도 O(1))가 특징이지만, 크기를 미리 지정해야 하는 제약이 있다. 만약 리스트가 가득 차면 새로운 더 큰 메모리 공간을 할당하고, 기존 요소를 복사하는 과정을 거쳐야하며 이 복사 작업의 평균 시간 복잡도는 O(n)이다. 대표적인 예시로 `vector`를 들 수 있다.  

기존 크기가 10인 Array list에 요소를 한가지 더 추가한다면, 내부적으로 11의 공간을 할당한 후, 기존 데이터를 복사한 다음 요소를 추가하는 작업이 존재한다. 물론 일반적으로는 배열 크기를 증가 시킬 때 10 -> 11 처럼 좀좀따리가 아니라 두배정도 증가시켜 추가 연산을 어느정도 제한하고 있다.

<br>

## Linked List
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20220829110944/LLdrawio.png" width="700">

**Linked List**는 선형 데이터 구조로, 요소가 연속된 메모리 위치에 저장되어있지 않다. 즉, 일반 배열 처럼 `a[i]`의 다음 주소에 `a[i + 1]`이 무조건적으로 존재하지 않는다. 이 각 요소는 포인터를 사용해서 연결되어 있다.  

보통 각 요소를 하나의 노드라고 칭하며, 각 노드는 **데이터**부분과 다음 노드의 주소가 담긴 **포인터**부분으로 구성되어 있다. 이때 각 노드가 다음 노드 뿐만 아니라 이전 노드의 주소도 담고 있게 만들어 활용할 수 있다. 혹은 마지막 노드가 첫번째 노드의 주소를 담고 있게 하면 Circular Linked List(원형 연결 리스트)로도 구현이 가능하다.  

첫번째 노드의 주소가 담긴 HEAD의 경우 노드 구조와 별개로 포인터를 따로 두거나, 더미노드(데이터 부분이 비어있는 노드)로 만드는 방법이 존재한다.  

전체적으로 활용도가 높기 때문에, Linked List를 이용해서 여러가지 자료구조를 구현할 수 있다. `C++`의 STL의 경우 다양한 자료구조를 Linked List를 이용해 구현해놓았다!  

Linked List는 노드의 포인터를 통해 연결을 관리하기 때문에 자료의 추가나 삭제가 매우 용이하다. 그러나 자료 조회 측면에서는 배열에 비해 많은 자원이 소모된다. 배열은 인덱스를 통해 원하는 정보에 바로 접근할 수 있지만, Linked List는 조회를 위해 처음 노드부터 하나하나 순회하면서 조건에 맞는 노드를 찾아야하기 때문이다.  

## Linked List 구현
``` C
```
**Linked List**를 실제로 구현해보자.

<br>
<br>

# Reference
____
- https://www.geeksforgeeks.org/linked-list-data-structure/
- https://code-lab1.tistory.com/2

<br>
{{<alert>}}
<a href="https://elecbrandy.github.io/tags/dataStructure"> 자료구조 </a>
{{</alert>}}
<br>
