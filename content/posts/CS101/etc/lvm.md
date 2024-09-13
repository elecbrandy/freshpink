+++
title = 'LVM'
date = 2023-12-20
featured_image = "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20160126_34%2F1453775723247oLSqM_JPEG%2Fmovie_image.jpg"
tags = ['OS', '42cursus', 'Born2beroot', 'Linux']
+++

# LVM

## LVM이란?
- Linux Volume Manager
- [[Linux]]에서 복잡한 스토리지 구성을 효율적으로 관리하기 위한 시스템
- 물리적 디스크를 하나의 논리적 볼륨으로 결합할 수 있고, 볼륨의 크기를 쉽게 조정 가능

## LVM 특징
- **기존 방식과 LVM 방식**
	- 기존 방식
		- [[File system]]이 물리적 블록장치와 직접 상호작용
		- 마운트된 파티션의 용량이 가득 차 이동 시
			- 추가 디스크 장착
			- 추가된 디스크에 파티션 생성 및 포맷
			- 새로운 마운트 포인트(b)를 만들고 추가한 파티션 마운트
			- 기존 데이터를 (b)에 이동
			- 기존 파티션 언마운트 후 새 포인트와 연결
	- LVM 방식
		- [[File system]]이 LVM이 만든 가상의 블록 장치에 상호작용함
		- 실제 블록 장치를 추상화하여 더 유연한 접근이 가능함
		- 마운트된 파티션의 용량이 가득 차 이동 시
			- 추가 디스크 장착
			- 추가 디스크에 Partition을 만들고 pv 초기화
			- pv를 vg에 추가하고 해당 논리 볼륨 사이즈 증가

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
	- **LV의 유형**
		- **Linear LV**
			- 선형으로 PV를 모아 LV로 만드는 방법
		- **Striped LV**
			- 대량의 순차적 읽기/쓰기 작업의 경우 효율적으로 높일 수 있음
			- 선형이 아니라 여러 PV에 번갈아가며 기록하는 방법
			- 결국 분산기록이며, 읽고 쓰기가 병렬로 실행 가능
		- **Mirrored LV**
			- 블록 장치에 저장된 데이터의 복사본을 다른 블록 장치에 저장하는 방식
			- 백업에 용이함
- **LE**
	- LV를 구성하는 일정한 크기의 블록으로 PE와 마찬가지로 4MB
	- 각각의 LV들은 PE들과 1:1로 맵핑됨

## Reference
- https://tech.cloud.nongshim.co.kr/2018/11/23/lvmlogical-volume-manager-1-%EA%B0%9C%EB%85%90/
- https://nayoungs.tistory.com/entry/Linux-LVMLogical-Volume-Manage-PV-VG-LV
