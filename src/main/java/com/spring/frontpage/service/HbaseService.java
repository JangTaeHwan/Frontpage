package com.spring.frontpage.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.spring.frontpage.model.*;

@Service
@Component
public class HbaseService {
	
	// 커버뷰, 모아보기 기사들 / section의 설정과 pageIndex번호에 해당되는 부분 반환  / section.setPageIndexLimit 설정 필요
	public List<Article> getMainArticles(ArticleSection section){
		List<Article> articles = new ArrayList<Article>();
		test(articles);
		return articles;
	}

	// 검색 기사들 / section의 설정과 pageIndex번호에 해당되는 부분 반환 / section.setPageIndexLimit 설정 필요
	public List<Article> getSearchArticles(String query, ArticleSection section){
		List<Article> articles = new ArrayList<Article>();
		//test(articles);
		return articles;
	}
	
	/* 세부페이지 클릭 시 반환되는 관련 기사, 영상 들 */
	
	// getRelativeArticles의 반환되는 첫 번째 기사는 현재 id값에 해당되는 기사 반환해야 함 
	public List<Article> getRelativeArticles(String id){
		List<Article> articles = new ArrayList<Article>();
		test(articles);
	    for (int i = 0; i < articles.size(); i++){
	    	if(id.equals(articles.get(i).getId())){
	    		Article temp = articles.get(i);
	    		articles.set(i, articles.get(0));
	    		articles.set(0, temp);
	    	}
	    }
		return articles;
	}
	public List<Video> getRelativeVideos(String id){
		List<Video> videos = new ArrayList<Video>();
		test_video(videos);
		return videos;
	}
	
	private void test(List<Article> articles){
		Article temp = new Article();
		
		temp.setId("101");
		temp.setDgree(4);
		temp.setYear(2015);
		temp.setMonth(2);
		temp.setDay(02);
		temp.setUrl("http://news.naver.com/main/read.nhn?mode=LS2D&mid=shm&sid1=106&sid2=222&oid=396&aid=0000286325");
		temp.setPress("한겨례");
		temp.setTitle("'모데카이' \"조선명탐정\", 남남케미 대격돌… 누가 더 셀까");
		temp.getImages().add("http://imgnews.naver.net/image/396/2015/02/01/20150201002274_0_99_20150201210327.jpg");
		temp.getImages().add("http://imgnews.naver.net/image/396/2015/02/01/20150201002281_0_99_20150201210327.jpg");
		temp.getKeywords().add("영화");
		temp.getKeywords().add("조선명탐정");
		temp.getKeywords().add("모데카이");
		temp.getKeywords().add("CGV");
		temp.getKeywords().add("관객수");
		temp.getKeywords().add("사기꾼");
		temp.getKeywords().add("코미디");
		temp.getKeywords().add("극장가");
		temp.getKeywords().add("조니뎁");
		temp.getKeywords().add("폴 베타니");
		temp.getKeywords().add("찰떡궁합");
		temp.getKeywords().add("희대의 사기극");
		temp.getKeywords().add("불량사건");
		temp.getKeywords().add("일규옹");
		temp.getKeywords().add("남두");
		temp.setContents("<h4>스포츠월드=윤기백 기자</h4>2015년 2월 극장가에 남자 배우들의 케미가 돋보이는 두 작품이 모두의 이목을 집중시키고 있다.<br/> 가장 눈에 띄는 콤비는 단연 ‘모데카이’의 조니 뎁과 폴 베타니다. 두 배우는 극중 천재 사기꾼 '모데카이'(조니 뎁)와 그의 하인 '조크'(폴 베타니)로 각각 분해 주인과 하인의 충성스러운 관계를 뛰어 넘는 환상의 '사기꾼콤비'를 선보일 예정으로 기대를 모은다. 영화 ‘모데카이’는 나치의 비밀계좌가 숨겨진 전설의 그림을 둘러싸고 벌어지는 희대의 미술품 사기극을 그린 작품. 그림의 행적을 쫓던 중 그 속에 나치의 비밀 계좌번호가 숨겨져 있음을 알게 된 '모데카이'와 그의 하인 '조크'는 남몰래 기막힌 계획을 꾸며 전세계를 속일 기상천외한 한탕으로 관객들의 마음을 사로잡을 예정이다. 여기에 전세계 어디에서나 위기에 처한 '모데카이'를 구하는 '조크'의 눈부신 활약을 통해 두 사람의 완벽한 파트너쉽을 자랑하며 재미를 더한다. 폴 베타니는 한 인터뷰에서 '이 영화는 똑똑한 하인과 멍청한 주인의 전통적인 코미디다. 조니 뎁과 정말 재미있게 촬영했다'라며 ‘트랜센던스’에 이어 두 번째 호흡을 맞춘 조니 뎁에 대한 각별한 애정을 드러냈다. 여기에 ''모데카이'와 '조크' 이 둘 사이는 형제 같은 관계이다'라고 전하며 극중 조니 뎁과 폴 베타니 두 사람이 선보일 찰떡호흡에 대한 기대감을 더하고 있다. 이어 2월 개봉 예정인 영화 ‘조선명탐정: 사라진 놉의 딸’의 남남 커플 김명민과 오달수는 조선 전역에 유통된 불량 은괴 사건을 해결하기 위해 육해공 장소를 가리지 않고 함께 한다. 허당끼 넘치는 '김민'(김명민)과 그의 완벽한 조력자 역할을 톡톡히 해내는 '서필'(오달수)은 조선시대 명탐정 콤비답게 최고의 조합을 이룰 예정이다. 이처럼 다양한 남남 배우들의 호흡이 눈에 띄는 작품들이 2월 극장가 출격을 앞두고 있는 가운데, 영화 ‘모데카이’는 조니 뎁과 폴 베타니의 찰떡궁합을 이룬 호연으로 관객들을 사로잡을 예정이다. 2월 18일 개봉.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setId("102");
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setUrl("http://news.naver.com/main/read.nhn?mode=LS2D&mid=shm&sid1=103&sid2=376&oid=144&aid=0000298940");
		temp.setPress("한겨례");
		temp.setTitle("써스데이 아일랜드, 레이븐 데님과 콜라보레이션 라인 출시");
		temp.getImages().add("http://imgnews.naver.net/image/144/2015/01/27/l_2015012702001467200311541_99_20150127235302.jpg");
		temp.getImages().add("http://imgnews.naver.net/image/144/2015/01/27/l_2015012702001467200311542_99_20150127235302.jpg");
		temp.getImages().add("http://imgnews.naver.net/image/144/2015/01/27/l_2015012702001467200311543_99_20150127235302.jpg");
		temp.getImages().add("http://imgnews.naver.net/image/144/2015/01/27/l_2015012702001467200311544_99_20150127235302.jpg");
		temp.setContents("캐주얼 브랜드 써스데이 아일랜드(Thursday Island)가 프리미엄 브랜드 레이븐 데님(Raven Denim)과 콜라보레이션한 스페셜 데님 라인을 출시한다. 내추럴하고 자유로운 감성의 써스데이 아일랜드는 최근 런칭 15주년을 맞아 마니아 고객을 위한 특별한 글로벌 리미티드 에디션을 선보인다고 밝혔다. 써스데이 아일랜드와 콜라보레이션 제품을 선보일 레이븐 데님은 최근 세계적으로 인기를 얻고 있는 프리미엄 데님 브랜드. 레이븐 데님을 써스데이 아일랜드만의 특별한 빈티지 감성으로 재해석한 이번 라인은 미국 현지 생산을 통해 더욱 차별화 했다. 써스데이 아일랜드 측은 “이번 콜라보레이션을 통해 브랜드의 제품 퀄리티를 향상시키는 계기가 되었다”며 “더욱 매력적인 스타일링을 제안, 페스티벌이나 여행을 준비하는 고객들에게 어필할 것”이라고 밝혔다. 이번 데님 콜라보레이션 라인은 오는 2월 12일 전국 써스데이 아일랜드 매장에서 출시될 예정이다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setId("103");
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setPress("중앙일보");
		temp.setTitle("'민심이반'에 예상 깬 '전격 개편'…이완구 카드 배경은");
		temp.getImages().add("http://imgnews.naver.net/image/008/2015/01/23/2015012317317658338_1_99_20150123181508.jpg");
		temp.setContents("23일 발표된 청와대 조직개편과 국무총리 인선은 예상을 넘어 '전격적'으로 이뤄졌다. 당초 정홍원 총리를 유임시킬 것이란 전망이 지배적이었으나, 박근혜 대통령은 후임자로 이완구 새누리당 원내대표 카드를 꺼내들었다. 이르면 이번 주내 발표될 수 있다는 관측도 있었지만, 청와대 내부에서조차 예상하지 못했던 것으로 전해졌다. 교체된 한 수석비서관은 일부 기자들과 오찬을 잡고 발표 전 장소까지 예약했다가 취소했다. 자신의 거취에 대해 사전 통지를 받지 못한 것으로 전해졌다. ");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("104");
		temp.setPress("뉴스1");
		temp.setTitle("서가대 '태연 추락사고, 진심으로 죄송' 공식사과");
		temp.getImages().add("http://imgnews.naver.net/image/117/2015/01/23/201501231606941132_1_99_20150123163003.jpg");
		temp.setContents("23일 서가대는 공식 홈페이지를 통해 '22일 서울올림픽공원 체조경기장에서 열린 코리아 그랜드세일 기념 제24회 서가대 시상식에서 걸그룹 소녀시내 유닛 태티서의 멤버인 태연이 공연 후 무대 퇴장 도중 예기치 못한 사고를 당한 것과 관련해 태연과 멤버, 소속사, 팬 여러분께 진심으로 사과드린다'고 사과했다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("105");
		temp.setPress("한겨례");
		temp.setTitle("'공포의 8번'…'진짜' 여군 이다희, PT체조 받다 울상");
		temp.getImages().add("http://imgnews.naver.net/image/117/2015/01/23/201501231632391112_1_99_20150123163403.jpg");
		temp.setContents("MBC가 23일 공개한 현장 사진에는 여군특집 2기 편에 출연한 배우 김지영, 박하선, 강예원, 이다희, 방송인 이지애, 개그우먼 안영미, 걸그룹 에이핑크의 윤보미, f(x)의 엠버까지 8명의 멤버들이 훈련 받는 모습이 담겼다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("106");
		temp.setPress("한겨례");
		temp.setTitle("수지, 미모 버리고 순박한 조선처녀 변신…'도리화가' 스틸공개");
		temp.getImages().add("http://imgnews.naver.net/image/111/2015/01/23/1422000760539_1_171330_99_20150123172103.jpg");
		temp.setContents("최근 온라인상에 공개된 '도리화가' 스틸에서 수지는 화사하고 청순한 미모를 거무튀튀한 피부 분장과 낡은 한복으로 가리고 순박한 조선시대 처녀로 변신했다. 영화 '건축학개론'으로 국민 첫사랑이 된 수지는 3년만의 스크린 컴백작 '도리화가'에서 조선 최초의 여류 명창 '진채선'역을 맡았다. ");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("107");
		temp.setPress("한겨례");
		temp.setTitle("테일러 복수극’ KDB생명, 삼성 꺾고 4연패 탈출");
		temp.getImages().add("http://imgnews.naver.net/image/065/2015/01/23/KDB500_0_99_20150123205404.JPG");
		temp.setContents("구리 KDB생명은 23일 용인실내체육관에서 열린 용인 삼성과의 KB국민은행 2014~2015 여자프로농구 5라운드 경기에서 66-63으로 이겼다. KDB생명은 이날 승리로 4연패에서 탈출, 5위 부천 하나외환과의 격차를 0.5경기로 줄였다. 반면, 2연패에 빠진 삼성은 3위 청주 KB 스타즈와의 격차가 3.5경기까지 벌어졌다.4라운드 맞대결에서 부진했던 테일러(10득점 10리바운드 2블록)가 이미 전반에 더블 더블을 작성하며 팀 승리의 디딤돌 역할을 했고, 한채진(13득점 3점슛 3개 3리바운드 2어시스트)은 고비마다 3점슛을 터뜨렸다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);	
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("108");
		temp.setPress("한겨례");
		temp.setTitle("KIA 쌍무지개 될까? BK 행보가 궁금하다");
		temp.getImages().add("http://imgnews.naver.net/image/109/2015/01/23/201410132046776228_543bbbccec06f_99_20150123181604.jpg");
		temp.setContents("김병현은 작년 오랜 꿈을 이루었다. 해외파 특별지명을 받았지만 2012년 고향팀이 아닌 넥센에 입단했다. 마음속으로 언젠가는 고향팀 KIA에서 뛸 것이라는 의지가 강했다. 마침 2014시즌 도중 투수력이 필요한 KIA와 넥센의 트레이드가 성사되면서 타이거즈 유니폼을 입었다. ");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("109");
		temp.setPress("한겨례");
		temp.setTitle("[서호정의 킥오프] 감독이 찜하면 맹활약, ‘슈틸리케 법칙’을 아시나요?");
		temp.getImages().add("http://imgnews.naver.net/image/452/2015/01/23/085615932_97075041.jpg");
		temp.setContents("4전 전승에 무실점. 대한민국 축구 국가대표팀을 3회 연속 아시안컵 4강으로 이끈 울리 슈틸리케 감독은 5개월 만에 달라진 한국 축구의 힘을 보여주고 있다. 브라질월드컵과 달리 끈끈하게 버티는 힘과 보는 이의 마음을 흔드는 투지 넘치는 플레이는 ‘아시아의 호랑이’를 다시 일으켜 세웠다. 이청용과 구자철이 부상으로 조기에 대회를 마감하는 큰 어려움 속에서도 슈틸리케 감독과 대표팀은 큰 요동 없이 전진 중이다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("110");
		temp.setPress("뉴스1");
		temp.setTitle("[한준 이슈] 중국과 손잡은 AT…새로운 슈퍼파워");
		temp.getImages().add("http://imgnews.naver.net/image/431/2015/01/23/095113524_IMG_0039.full.JPG");
		temp.setContents("아틀레티코마드리드의 단장이자 소유주인 미겔 앙헬 길 마린이 중국인 투자자 왕젠린 회장의 아틀레티코 이사진 합류를 환영하며 남긴 말이다. 레알마드리드와 FC바르셀로나(바르사)의 아성에 도전하며 스페인 프리메라리가 무대에서 양강 독주 체제를 깨트린 아틀레티코는 디에고 시메오네 감독 보다 더 강력한 지원군을 얻은 모습이다.스페인 스포츠 신문 ‘마르카’는 ‘아틀레티코가 왕젠린을 영입했다’고 비유했다. 막강한 자금력을 갖춘 투자자를 유치하면서 아틀레티코는 당장 4,500만 유로(약 566억원)의 투자금을 확보했다. 중국 기업 다렌완다의 왕젠린 회장은 이 투자금을 통해 아틀레티코의 지분 20%를 확보하게 됐다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("111");
		temp.setPress("뉴스1");
		temp.setTitle("이재용, 방한 왕양 中 부총리 만나");
		temp.getImages().add("http://imgnews.naver.net/image/022/2015/01/23/20150123002717_0_99_20150123200607.jpg");
		temp.setContents("최근 활발한 행보를 보이고 있는 이재용(사진) 삼성전자 부회장이 23일 서울 장충동 신라호텔에서 ‘중국 방문의 해’ 행사 참석차 방한한 왕양(汪洋) 중국 부총리와 만나 사업협력 방안을 논의했다.이 부회장은 삼성의 중국사업 추진 현황을 소개하고 중장기적 사업협력 방안에 대해 의견을 나눈 것으로 알려졌다. 이 부회장은 “한·중 양국 간 인적 교류 증가로 신라호텔과 용인 에버랜드 테마파크를 찾는 중국 고객들이 늘었다”면서 “중국 지방정부 및 기업과도 협력을 확대해 한·중 교류 활성화에 적극 동참하겠다”고 말했다. 이 부회장은 지난해 2월에도 중국 베이징에서 왕양 부총리를 만난 바 있다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("112");
		temp.setPress("뉴스1");
		temp.setTitle("‘무한도전’ 유재석, 칼 대신 당근 들고 액션연기…‘진지한데 웃겨’");
		temp.getImages().add("http://imgnews.naver.net/image/382/2015/01/23/69251197.2_99_20150123175807.jpg");
		temp.setContents("‘무한도전’ 측은 23일 오후 프로그램 공식 트위터 계정을 통해 “10년 묵은 야수 본능 뽐내는 다섯 멤버들의 액션 초행길! ‘올드보이’,‘신세계’의 명장면을 180도 바꿔 놓은 기상천외 액션! Ready~ Action! ‘나는 액션 배우다’ 토요일 저녁 6시 25분”이라는 글과 사진을 올렸다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("113");
		temp.setPress("뉴스1");
		temp.setTitle("'軍 또 왜 이러나'…잇단 구타·가혹행위 사건에 침통");
		temp.getImages().add("");
		temp.setContents("화재 연루 탈영병·울산 자살 병사, 같은 부대 A급 관심병사 (춘천=연합뉴스) 이재현 기자 = 지난해 육군 22사단 총기 난사 사건과 28사단 윤모 일병 폭행치사 사건을 계기로 군부대 악습을 개선하기 위한 노력이 이어지고 있으나 강원 지역 병영 사고는 여전히 끊이지 않고 있다.일부 부대에서는 부사관이 후임 부사관을 폭행·추행하는가 하면, 초급 간부는 부대원 9명에게 구타·가혹행위를 했다.또 A급 관심 병사들은 휴가를 나갔다가 스스로 목숨을 끊거나 화재 사건 등 범죄에 연루됐다.육군은 23일 후임 부사관을 상습적으로 폭행한 혐의 등으로 화천 모 부대 소속 허모(22) 중사를 구속했다.허 중사는 지난 2013년 11월부터 지난해 12월까지 같은 부대에 근무하는 후임 A(21) 중사와 B(21) 하사 등 2명을 주먹과 발로 폭행하는 등 모두 6차례에 걸쳐 폭행한 혐의다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("114");
		temp.setPress("뉴스1");
		temp.setTitle("전국 휘발유값 29주 연속 떨어져…역대 최장기간 하락");
		temp.getImages().add("http://imgnews.naver.net/image/001/2015/01/23/PYH2015011805730001300_P2_99_20150123191304.jpg");
		temp.setContents("유가정보시스템 오피넷의 이번 주(1월18∼23일) 석유제품 가격동향에 따르면 전국 주유소의 휘발유 평균값은 지난주보다 53.6원 내려 ℓ당 1천477.5원으로 집계됐다.지역별로는 제주의 휘발유 평균값이 일주일 만에 100원 가까이 내리면서 대구를 제치고 17개 시·도 가운데 최저가 타이틀을 차지했다.이번주 제주의 휘발유 평균값은 ℓ당 1천404.78원으로 지난주보다 98.39원 내렸다.최근 몇 달간 최저가 자리를 지켜온 대구는 지난주보다 58.71원 내려 ℓ당 1천441.23원을 나타내며 제주에 밀렸다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("115");
		temp.setPress("뉴스1");
		temp.setTitle("'슈퍼맨이 돌아왔다' 삼둥이, 깜찍 도령으로 변신…'밍무룩' 이유는?");
		temp.getImages().add("http://imgnews.naver.net/image/213/2015/01/23/20150123_1422002944_49219500_1_99_20150123175111.jpg");
		temp.setContents("오는 25일 방송되는 KBS '해피선데이-슈퍼맨이 돌아왔다'에서는 송일국과 그의 삼둥이가 서당에 방문하는 모습이 그려질 예정이다. 앞서 지난 18일 방송 말미에 공개된 예고편 속 삼둥이 대한,민국, 만세는 서당을 찾아 깜찍한 도령으로 변신, 나란히 앉아 훈장님의 지도 아래 붓을 들고 글씨를 썼다. 그러던 중 민국이가 먹물을 묻힌 붓으로 방바닥에 잔뜩 낙서를 했고 이를 본 훈장님은 '누가 방바닥에 하라고 했느냐'며 '민국이 훈장님 앞으로 나와'라고 호통쳤다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(4);
		temp.setYear(2015);
		temp.setMonth(2);
		temp.setDay(02);
		temp.setId("116");
		temp.setPress("뉴스1");
		temp.setTitle("이다희 측 '은폐·엄폐 뜻풀이, 말장난 아니야'");
		temp.setUrl("http://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=106&oid=241&aid=0002330431");
		temp.getImages().add("http://imgnews.naver.net/image/241/2015/02/02/htm_2015020211121c010c011_99_20150202110403.jpg");
		temp.setContents("배우 이다희의 '말장난' 논란에 이다희 측이 '진짜 그런 뜻인 줄 알았다'며 해명했다. 이다희 소속사 측은 2일 일간스포츠와의 전화통화에서 '이다희씨가 은폐와 엄폐 뜻을 묻는 교관님께 대답한 부분은 말장난이 아니다. 본인에게 확인한 결과, 진짜 그 뜻인 줄 알았다고 한다. 교관님이 '진심으로 말하는 것이냐'고 물었을 때 오히려 당황했다고 한다'고 전했다. 지난 1일 방송된 MBC '진짜사나이'에서 이다희는 은폐와 엄폐의 뜻을 묻는 교관의 질문에 '은폐는 은밀히 숨는 것이고 엄폐는 엄숙하게 숨는 것'이라고 답했다. 당황한 교관이 '진심으로 얘기하는 것이냐'고 재차 물었지만 이다희는 진지한 표정으로 그렇다고 답했다. 이 장면이 나간 후 네티즌들은 '말장난이 심한 거 아니냐' '군대가 장난이냐' '아무리 예능이지만 황당했다' 등의 반응을 보이며 이다희의 태도를 지적했다. 아무리 예능프로그램이지만 진지하지 못 했다는 지적도 잇따랐다. 이에 이다희 측은 '말장난을 하는 건 절대 아니다. 그럴 의도는 전혀 없었다'며 '부대에서 훈련 받으면서 장난을 친 적도 없고, 모든 훈련을 진지하게 임했다'고 거듭 강조했다. 한편 '진짜사나이' 여군특집2기는 이날 17%(닐슨코리아, 전국기준)를 기록했다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(2);
		temp.setDay(10);
		temp.setId("117");
		temp.setPress("일간스포츠");
		temp.setUrl("http://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=106&sid2=221&oid=241&aid=0002335566");
		temp.setTitle("[이슈IS]윤은혜 소환운동 이벤트… 이대로 괜찮을까");
		temp.getImages().add("http://imgnews.naver.net/image/241/2015/02/10/htm_2015021015227c010c011_99_20150210175909.jpg");
		temp.setContents("지난 5일 SBS 공식 트위터에는 '#윤은혜 #런닝맨 소환 운동! RT 하고 윤은혜를 '런닝맨'으로 소환하자! RT(리트윗) 1만개 달성하고 윤은혜를 '런닝맨'으로 #RT하여_윤은혜_소환하자 #RT고고'라는 이벤트가 열렸다. 닷새만에 윤은혜를 출연시켜달라는 트위터 글이 3만 3000개를 넘어섰다. 공식 페이스북 글 역시 호응도를 나타내는 '좋아합니다'가 94만 8000명이 넘어서면서 큰 관심을 받고 있다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);	
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("118");
		temp.setPress("뉴스1");
		temp.setTitle("'맞벌이 지원확대' 보육정책 개편론에 주부들 반발");
		temp.getImages().add("http://imgnews.naver.net/image/001/2015/01/23/PYH2015012113470001300_P2_99_20150123141506.jpg");
		temp.setContents("(서울=연합뉴스) 김병규 기자 = 정부가 맞벌이 부모에 대한 보육 지원 대책을 강화하겠다고 나선 것과 관련해 전업주부들의 반발이 거세다. 복지부는 21일 대통령 업무보고 사전브리핑에서 전업주부들까지 과도하게 아이들을 어린이집에 맡기는 상황을 개선하기위해 '맞벌이 부부에 대해 지원대책을 강화하고 시간제 보육을 활성화하는 등 구조적인 문제의 개선이 필요하다'고 밝힌 바 있다. ");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("119");
		temp.setPress("뉴스1");
		temp.setTitle("'나, 이런 모습 처음봐?' 이연희, 팜므파탈 매력 발산");
		temp.getImages().add("http://pds.joins.com/news/component/htmlphoto_mmdata/201501/22/htm_20150122142116642.jpg");
		temp.setContents("배우 이연희가 영화 개봉에 맞춰 특유의 매혹적인 매력을 담은 화보가 공개됐다. 이번에 공개된 화보는 이연희 주연의 2월 개봉되는 영화 ‘조선 명탐정: 사라진 놉의 딸’에서 정체를 알 수 없는 묘령의 게이샤 ‘히사코’로 분했다. 맞춰 촬영한 화보이다. 화보 속 이연희는 매끄러운 도자기 피부에 선명하고 강렬한 립 컬러를 포인트로 줘 시선을 사로잡았다. 투명할 정도로 하얀 피부에 컨셉마다 그녀 특유의 눈빛으로 매 컷 색다른 카리스마와 집중력으로 스테프 들의 탄성을 자아냈다. 이연희의 관능적이고 매혹적인 팜므파탈로 변신한 화보는 '하퍼스 바자 2월호에서 만나볼 수 있다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("120");
		temp.setPress("뉴스1");
		temp.setTitle("인천 부평 어린이집 원장 혐의 부인…경찰 재소환 예정");
		temp.getImages().add("http://imgnews.naver.net/image/003/2015/01/23/NISI20150123_0010555967_web_99_20150123213302.jpg");
		temp.setContents("【인천=뉴시스】함상환 기자 = 인천 삼산경찰서는 23일 부평구 부개동의 한 어린이집 보육교사 원생 폭행 사건과 관련 어린이집 원장 A(65·여)씨를 불러 조사한 뒤 귀가 시켰다. A씨는 이날 오후 5시20분께 피혐의자 신분으로 경찰서에 출석해 3시간 동안 조사를 받았다. A씨는 경찰에서 '구속된 보육교사 B(25·여)씨가 원생들을 폭행한 사실을 모르고 있었으며 다른 보육교사들에게 폭행 사실에 대해 함구령을 내린 적이 없다'고 진술했다.");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("121");
		temp.setPress("뉴스1");
		temp.setTitle("<내일날씨> 전국 대체로 맑음…낮 최고 6∼12도(20:00 현재)");
		temp.getImages().add("http://imgnews.naver.net/image/001/2015/01/23/PYH2014030407800001300_P2_99_20150123201205.jpg");
		temp.setContents("(서울=연합뉴스) 이도연 기자 = 토요일인 24일 남해상에서 동진하는 고기압의 영향을 받다가 점차 가장자리에 들어 전국이 대체로 맑다가 밤부터 구름이 많아지겠다. 아침 최저기온은 영하 6도에서 영상 3도, 낮 최고기온은 6도에서 12도로 전날과 비슷하겠다. 바다의 물결은 동해 전 해상에서 0.5∼2.5m로 일겠다. ");
		temp.setDescription(temp.getContents());
		articles.add(temp);
		
		temp = new Article();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("122");
		temp.setPress("뉴스1");
		temp.setTitle("박창진 대한항공 사무장 '다음달부터 출근하겠다'");
		temp.getImages().add("http://imgnews.naver.net/image/001/2015/01/23/PYH2014121300870001300_P2_99_20150123180316.jpg");
		temp.setContents("'땅콩 회항' 사건 당시 조현아 전 대한항공 부사장에 의해 비행기에서 쫓겨났던 박창진 사무장이 이달 말 병가가 끝나면 2월 1일부터 출근하겠다는 의지를 내비쳤다. 박 사무장은 23일 CBS라디오 '박재홍의 뉴스쇼'에 나와 회사로 복귀하는 것에 대해 '당연한 권리를 행사하는 것'이라면서 '출근하기 위해 노력하고 있고 제 마음은 '꼭 하겠다'이다'라고 말했다. 그는 조 전 부사장의 폭언과 폭행, 램프 리턴(항공기가 탑승게이트로 돌아가는 것) 지시 등을 폭로했기 때문에 계속 회사에 다니기 어렵지 않겠느냐는 추측이 나온다. ");
		temp.setDescription(temp.getContents());
		articles.add(temp);				
	}
	
	private void test_video(List<Video> videos){
		Video temp = new Video();
		
		temp.setId("201");
		temp.setDgree(4);
		temp.setYear(2015);
		temp.setMonth(2);
		temp.setDay(02);
		temp.getKeywords().add("사기꾼");
		temp.getKeywords().add("코미디");
		temp.getKeywords().add("극장가");
		temp.getKeywords().add("조니뎁");
		temp.getKeywords().add("폴 베타니");
		temp.getKeywords().add("찰떡궁합");
		temp.getKeywords().add("희대의 사기극");
		temp.getKeywords().add("불량사건");
		temp.getKeywords().add("일규옹");
		temp.getKeywords().add("남두");
		temp.setUrl("http://news.naver.com/main/read.nhn?mode=LSD&mid=tvh&sid1=289&oid=422&aid=0000104826");
		temp.setPress("연합뉴스TV");
		temp.setTitle("미국, 시리아서 IS 겨냥 25차례 공습");
		temp.setContents("미국, 시리아서 IS 겨냥 25차례 공습 미국이 이끄는 국제연합군은 시리아 코바니와 하사카 지역에서 극단주의적 무장단체 '이슬람 국가'를 겨냥해 25차례에 걸쳐 공습을 감행했다고 연합공동작전사령부가 밝혔습니다. 현지시간 22일 오전부터 이틀간 이뤄진 이번 공습에서 연합군은 하사카 부근에서 11차례 공습을 가해 10개의 전술부대를, 코바니 부근에서 6차례 공습을 가해 5개의 전술부대와 5개의 전투진지를 각각 타격했습니다. 공습대상에는 시리아 북동부 다이르 앗 자우르 부근에 위치한 IS 정유시설도 포함됐습니다.");
		temp.setDescription(temp.getContents());
		videos.add(temp);
		
		temp = new Video();
		temp.setId("202");
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setUrl("http://news.naver.com/main/read.nhn?mode=LS2D&mid=shm&sid1=103&sid2=376&oid=144&aid=0000298940");
		temp.setPress("한겨례");
		temp.setTitle("써스데이 아일랜드, 레이븐 데님과 콜라보레이션 라인 출시");
		temp.setContents("캐주얼 브랜드 써스데이 아일랜드(Thursday Island)가 프리미엄 브랜드 레이븐 데님(Raven Denim)과 콜라보레이션한 스페셜 데님 라인을 출시한다. 내추럴하고 자유로운 감성의 써스데이 아일랜드는 최근 런칭 15주년을 맞아 마니아 고객을 위한 특별한 글로벌 리미티드 에디션을 선보인다고 밝혔다. 써스데이 아일랜드와 콜라보레이션 제품을 선보일 레이븐 데님은 최근 세계적으로 인기를 얻고 있는 프리미엄 데님 브랜드. 레이븐 데님을 써스데이 아일랜드만의 특별한 빈티지 감성으로 재해석한 이번 라인은 미국 현지 생산을 통해 더욱 차별화 했다. 써스데이 아일랜드 측은 “이번 콜라보레이션을 통해 브랜드의 제품 퀄리티를 향상시키는 계기가 되었다”며 “더욱 매력적인 스타일링을 제안, 페스티벌이나 여행을 준비하는 고객들에게 어필할 것”이라고 밝혔다. 이번 데님 콜라보레이션 라인은 오는 2월 12일 전국 써스데이 아일랜드 매장에서 출시될 예정이다.");
		videos.add(temp);

		temp = new Video();
		temp.setId("203");
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setPress("중앙일보");
		temp.setTitle("'민심이반'에 예상 깬 '전격 개편'…이완구 카드 배경은");
		temp.setContents("23일 발표된 청와대 조직개편과 국무총리 인선은 예상을 넘어 '전격적'으로 이뤄졌다. 당초 정홍원 총리를 유임시킬 것이란 전망이 지배적이었으나, 박근혜 대통령은 후임자로 이완구 새누리당 원내대표 카드를 꺼내들었다. 이르면 이번 주내 발표될 수 있다는 관측도 있었지만, 청와대 내부에서조차 예상하지 못했던 것으로 전해졌다. 교체된 한 수석비서관은 일부 기자들과 오찬을 잡고 발표 전 장소까지 예약했다가 취소했다. 자신의 거취에 대해 사전 통지를 받지 못한 것으로 전해졌다. ");
		videos.add(temp);

		temp = new Video();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("204");
		temp.setPress("뉴스1");
		temp.setTitle("서가대 '태연 추락사고, 진심으로 죄송' 공식사과");
		temp.setContents("23일 서가대는 공식 홈페이지를 통해 '22일 서울올림픽공원 체조경기장에서 열린 코리아 그랜드세일 기념 제24회 서가대 시상식에서 걸그룹 소녀시내 유닛 태티서의 멤버인 태연이 공연 후 무대 퇴장 도중 예기치 못한 사고를 당한 것과 관련해 태연과 멤버, 소속사, 팬 여러분께 진심으로 사과드린다'고 사과했다.");
		videos.add(temp);

		temp = new Video();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("205");
		temp.setPress("한겨례");
		temp.setTitle("'공포의 8번'…'진짜' 여군 이다희, PT체조 받다 울상");
		temp.setContents("MBC가 23일 공개한 현장 사진에는 여군특집 2기 편에 출연한 배우 김지영, 박하선, 강예원, 이다희, 방송인 이지애, 개그우먼 안영미, 걸그룹 에이핑크의 윤보미, f(x)의 엠버까지 8명의 멤버들이 훈련 받는 모습이 담겼다.");
		videos.add(temp);

		temp = new Video();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("206");
		temp.setPress("한겨례");
		temp.setTitle("수지, 미모 버리고 순박한 조선처녀 변신…'도리화가' 스틸공개");
		temp.setContents("최근 온라인상에 공개된 '도리화가' 스틸에서 수지는 화사하고 청순한 미모를 거무튀튀한 피부 분장과 낡은 한복으로 가리고 순박한 조선시대 처녀로 변신했다. 영화 '건축학개론'으로 국민 첫사랑이 된 수지는 3년만의 스크린 컴백작 '도리화가'에서 조선 최초의 여류 명창 '진채선'역을 맡았다. ");
		videos.add(temp);

		temp = new Video();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("207");
		temp.setPress("한겨례");
		temp.setTitle("테일러 복수극’ KDB생명, 삼성 꺾고 4연패 탈출");
		temp.setContents("구리 KDB생명은 23일 용인실내체육관에서 열린 용인 삼성과의 KB국민은행 2014~2015 여자프로농구 5라운드 경기에서 66-63으로 이겼다. KDB생명은 이날 승리로 4연패에서 탈출, 5위 부천 하나외환과의 격차를 0.5경기로 줄였다. 반면, 2연패에 빠진 삼성은 3위 청주 KB 스타즈와의 격차가 3.5경기까지 벌어졌다.4라운드 맞대결에서 부진했던 테일러(10득점 10리바운드 2블록)가 이미 전반에 더블 더블을 작성하며 팀 승리의 디딤돌 역할을 했고, 한채진(13득점 3점슛 3개 3리바운드 2어시스트)은 고비마다 3점슛을 터뜨렸다.");
		videos.add(temp);	

		temp = new Video();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("208");
		temp.setPress("한겨례");
		temp.setTitle("KIA 쌍무지개 될까? BK 행보가 궁금하다");
		temp.setContents("김병현은 작년 오랜 꿈을 이루었다. 해외파 특별지명을 받았지만 2012년 고향팀이 아닌 넥센에 입단했다. 마음속으로 언젠가는 고향팀 KIA에서 뛸 것이라는 의지가 강했다. 마침 2014시즌 도중 투수력이 필요한 KIA와 넥센의 트레이드가 성사되면서 타이거즈 유니폼을 입었다. ");
		videos.add(temp);

		temp = new Video();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("209");
		temp.setPress("한겨례");
		temp.setTitle("[서호정의 킥오프] 감독이 찜하면 맹활약, ‘슈틸리케 법칙’을 아시나요?");
		temp.setContents("4전 전승에 무실점. 대한민국 축구 국가대표팀을 3회 연속 아시안컵 4강으로 이끈 울리 슈틸리케 감독은 5개월 만에 달라진 한국 축구의 힘을 보여주고 있다. 브라질월드컵과 달리 끈끈하게 버티는 힘과 보는 이의 마음을 흔드는 투지 넘치는 플레이는 ‘아시아의 호랑이’를 다시 일으켜 세웠다. 이청용과 구자철이 부상으로 조기에 대회를 마감하는 큰 어려움 속에서도 슈틸리케 감독과 대표팀은 큰 요동 없이 전진 중이다.");
		videos.add(temp);

		temp = new Video();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("210");
		temp.setPress("뉴스1");
		temp.setTitle("[한준 이슈] 중국과 손잡은 AT…새로운 슈퍼파워");
		temp.setContents("아틀레티코마드리드의 단장이자 소유주인 미겔 앙헬 길 마린이 중국인 투자자 왕젠린 회장의 아틀레티코 이사진 합류를 환영하며 남긴 말이다. 레알마드리드와 FC바르셀로나(바르사)의 아성에 도전하며 스페인 프리메라리가 무대에서 양강 독주 체제를 깨트린 아틀레티코는 디에고 시메오네 감독 보다 더 강력한 지원군을 얻은 모습이다.스페인 스포츠 신문 ‘마르카’는 ‘아틀레티코가 왕젠린을 영입했다’고 비유했다. 막강한 자금력을 갖춘 투자자를 유치하면서 아틀레티코는 당장 4,500만 유로(약 566억원)의 투자금을 확보했다. 중국 기업 다렌완다의 왕젠린 회장은 이 투자금을 통해 아틀레티코의 지분 20%를 확보하게 됐다.");
		videos.add(temp);

		temp = new Video();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("211");
		temp.setPress("뉴스1");
		temp.setTitle("이재용, 방한 왕양 中 부총리 만나");
		temp.setContents("최근 활발한 행보를 보이고 있는 이재용(사진) 삼성전자 부회장이 23일 서울 장충동 신라호텔에서 ‘중국 방문의 해’ 행사 참석차 방한한 왕양(汪洋) 중국 부총리와 만나 사업협력 방안을 논의했다.이 부회장은 삼성의 중국사업 추진 현황을 소개하고 중장기적 사업협력 방안에 대해 의견을 나눈 것으로 알려졌다. 이 부회장은 “한·중 양국 간 인적 교류 증가로 신라호텔과 용인 에버랜드 테마파크를 찾는 중국 고객들이 늘었다”면서 “중국 지방정부 및 기업과도 협력을 확대해 한·중 교류 활성화에 적극 동참하겠다”고 말했다. 이 부회장은 지난해 2월에도 중국 베이징에서 왕양 부총리를 만난 바 있다.");
		videos.add(temp);

		temp = new Video();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("212");
		temp.setPress("뉴스1");
		temp.setTitle("‘무한도전’ 유재석, 칼 대신 당근 들고 액션연기…‘진지한데 웃겨’");
		temp.setContents("‘무한도전’ 측은 23일 오후 프로그램 공식 트위터 계정을 통해 “10년 묵은 야수 본능 뽐내는 다섯 멤버들의 액션 초행길! ‘올드보이’,‘신세계’의 명장면을 180도 바꿔 놓은 기상천외 액션! Ready~ Action! ‘나는 액션 배우다’ 토요일 저녁 6시 25분”이라는 글과 사진을 올렸다.");
		videos.add(temp);

		temp = new Video();
		temp.setDgree(2);
		temp.setYear(2015);
		temp.setMonth(1);
		temp.setDay(23);
		temp.setId("213");
		temp.setPress("뉴스1");
		temp.setTitle("'軍 또 왜 이러나'…잇단 구타·가혹행위 사건에 침통");
		temp.setContents("화재 연루 탈영병·울산 자살 병사, 같은 부대 A급 관심병사 (춘천=연합뉴스) 이재현 기자 = 지난해 육군 22사단 총기 난사 사건과 28사단 윤모 일병 폭행치사 사건을 계기로 군부대 악습을 개선하기 위한 노력이 이어지고 있으나 강원 지역 병영 사고는 여전히 끊이지 않고 있다.일부 부대에서는 부사관이 후임 부사관을 폭행·추행하는가 하면, 초급 간부는 부대원 9명에게 구타·가혹행위를 했다.또 A급 관심 병사들은 휴가를 나갔다가 스스로 목숨을 끊거나 화재 사건 등 범죄에 연루됐다.육군은 23일 후임 부사관을 상습적으로 폭행한 혐의 등으로 화천 모 부대 소속 허모(22) 중사를 구속했다.허 중사는 지난 2013년 11월부터 지난해 12월까지 같은 부대에 근무하는 후임 A(21) 중사와 B(21) 하사 등 2명을 주먹과 발로 폭행하는 등 모두 6차례에 걸쳐 폭행한 혐의다.");
		videos.add(temp);
	}
}
