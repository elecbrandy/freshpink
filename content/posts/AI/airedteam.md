+++
title = '생성형 AI 레드팀 챌린지'
date = 2024-04-11
featured_image = "https://orgthumb.mt.co.kr/06/2024/03/2024032815132786760_1.jpg"
tags = ['AI', '42cursus']
draft = true
+++

> AI 안전과 신뢰, 그리고 레드팀

<br>

# 01 소개
<img src="https://user-images.githubusercontent.com/87311268/221544778-c85cb3d8-32f4-4919-aa1c-0db54b33b38a.jpg" width="700">

과학기술정보통신부 주최로 개최한 '생성형 AI 레드팀 챌린지'는 국내 생성형 AI 모델을 대상으로 사용자의 프롬프트 공격을 방어하기 위해 잠재적 위험 요소를 식별하기 위한 프로그램이다. 생성형 AI가 사용자의 프롬프트의 내용에 따라 부적절한 내용(인종차별, 혐오, 잘못된 정보 등)을 생성할 수 있다. 때문에 기업에서는 이를 방어하고자 레드팀을 꾸려 시스템의 취약점과 결함을 찾고자 노력하고 있으며, 정부 차원에서 받아들여


<br>

# 02 `Born2beroot` 개념 정리

## 운영체제
Operating System은 응용 프로그램 또는 사용자에게 컴퓨터 자원을 사용할 수 있는 인터페이스를 제공하고, 그 결과를 돌려주는 시스템 소프트웨어이다. CPU, Memory, 저장장치 등의 하드웨어를 관리하고 Process 관리, 자원 접근 및 할당, 파일 시스템을 관리한다.

<br>

# Virtual Machine(VM)
하나의 컴퓨터 안에서 여러 개의 독립된 환경을 만들어 내는 것으로 물리적 하드웨어 시스템 위에 구축되는 소프트웨어 기반의 컴퓨터이다. 자체적인 OS, CPU, Memory, Network interface, 저장장치 등을 가지고 있고, Hypervisor를 통해 하드웨어에서 VM의 소스를 분리하고 적절히 프로비저닝하여 VM에서 사용할 수 있게 만든다.
### VM 장점
완벽한 격리 보안, 대화형 개발, 스냅샷 기능 등
### VM 단점
온전한 OS를 부팅, 운영, 관리해야하므로 속도가 느리고 호스트 컴퓨터에서 디스크 공간 부족 문제가 발생할 수 있다.

<br>

# Debian
다양한 환경에서 광범위 하게 사용되는 운영체제로, 다양한 소프트웨어 패키지를 제공한다.
커뮤니티 중심으로 개발되는 프로젝트이며, 자유 소프트웨어 원칙을 강력히 지지하는 것이 특징! 패키지 관리자로 Package management tools, 보안 모듈로 AppArmor를 사용한다.

# Package management tools
Linux의 패키징 시스템을 관리하는 도구 모음으로 패키지 설치, 업그레이드, 제거 등을 자동화하여 쉽게 관리 가능하다. 특정 소프트웨어가 필요로 하는 모든 추가 패키지를 자동으로 파악하고 설치함으로써 의존성 문제를 해결했다. **Debian과 Rocky 사이의 Package management tools의 차이점을 더 공부해보자 :)**

# AppArmor
시스템 관리자가 개별 응용프로그램이 엑세스 할 수 있는 시스템 리소스와 권한을 제어 할 수 있게 하는 Linux Kernel 보안 모듈로 MAC(Mandatory Access Control) 방식을 통해 사전에 정의된 규칙(Profile)에 기반하여 권한을 제어한다. 즉, 특정 프로그램이 파일/네트워크/기타 시스템 자원에 접근하는 방식을 경로를 통해 구분한다. 타 모듈에 비해 간단한 설정이 장점이지만, 단순한만큼 복잡한 보안 요구 사항을 충족시키지 못할 수 있으며 Profile 로딩 시간 때문에 시스템 시작 속도에 영향을 미칠 수 있다. 또한 동일 어플리케이션에 대하여 여러 경로가 존재할 수 있기 때문, 한 프로그램에 대하여 여러 보안 Profile이 생성될 수 있다. **그렇다면 AppArmor가 없었던 시절에는 어떻게 관리했을까?**

# Sudo
Sudo(Superuser do)는 Unix 및 Linux 기반 시스템에서 슈퍼유저 또는 root 권한으로 명령을 실행할 수 있게 해주는 프로그램이다. 일반 사용자에게 관리자(루트) 권한으로 명령을 실행할 수 있는 권한을 제한적으로 부여하여 루트 사용자로의 지속적인 로그인을 방지하고, 보안 위험을 줄일 수 있다. 또한 루트 권한으로 실행된 모든 명령과 사용자를 기록 가능해 시스템 관리, 감시 추적 등이 용이하다. **sudo log를 어디서 확인 할 수 있을까?**

<br>

# TTY
TTY(Tele Type Writer)는 컴퓨터와 연결된 가상의 터미널로 한 컴퓨터를 여럿이서 사용하기 위해 (물리적 한계 극복) 사용했으며 현재 UNIX 시스템에서 터미널 역할을 수행한다. 텍스트 기반 인터페이스와 다중 터미널 세션 기능, 원격 접속과 시스템 관리 및 표준 입출력 관리가 특징이다. 이때 Sudo가 TTY를 요구한다는 것은 Sudo 명령어를 사용자가 직접 터미널 세션에서 입력해야만 SUdo 권한을 사용할 수 있다는 것을 의미한다. **이것이 왜 필요한지 공부해보자!**

<br>

# UFW
UFW(Uncomlicted FireWall)은 사용자 친화적인 방화벽 관리 인터페이스로 기존 iptables의 복잡성을 단순화 시켰으며 주로 입출력 트래픽을 제어하고, 원하지 않는 네트워크 접근을 차단하기 위해 사용한다.

<br>

# SSH
SSH(Secure SHell) 이란 컴퓨터가 같은 public network를 통해 통신 시 보안적으로 안전하게 통신을 하기 위한 프로토콜으로 보안적으로 안전한 채널을 구축한 뒤 정보를 교환하는 방식(키 기반의 인증 / 암호화)이다. S**SH의 작동원리 두가지 (대칭키 암호화, 비대칭키 암호화)와 키 검증 방식을 공부해보자!**

<br>

# Linux Partition
- **Primary Partition**
	- (주, 기본 파티션)
	- disk를 Logical하게 분할하는 가장 기본적인 방법 중 하나
	- MBR 시스템에서 최대 4개의 기본 Partition을 가질 수 있으며, GPT 기반 시스템에서는 이보다 많은 기본 Partition을 지원함
- **Extended Partition**
	- (확장 파티션)
	- MBR의 기본 Partition의 제한(최대 4개)을 극복하기 위해 사용
	- Extended Partition 내부에는 여러 개의 Logical Partition을 생성할 수 있음
-  **Logical Partition**
	- (논리 파티션)
	- Extend Partition 내부에 생성
	- 기본 Partition의 제한을 넘어서 추가적인 파티션을 생성할 수 있음
- **Swap Partition**
	- (스왑 파티션)
	- Memory가 부족할 때 사용되는 영역
	- Swap Partition은 시스템의 성능과 안정성을 개선
- **LVM**
	- (Logical Volume Manager)
	- 여러 개의 Disk 또는 Partition을 하나의 큰 Logical Volume으로 운용 가능
	- Partition 크기 변경, 스냅샷, RAID구성에 유용

<br>

# MBR
MBR(Master Boot Record)은 HDD의 맨 앞에 기록되어 있는 시스템 영역으로 컴퓨터에 전원이 들어오면 가장 먼저 HDD의 MBR에 기록되어있는 **OS의 위치를 식별하며, 시스템 부팅에 사용되는 HDD의 Partition을 결정하는 프로그램**이 읽히게 된다. **MBR과 sba5의 관계에 대하여 공부해보자!**

<br>

# LVM
LVM(Linux Volume Manager)은 Linux에서 복잡한 스토리지 구성을 효율적으로 관리하기 위한 시스템으로 물리적 디스크를 하나의 논리적 볼륨으로 결합할 수 있고, 볼륨의 크기를 쉽게 조정 가능하다.
## LVM 단위 구성
- **PV**
	- Physical Volume
	- LVM에서 블록장치에 접근하기 위해서 PV로 초기화가 필요
- **PE**
	- Physical Extent
	- PV를 구성하는 일정한 크기의 블록으로 LVM2에서 기본 크기가 4MB
	- LV의 LE와 1:1로 대응
- **VG**
	- Volume Group
	- PV들의 집합으로 LV를 할당할 수 있는 공간
	- PV로 초기화된 장치들은 VG로 통합됨
	- 사용자는 VG 안에서 유연성 높게 공간을 쪼개 LV 생성 가능
- **LV**
	- Logical Volume
	- 사용자가 최종적으로 다루게 되는 논리적 스토리지
- **LE**
	- LV를 구성하는 일정한 크기의 블록으로 PE와 마찬가지로 4MB
	- 각각의 LV들은 PE들과 1:1로 맵핑됨

<br>

# Cron
Cron이란 OS Time-based job scheduling으로 demon의 일종이다. `/etc/crontab` 에 위치해 있다. **Cron 코드 작성 시 Sudo 명령어의 갯수를 잘 카운트해야한다!**

<details>
<summary>cron code</summary>
<div markdown="1">

``` bash
# The architecture of your operating system and its kernel version.
printf "#Architecture: "
uname -a

# The number of physical processors
printf "#CPU physical : "
cat /proc/cpuinfo | grep "physical id" | sort -u | wc -l

# The number of virtual processors
printf "#vCPU : "
cat /proc/cpuinfo | grep processor | wc -l

# The current available RAM on your server and its utilization rate as a percentage
printf "#Memory Usage: "
m_total=$(free -m | awk '$1 == "Mem:" {print $2}')
m_used=$(free -m | awk '$1 == "Mem:" {print $3}')
m_usage=$(awk "BEGIN {printf \"%.2f\", ($m_used/$m_total)*100}")
printf "%s/%s MB (%s%%)\n" "$m_used" "$m_total" "$m_usage"

# The current available memory on your server and its utilization rate as a percentage.
printf "#Disk Usage: "
d_total=$(df -Bg | grep '^/dev/' | grep -v '/boot$' | awk '{ft += $2} END {print ft}')
d_used=$(df -Bm | grep '^/dev/' | grep -v '/boot$' | awk '{ut += $3} END {print ut}')
d_per=$(df -Bm | grep '^/dev/' | grep -v '/boot$' | awk '{ut += $3} {ft += $2} END {printf("%d%%", ut/ft*100)}')
printf "%s/%sGb (%s)\n" "$d_used" "$d_total" "$d_per"


# The current utilization rate of your processors as a percentage
printf "#CPU load: "
mpstat | grep all | awk '{printf "%.1f%%\n", 100-$13}'

# The date and time of the last reboot
printf "#Last boot: "
last_boot=$(who -b | awk '{print $3, $4}')
printf "%s\n" "$last_boot"

# Whether LVM is active or not
if lsblk | grep -q "lvm"; then
    printf "#LVM use: yes\n"
else
    printf "#LVM use: no\n"
fi

# The number of active connections
printf "#Connections TCP : "
ss | grep 'ESTAB' | wc -l | tr -d '\n'
printf " ESTABLISHED\n"

# The number of users using the server
printf "#User log: "
who | wc -l

# The IPv4 address of your server and its MAC (Media Access Control) address
ip=$(hostname -I)
mac=$(ip link show | awk '$1 == "link/ether" {print $2}')
printf "#Network: IP %s (%s)\n" "$ip" "$mac"

# The number of commands executed with the sudo program
printf "#Sudo : "
grep 'COMMAND=' /var/log/auth.log | wc -l | tr -d '\n'
printf " cmd\n"
```
</div>
</details>

<br>

{{<alert>}}
<a href="https://elecbrandy.github.io/tags/42cursus"> 42cursus </a>
{{</alert>}}
