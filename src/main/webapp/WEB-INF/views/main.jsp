<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page language="java" contentType="text/html;charset=UTF-8" %>

	<script type="text/javascript">
        var abb = {};
        var php = {};

        var ajaxurl = "search.do";
        var seturl = "main.do";
        var mk_responsive_nav_width = 1140;
    </script>
	<script src="<c:url value="/resources/scripts/jquery.easing.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/resources/scripts/clip.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/resources/scripts/mainview.js"/>" type="text/javascript"></script>

	<link href="<c:url value="/resources/styles/font-awesome.css"/>" rel="stylesheet" type="text/css">
	<link href="<c:url value="/resources/styles/switch-style-templates.css"/>" rel="stylesheet" type="text/css">
	<link href="<c:url value="/resources/styles/theme-styles.css"/>" rel="stylesheet" type="text/css">
	<link href="<c:url value="/resources/styles/gridview-main.css"/>" rel="stylesheet" type="text/css">
	
	<script src="<c:url value="/resources/scripts/scripts.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/resources/scripts/gridview.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/resources/scripts/setting-controll.js"/>" type="text/javascript"></script>
	
	<link href="<c:url value="/resources/styles/mainview.css"/>" rel="stylesheet" type="text/css">
</head>
<body class="home">
	<div class="mk-preloader" style="display:none;"></div>
    <div id="mk-boxed-layout">
        <div id="mk-theme-container" class="mk-transparent-header">
			<header id="mk-header" data-height="90" data-hover-style="5" data-transparent-skin="light" data-header-style="1" data-sticky-height="55" data-sticky-style="slide" data-sticky-offset="header" class="header-style-1 header-align-left header-toolbar-false sticky-style-slide  mk-background-stretch boxed-header transparent-header light-header-skin remove-header-bg-true">
		        <div class="mk-header-holder">
		            <div class="mk-header-inner">
		                <div class="mk-header-bg "></div>
		                <div class="mk-grid header-grid">
		                    <div class="mk-header-nav-container one-row-style menu-hover-style-5">
		                        <nav id="mk-main-navigation" class="main_menu">
		                            <ul id="menu-main-navigation" class="main-navigation-ul">
		                                <li id="menu-item-5110" class="menu-item current-menu-ancestor">
		                                	<a class="menu-item-link" href="javascript:;" onclick="$('#mainview').submit();">커버스토리</a>
		                                </li>
		                                <li id="menu-item-23" class="menu-item">
		                                	<a class="menu-item-link" href="javascript:;" onclick="$('#gridview').submit();">모아보기</a>
		                                </li>
		                            </ul>
		                        </nav>
		                        <div class="main-nav-side-search">
		                            <a class="mk-search-trigger mk-fullscreen-trigger" href="#"><i class="mk-icon-search"></i></a>
		                        </div>
		                    </div>
		                    <div class="header-logo logo-has-sticky">
		                        <a href="main.do">
		                            <img class="mk-desktop-logo light-logo" alt="Jupiter Wordpress Theme " src="<c:url value="/resources/images/logo3.png"/>" style="height:30px;">
		                        </a>
		                    </div>
		                    <div class="clearboth"></div>
		                </div>
		                <div class="mk-header-right">
		                </div>
		            </div>
		        </div>
		        <div class="clearboth"></div>
		        <div class="mk-header-padding-wrapper"></div>
		        <div class="clearboth"></div>
		    </header>
		    <div id="body-wrapper">
		        <div id="bgImage">
		            <div id="bgImageWrapper" class="image">
		            </div>
		        </div>
		        <div id="bgPattern"></div>
		        <div id="videoExpander"></div>
		        <div id="bgText">
		            <p class="topText"></p>
		            <br/>
		            <br/>
		            <a id="headerLink" href="javascript:;" onclick=""><p class="headerText"></p></a>
		            <br/>
		            <br/>
		            <p class="subText"></p>
		            <div style="clear:both"></div>
		        </div>
		        <ul id="bgImages">
		        	<c:forEach var="article" items="${articles}" varStatus="aloop">
		        	<c:if test="${!empty article.images[0]}">
			            <li>
			                <a href="${article.images[0]}"></a>
			                <img class="thumb" src="${article.images[0]}" alt="FRESH LOOKING SCROLLBAR">
			                <h3>
				                <c:choose>
				                	<c:when test="${fn:length(article.title) > 31}">
				                		<c:out value="${fn:substring(article.title,0,30)}"/>...
				                	</c:when>
				                	<c:otherwise>
				                		<c:out value="${article.title}"/>
				                	</c:otherwise>
				                </c:choose>
			                </h3>
			                <p>${article.year}년&nbsp;&nbsp;${article.month}월&nbsp;&nbsp;${article.day}일</p>
			                <div style="display:none;">${article.press}</div>
			                <form id="article-form${aloop.index}" accept-charset="utf-8" action="/Frontpage/article.do" method="post">
								<input type="hidden" name="id" value="${article.id}"/>
								<input type="hidden" name="startYear" value="${section.startYear}"/>
								<input type="hidden" name="startMonth" value="${section.startMonth}"/>
								<input type="hidden" name="endYear" value="${section.endYear}"/>
								<input type="hidden" name="endMonth" value="${section.endMonth}"/>
								<input type="hidden" name="pageIndex" value="${section.pageIndex}"/>
								<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
									<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
								</c:forEach>
							</form>	
			            </li>
		            </c:if>
		            </c:forEach>
		        </ul>
		        <div id="footer">
		        	<div id="footertext"></div>
		        	<div id="pgControl">     
		                <div id="pgControlButtons">
			        		<c:if test="${section.pageIndex == 1}">
			        			<a class="btnCtrlUnable prevPage" href="javascript:;" onclick=""></a>
			        		</c:if>
			        		<c:if test="${section.pageIndex != 1}">
			        			<a class="btnCtrl prevPage" href="javascript:;" onclick="$('#mainview-prev').submit();"></a>
			        		</c:if>			        		
			        		<c:if test="${section.pageIndex == section.pageIndexLimit}">
		                    	<a class="btnCtrlUnable nextPage" href="javascript:;" onclick=""></a>
			        		</c:if>			        		
			        		<c:if test="${section.pageIndex != section.pageIndexLimit}">
		                    	<a class="btnCtrl nextPage" href="javascript:;" onclick="$('#mainview-next').submit();"></a>
			        		</c:if>
	                    </div>
		        	</div>
		            <div id="bgControl">		             
		                <div id="bgControlButtons">
		                    <a class="btnCtrl prev" href="javascript:void(0);" onclick="prevBg()"></a>
		                    <a class="btnCtrl play" href="javascript:void(0);" onclick="playBg()"></a>
		                    <a class="btnCtrl pause" href="javascript:void(0);" onclick="pauseBg()"></a>
		                    <a class="btnCtrl next" href="javascript:void(0);" onclick="nextBg()"></a>
		                </div>
		            </div>
		            <div id="bgControlCount"></div>
		        </div>
		        <div id="fullControl"></div>
		    </div>
		</div>
    </div>
    
    