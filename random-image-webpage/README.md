- 기록: https://velog.io/@freedy/하루만에-랜덤-이미지-생성-웹페이지-구현하기-feat.-Chatgpt

- 출처: [프로그래머스 강의](https://school.programmers.co.kr/app/courses/17122/curriculum/lessons/185009)


# 1. 학습 도구 준비 및 설치
- VS Code
	
    - 코드 에디터
    - 운영체제에 맞게 다운로드
- Chatgpt
	
    - 개발 과정에서 활용하게 될 AI 서비스
    - 3.5 무료(기반으로 진행함) 4.0 유료

<br>


# 2. 프로젝트 결과물 미리보기
- 최종 결과물 시연
	
    - 가족, 지인에게 소개 가능한 이미지 생성 웹 사이트
    - 실제 개발 과정에서 AI 서비스를 활용하는 방법에 대한 이해
    ![](https://velog.velcdn.com/images/freedy/post/c69698da-20e1-48d4-8a71-4a5cf09a9972/image.png)
    - OK를 누르면 이미지가 사라짐
    
<br>

# 3. 웹 서비스의 이해
>### 웹 서비스란??
>**요청**과 **응답**


요청을 보내는 대상 = **Client** ex) 브라우저

> ### **브라우저**
웹 서핑
브라우저 = client

요청을 받는 대상 = **Server** ex) 서버 터짐 - 수강신청

서버는 클라이언트의 요청을 잘 처리해야 하는 친구이다.

>**Clien**t는 무엇을 **요청**하는가?
문서 한장!
주로 문서 한장을 요청한다.

>**서버는** 무엇을 **응답**?
문서 한장!
요청한 문서 한 장을 건내줌


예) 네이버 같은 사이트에 접속을 했을 때 
브라우저 창에다가 naver.com이라고 입력하는 행위가 
바로 클라이언트 즉 브라우저 위에서 -> 네이버라는 서버로 요청을 보낸다고 생각하면 됨

> HTML, CSS, JavaScript로 이루어져 있다 = 문서 한장


> ### ! 정리 !
웹 서비스 = 요청&응답
>
클라이언트가 요청(HTML문서 한장) 서버가 응답(HTML문서 한장)


이 문서 한장에 초점을 맞춰보자.

<br>

# 4. HTML/CSS/JavaScript 소개
>### HTML
- HTML은 웹페이지의 구조를 정의하는 마크업 언어
- 우리가 보는 웹페이지는 HTML이라는 마크업 언어로 구성되어 있다. 
- 요소(element)와 속성(attribute)으로 구성되어 있다.
시작태그와 종료 태그의 조합으로 구성되어있다.
- 태그 사이에 메세지를 넣을 수 있다.
- h1, h2, p, img, input 등의 다양한 '태그'를 활용하여 골격을 디자인할 수 있다.

>### CSS(Cascading Style Sheets)
- CSS는 웹페이지의 디자인과 레이아웃을 제어하는 스타일 시트 언어
- HTL을 활용하여 잡은 골격에 스타일링을 해주는 도구
- CSS 만 단독으로 존재하는 건 의미가 없음

>### JavaScript
- 웹 페이지에 동적 기능을 추가하는 프로그래밍 언어(변수, 조건, 반복 등을 활용한 연산/계산 기능)
- 사용자와 상호작용, 웹 페이지 내용을 동적으로 변경, 웹 요소를 조작하는 등 다양한 기능을 수행할 수 있음
- Java와는 완전히 다른 언어


![](https://velog.velcdn.com/images/freedy/post/2fbf31cf-6c50-4a24-8bbf-42e21b94c535/image.png)![](https://velog.velcdn.com/images/freedy/post/1ba8d809-c99d-4b13-8d54-468b2e745d97/image.png)


<br>


# 5. 프로젝트 파일 준비하기
[>>> 베이스 코드 다운로드 받기](https://drive.google.com/drive/folders/1FN5BlDszNC3GALrEaABL0M7ys_5NB3xf)
photo-blog 폴더에 베이스 코드를 복사하고 VS Code에서 photo-blog 폴더를 열면,
![](https://velog.velcdn.com/images/freedy/post/d3b2a260-58fb-421a-8432-fb30a0af85eb/image.png) ![](https://velog.velcdn.com/images/freedy/post/e27703c3-4e0d-4d3b-bbcb-70153793189c/image.png)![](https://velog.velcdn.com/images/freedy/post/ee4c4147-9e11-49e7-a410-d7d03fb60d2f/image.png)
뼈대 코드

----

photo-blog 폴더에서 한번 `index.html`파일을 더블클릭하여 확인해 보면,
![](https://velog.velcdn.com/images/freedy/post/5127a088-96ac-4658-aff6-486b29386b55/image.png)

HTML은 뼈대
CSS는 스타일링
자바스크립트는 동적인 움직임 (<-- 에 집중할 것)

<br>

# 6. 웹 페이지 기본 설명 및 이벤트 정의
지금은 버튼을 클릭하면 아무런 변화가 없음..
네이버/다음에서 버튼을 클릭하면 여러 가지 정보들을 확인할 수 있는데, 동적인 기능들을 자바스크립트로 구현할 수 있다.

스타일링 페이지는 보이지만 버튼 클릭은 안됨 -> 기본 시각적인 요소는 HTML, CSS
동적인 요소는 js

> ### 이벤트
웹사이트 내에서 발생하는 다양한 사건들
ex) 버튼클릭, 스크롤 내리기, 화면캡처 등

웹페이지에서 사용자의 움직임에 따라 발생하는 모든 사건이 이벤트에 해당됩니다.

개발자는 이벤트들이 발생할 때 어떤 동작이 수행될지 결정한다.

클릭 이벤트를 구현할 것!
-> 이미지가 화면에 표시되어야 함

> ### 요약
웹 사이트 내에서 이벤트가 발생하면 - 해야 할 행동을 정의한다.


~ 하면 ~한다. 라는 구조를 기억하기!

<br>

# 7. 이벤트 대상 선택
**웹사이트 내에서 이벤트가 발생하면 해야 할 행동을 정의한다**
**~하면 ~한다**

웹사이트는 사용자와 상호작용을 하는데

이 상호작용의 중심에 있는 게 이벤트입니다.

결국 발생한 사건을 인지하고

적절한 동작을 수행하는 것이 핵심이죠.

우리는 가장 먼저 무엇을 해야 할까요?

우리가 해야 하는 일을 문장으로 정리해보면

사용자가 이미지 만들기라는 버튼을 클릭하면

이미지를 화면에 보여준다.

이것을 좀 더 간략하게 표현하면

버튼을 클릭하면, 이미지를 보여준다가 되겠죠

해서 우리의 작업을 크게 세 단계로 나눠서

진행을 해보려고 합니다

>먼저 사용자가 클릭할 버튼을 클릭함으로써
이벤트 대상을 선택하는 것입니다.

>이벤트 대상을 선택했으면
이벤트가 발생한 순간
즉 그 버튼에서 클릭이라는 이벤트가 발생한 순간
해당 이벤트를 감지해서

>발생한 이벤트에 대한 액션으로 사진을 보여주는 것까지

이렇게 세 단계로 나눠서 진행을 해보겠습니다.

사용자가 버튼을 클릭하는 순간 그 순간을 어떻게 알 수 있을까요?
- 먼저 대상이 되는 요소를 찾아야 합니다.
- 찾은 해당 요소에서 발생한 이벤트를 감지할 수 있습니다.
![](https://velog.velcdn.com/images/freedy/post/41fe60ba-2678-4c82-8d61-011373e797d8/image.png)

<br>

# 8. 선택한 대상으로부터 발생한 이벤트 감지
클릭 이벤트가 발생했을 때 감지하기

asking Chatgpt: ![](https://velog.velcdn.com/images/freedy/post/daaf455a-7e53-47ea-b8ec-40b851a6b852/image.png)

> addEventLister
라는 함수를 붙여놓고
이 대상에 특정 이벤트('click')
발생하면
그때 내가 원하는 동작을 하게 할 함수를 정의한다.

```js
변수.addEventLister('click', 함수);

function 함수() {
 //실행하고자 하는 코드 작성
}
```

add _ Event _ Lister란?

이벤트 = 사건
브라우저 위에서 사용자에 의해 발생한 모든 사건

Listner = 무언가 듣고 있는 것
= 어떤 대상

이벤트가 발생하면, 이벤트에 맞는 어떤 행동을 발생시키는 트리거 역할을 해주는 함수이다.

함수?
어떤 입력에 대해서 미리 구성한 로직의 결과를 주는 도구이다.
=> 여기서는 특정 이벤트라는 입력을 받아,
그 결과로 개발자가 정의한 행동을 하기 위한 함수

by 함수
입력= 클릭 이벤트, 결과=랜덤이미지 생성


> 이벤트 리스너는
특정 이벤트가 발생했을 때 그 이벤트를 감지하고
이에 대한 반응을 정의하는 함수, 즉 도구라고 정리해볼 수 있다.


윈도우 개발자 도구 콘솔 창
Ctrl+Shift+J

![](https://velog.velcdn.com/images/freedy/post/a18067c2-fc27-4243-aa77-87a5326fb140/image.png)

<br>

# 9. API 활용하기
- 이미지를 넣는 코드는 어디에 작성해야 할까요??

1) 이미지를 가져온다
2) 이미지를 보여주기 위한 태그를 작성한다
3) 생성한 이미지를 화면에 보여준다


어떻게 이미지를 가져올 수 있을까요?
-인터넷에서 직접 다운로드해서 활용하는 방법
-인터넷상 어딘가에 누군가 만들어논 이미지를 활용하는 방법

두번째 방법을 활용함


>웹서비스란?
= 요청과 응답

API를 활용한다

[Lorem picsum으로 이동하기](https://picsum.photos/)

스크롤을 내리면 다음과 같이,
![](https://velog.velcdn.com/images/freedy/post/f22d4eb1-2abd-45e0-b62d-13482fc8aafa/image.png)
이 부분을 보시면 중간에 
To request multiple 활용 방법에 대해서 나와 있다.
```html
<img src="https://picsum.photos/200/300?random=1">
<img src="https://picsum.photos/200/300?random=2">
```
random이라는 걸 붙여서 요청을 보내면 랜덤한 이미지를 매 요청마다 보내준다는 의미이다.
또한 뒤에 이 붙여지는 숫자는 매 요청마다 다른 이미지가 나오게 하려고 추가된 숫자라고 생각하시면 될 것 같습니다.

조금 더 정확하게는 캐싱이라는 걸 막기 위해서라고 할 수 있는데요,
이건 크게 신경 쓰지 않으셔도 됩니다.
그냥 랜덤한 숫자를 넣어주면 된다고 생각해 주시면 될 것 같아요.
![](https://velog.velcdn.com/images/freedy/post/d9cd698f-138f-43b3-91d7-cc22859c49f7/image.png) 브라우저에 붙이면 ![](https://velog.velcdn.com/images/freedy/post/218b3ff8-79ed-46ac-8518-aedda527ebf2/image.png) 제공자가 저희에게 준 사진입니다.
200, 300 하나만 넣었을 땐 
![](https://velog.velcdn.com/images/freedy/post/6144a08b-5c0d-4ec5-81d3-21424f7f5ede/image.png)
500 사이즈의 정사각형 이미지가 나옴
 
랜덤 픽 궁금 
일단 안됨
왜? 비교적 심플한 답
이미지를 제공하는 사용자가 이렇나 형태로, ㅎ여식으로 정해둔 규치긍 따르지 않았기 떄ㅜㅁ
어떤 서비스 제공 규칙.원칙을 가지고 있는지 문서를 통해 잘 파악하고 요청을 해야 함


첫 번째 단계를 마무리해 ㅆ응.

태그 작성, 생성한 이미지를 화면에 보여주는 것
이어서 해보겟음

<br>

# 10. 발생한 이벤트에 대한 액션 수행-1
![](https://velog.velcdn.com/images/freedy/post/b17f3204-156e-45ad-91e8-b59cda17b551/image.png)
![](https://velog.velcdn.com/images/freedy/post/abc2ad9e-4292-4f2f-a111-b0427b1ded2a/image.png)
![](https://velog.velcdn.com/images/freedy/post/6b3d2153-9751-4efd-a52a-ac7ac1c5ac7d/image.png)
random=뒷부분의 숫자를 랜덤하게 바꾸는 방법
by Chatgpt.
![](https://velog.velcdn.com/images/freedy/post/edefb04d-ee58-4982-aad5-2d2de93fd01d/image.png)

> - `document` : HTML 문서 한 장
- `createElement` : 어떤 요소를 만들 때 사용하는 것
- `"img"` : img 라는 태그를 만드는 자바스크립트 코드이다.
- `<img src="">` : img 태그 HTML 코드
```html
<img src="">
```
```js
const.img = document.createElement("img");
```
![](https://velog.velcdn.com/images/freedy/post/d1d04dd8-eb00-4ef0-8238-4b3913e5a463/image.png)
- 백 틱 기호
```
`
```
- `${}` 기호: 어떤 문자열 안에 동적인 값을 넣을 때 사용하는 자바스크립트 문법
문자열 안에는 원래 변수를 넣을 수가 없는데 지금처럼 작성하게 되면 변수 혹은 어떤 값을 끼워 넣을 수 있게 되죠
- Math.random 함수 : 이 함수가 정확하게 어떻게 동작하는지는 몰라도 이름만 보고 쉽게 유추를 해볼 수 있다. 어떤 랜덤한 값을 주나보다. 그리고 그 값을 곱하기 1000을 하고 거기에 더하기 일을 하고 있구나라는 것을 조금 알 수가 있을 것 같습니다.
![](https://velog.velcdn.com/images/freedy/post/189d22e5-7cb0-4115-b71a-7530230fecb3/image.png)
이렇게 매번 random하게 숫자가 달라지기 때문에 매번 다른 사진을 받을 수 있는 것입니다.
- `img.scr`의 의미 : `<img src ... >` 이미지 태그는 이 src, source 속성 Attribute가 있어야 합니다. 어떠한 이미지를 보여줄 건데라고 할 때 나 이러한 이미지를 보여주라고 하는 걸 이 src 안에 적는다고 생각하시면 됩니다. 그렇다면 이 img.src는 저 src 소스 속성의 어떤 내용을 채워놓는다고 이해할 수 있겠네요. 

외부 API 요청을 통해 받아온 데이터를 만들어진 이 이미지 태그에 src 속성에 넣는구나라는 사실을 알게 되었습니다.

<br>

# 11. 여러 개 이미지 생성하기
그럼 이제 남은 건 이 이미지 태그가 보일 수 있도록 어딘가에 탁하고 붙이는 작업만 하면 되는데요
`appendChild()` 메서드를 활용해서 img 태그를 추가하고 있습니다. 자식으로 추가하는 건가라는 유추가 가능합니다. 실제로도 그런 형태로 동작을 하고 있고요

그러면 이 이벤트가 발생해서 만들어진 이미지 태그와 그 결과가 gridContainer라는 요소에 딱하고 붙어서 우리 눈의 결과로 보이는구나라는 사실을 알 수가 있습니다. 

그래서 이 gridContainer 사이에 요소가 생긴 걸 잠깐 확인을 해 볼게요 여기 옆에 펼쳐진 창에서 
![](https://velog.velcdn.com/images/freedy/post/2b5b6049-3e1d-4494-80d1-41b548b58832/image.png) 클릭하여 이미지 요소가 생긴 것을 확인할 수 있습니다. ![](https://velog.velcdn.com/images/freedy/post/c8753e75-6a35-4986-948f-f77ba501f7ae/image.png)

