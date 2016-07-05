<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page language="java" contentType="text/html;charset=UTF-8" %>

	<script type="text/javascript">
        var abb = {};
        var php = {};

        var ajaxurl = ""
        var seturl = "main.do";
        var mk_responsive_nav_width = 1140;
    </script>
    <style>
    article{
		width: 90%;
		float: right;
		margin-right: 80px!important;
	}
    </style>
	
	<link href="<c:url value="/resources/styles/font-awesome.css"/>" rel="stylesheet" type="text/css">
	<link href="<c:url value="/resources/styles/switch-style-templates.css"/>" rel="stylesheet" type="text/css">
	<link href="<c:url value="/resources/styles/theme-styles.css"/>" rel="stylesheet" type="text/css">
	<link href="<c:url value="/resources/styles/gridview.css"/>" rel="stylesheet" type="text/css">
	
	<script src="<c:url value="/resources/scripts/scripts.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/resources/scripts/swiper.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/resources/scripts/gridview.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/resources/scripts/setting-controll.js"/>" type="text/javascript"></script>
</head>
<body class="single single-post postid-506 single-format-standard  wpb-js-composer js-comp-ver-4.4.2 vc_responsive" data-backtext="Back" data-vm-anim="1">
    <div class="mk-preloader"></div>
    <div id="mk-boxed-layout">
        <div id="mk-theme-container">
            <header id="mk-header" data-height="90" data-hover-style="5" data-transparent-skin="light" data-header-style="1" data-sticky-height="55" data-sticky-style="slide" data-sticky-offset="header" class="header-style-1 header-align-left header-toolbar-false sticky-style-slide  mk-background-stretch boxed-header transparent-header remove-header-bg-true">
                <div class="mk-header-holder">
                    <div class="mk-header-inner">
                        <div class="mk-header-bg "></div>
                        <div class="mk-grid header-grid">
                            <div class="mk-header-nav-container one-row-style menu-hover-style-5">
                                <nav id="mk-main-navigation" class="main_menu">
                                    <ul id="menu-main-navigation" class="main-navigation-ul">
	                                	<li id="menu-item-5110" class="menu-item">
		                                	<a class="menu-item-link"href="javascript:;" onclick="jQuery('#mainview').submit();">커버스토리</a>
		                                </li>
		                                <li id="menu-item-23" class="menu-item">
		                                	<a class="menu-item-link" href="javascript:;" onclick="jQuery('#gridview').submit();">모아보기</a>
		                                </li>
                                    </ul>
                                </nav>
                                <div class="main-nav-side-search">
                                    <a class="mk-search-trigger mk-fullscreen-trigger" href="#"><i class="mk-icon-search"></i></a>
                                </div>
                            </div>
                            <div class="header-logo  logo-has-sticky">
                                <a href="main.do">
                                    <img class="mk-desktop-logo dark-logo" alt="Jupiter Wordpress Theme " src="<c:url value="/resources/images/logo3.png"/>" style="height:30px;">
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
            <div id="theme-page">
            	<div class="mk-main-wrapper-holder">
            		<div class="theme-page-wrapper mk-blog-single right-layout vc_row-fluid mk-grid ">
            			<div class="theme-content ">
            				<article id="506" class="post-506 post type-post status-publish format-standard has-post-thumbnail hentry category-health-2 category-lifestyle tag-branding tag-business-2 tag-design tag-marketing tag-photography-2">	
								<h2 class="blog-single-title">${videos[0].title}</h2>
								<div class="blog-single-meta" style="float:right;">
								    <time class="mk-post-date" datetime="">
								        ${videos[0].press} &nbsp;&nbsp;&#8227;&nbsp;&nbsp; ${videos[0].year}년&nbsp;&nbsp;${videos[0].month}월&nbsp;&nbsp;${videos[0].day}일
								    </time>
								</div>
								<div class="single-featured-image" style="margin-top: 70px;">
            						<div style="overflow: hidden; width:700px; height:350px; margin-left: 100px;">
            							<div style="position: relative; margin-left: -100px; margin-top: -300px;">
	       									<iframe width=700 height=640 src="${videos[0].url}" scrolling=no></iframe>
	       								</div>
	       							</div>
            					</div>
								<div class="clearboth"></div>
								<div class="mk-single-content" itemprop="mainContentOfPage">
								    <div class="wpb_row vc_row  vc_row-fluid  mk-fullwidth-false  attched-false vc_row-fluid">
								        <div style="" class="vc_col-sm-12 wpb_column column_container ">
								            <div style=" margin-bottom:0px;text-align: left;" class="mk-text-block  ">
								                <p>${videos[0].contents}</p>
								                <div class="clearboth"></div>
								            </div>
								        </div>
								    </div>
								</div>
								<div class="single-post-tags">기사 출처 : <a href="${videos[0].url}" rel="tag" target="_blank" style="word-break:break-all;"> ${videos[0].url}</a></div>
								<section id="comments"></section>
							</article>
							<div class="clearboth"></div>
							</div>
							<aside id="mk-sidebar" class="mk-builtin">
							    <div class="sidebar-wrapper">
							        <section class="widget widget_categories">
							            <div class="widgettitle">관련 기사</div>
							            <ul>
							            <c:forEach begin="1" end="10" varStatus="i"> 
								            <c:if test="${!empty articles[i.count-1]}">
												<li style="white-space:nowrap;"><a href="javascript:;" onclick="jQuery('#article-form${i.count-1}').submit();">${ articles[i.count-1].title}</a></li>
												<form id="article-form${i.count}" accept-charset="utf-8" action="/Frontpage/article.do" method="post">
													<input type="hidden" name="id" value="${articles[i.count-1].id}"/>
													<input type="hidden" name="startYear" value="${section.startYear}"/>
													<input type="hidden" name="startMonth" value="${section.startMonth}"/>
													<input type="hidden" name="endYear" value="${section.endYear}"/>
													<input type="hidden" name="endMonth" value="${section.endMonth}"/>
													<input type="hidden" name="pageIndex" value="${section.pageIndex}"/>
													<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
														<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
													</c:forEach>
												</form>	
											</c:if> 
										</c:forEach>
						            	<c:if test="${!empty articles[10]}">
						            		<a href="javascript:;" onclick="jQuery('#moreArticle').submit();" style = "float:right;"><br/>더보기...</a>
						            		<form id="moreArticle" accept-charset="utf-8" action="/Frontpage/moreArticle.do" method="post">
												<input type="hidden" name="id" value="${videos[0].id}"/>
												<input type="hidden" name="startYear" value="${section.startYear}"/>
												<input type="hidden" name="startMonth" value="${section.startMonth}"/>
												<input type="hidden" name="endYear" value="${section.endYear}"/>
												<input type="hidden" name="endMonth" value="${section.endMonth}"/>
												<input type="hidden" name="pageIndex" value="${section.pageIndex}"/>
												<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
													<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
												</c:forEach>
											</form>	
						            	</c:if>
							            </ul>
							        </section>
							        <c:if test="${!empty videos[1]}">
							        <section class="widget widget_categories">
							            <div class="widgettitle">관련 영상</div>
							            <ul> 
							            <c:forEach begin="1" end="10" varStatus="i"> 
								            <c:if test="${!empty videos[i.count]}">
												<li style="white-space:nowrap;"><a href="javascript:;" onclick="jQuery('#video-form${i.count}').submit();">${ videos[i.count].title}</a></li>												
												<form id="video-form${i.count}" accept-charset="utf-8" action="/Frontpage/video.do" method="post">
													<input type="hidden" name="id" value="${videos[i.count].id}"/>
													<input type="hidden" name="startYear" value="${section.startYear}"/>
													<input type="hidden" name="startMonth" value="${section.startMonth}"/>
													<input type="hidden" name="endYear" value="${section.endYear}"/>
													<input type="hidden" name="endMonth" value="${section.endMonth}"/>
													<input type="hidden" name="pageIndex" value="${section.pageIndex}"/>
													<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
														<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
													</c:forEach>
												</form>	
											</c:if> 
										</c:forEach>
						            	<c:if test="${!empty videos[11]}">			            		
						            		<a href="javascript:;" onclick="jQuery('#moreVideo').submit();" style = "float:right;"><br/>더보기...</a>
						            		<form id="moreVideo" accept-charset="utf-8" action="/Frontpage/moreVideo.do" method="post">
												<input type="hidden" name="id" value="${videos[0].id}"/>
												<input type="hidden" name="startYear" value="${section.startYear}"/>
												<input type="hidden" name="startMonth" value="${section.startMonth}"/>
												<input type="hidden" name="endYear" value="${section.endYear}"/>
												<input type="hidden" name="endMonth" value="${section.endMonth}"/>
												<input type="hidden" name="pageIndex" value="${section.pageIndex}"/>
												<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
													<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
												</c:forEach>
											</form>	
						            	</c:if>
							            </ul>
							        </section>
							        </c:if>
							        <section class="widget widget_categories">
							            <div class="widgettitle">연관 검색어</div>
							            <ul> 
							            <c:forEach begin="1" end="10" varStatus="i"> 
								            <c:if test="${!empty videos[0].keywords[i.count-1]}">
								                <li style="white-space:nowrap;"><a href="javascript:;" onclick="jQuery('#search-form${i.count-1}').submit();">${ videos[0].keywords[i.count-1]}</a></li>
											 	<form id="search-form${i.count-1}" accept-charset="utf-8" action="/Frontpage/search.do" method="post">
											 		<input type="hidden" name="query" value="${videos[0].keywords[i.count-1]}">
													<input type="hidden" name="searchYear" value="${section.startYear}"/>
													<input type="hidden" name="searchMonth" value="${section.startMonth}"/>
													<input type="hidden" name="startYear" value="${section.startYear}"/>
													<input type="hidden" name="startMonth" value="${section.startMonth}"/>
													<input type="hidden" name="endYear" value="${section.endYear}"/>
													<input type="hidden" name="endMonth" value="${section.endMonth}"/>
													<input type="hidden" name="pageIndex" value="${section.pageIndex}"/>
													<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
														<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
													</c:forEach>
												</form>
							                </c:if>
							            </c:forEach>
							            </ul>
							        </section>
							    </div>
							</aside>
							<div class="clearboth"></div>
						</div>
					</div>
				</div>
				<div id="sub-footer">
					<div class=" mk-grid">
						<span class="mk-footer-copyright"></span>
					</div>
					<div class="clearboth"></div>
				</div>
	        </div>
	    </div>