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
    .time-slide .nomal a{
    	height: 30px;
    	line-height: 30px;
    	padding-left: 12px;
    	margin: 1px 0!important;
    	border-left: 4px solid #eaeaea;
    }
    .time-slide .active a{
    	height: 30px;
    	line-height: 30px;
    	padding-left: 12px;
    	margin: 1px 0!important;
    	color: #F18C24!important;
    	border-left: 4px solid #F18C24;
    }
    #mk-sidebar.mk-builtin {
		width: 20%!important;
	}
	.sidebar-wrapper {
		position: fixed;
	}
	.wpb_row {
		width: 80%;
		float: right;
		margin-right: 50px;
	}
    </style>
	
	<link href="<c:url value="/resources/styles/font-awesome.css"/>" rel="stylesheet" type="text/css">
	<link href="<c:url value="/resources/styles/switch-style-templates.css"/>" rel="stylesheet" type="text/css">
	<link href="<c:url value="/resources/styles/theme-styles.css"/>" rel="stylesheet" type="text/css">
	<link href="<c:url value="/resources/styles/gridview.css"/>" rel="stylesheet" type="text/css">
	
	<script src="<c:url value="/resources/scripts/scripts.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/resources/scripts/gridview.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/resources/scripts/setting-controll.js"/>" type="text/javascript"></script>
</head>
<body class="page page-id-3615 page-child parent-pageid-4338 page-template-default  wpb-js-composer js-comp-ver-4.4.2 vc_responsive" data-backtext="Back" data-vm-anim="1">
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
		                                	<form id="mainview" accept-charset="utf-8" action="/Frontpage/main.do" method="post">
												<input type="hidden" name="startYear" value="${section.startYear}"/>
												<input type="hidden" name="startMonth" value="${section.startMonth}"/>
												<input type="hidden" name="endYear" value="${section.endYear}"/>
												<input type="hidden" name="endMonth" value="${section.endMonth}"/>
												<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
													<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
												</c:forEach>
											</form>
		                                </li>
		                                <li id="menu-item-23" class="menu-item">
		                                	<a class="menu-item-link" href="javascript:;" onclick="jQuery('#gridview').submit();">모아보기</a>
		                                	<form id="gridview" accept-charset="utf-8" action="/Frontpage/grid.do" method="post">
												<input type="hidden" name="startYear" value="${section.startYear}"/>
												<input type="hidden" name="startMonth" value="${section.startMonth}"/>
												<input type="hidden" name="endYear" value="${section.endYear}"/>
												<input type="hidden" name="endMonth" value="${section.endMonth}"/>
												<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
													<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
												</c:forEach>
											</form>
		                                </li>
                                    </ul>
                                </nav>
                                <div class="main-nav-side-search">
                                    <a class="mk-search-trigger mk-fullscreen-trigger" href="#"><i class="mk-icon-search"></i></a>
                                </div>
                            </div>
                            <div class="header-logo  logo-has-sticky">
                                <a  href="main.do">
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
                <form class="responsive-searchform" method="get" style="display:none;" action="domain">
                    <input type="text" class="text-input" value="" name="s" id="s" placeholder="Search..">
                    <i class="mk-icon-search"><input value="" type="submit"></i>
                </form>
            </header>
            <div id="theme-page">
	            <div class="mk-main-wrapper-holder">
					<div id="mk-page-id-3726" class="theme-page-wrapper mk-main-wrapper right-layout mk-grid vc_row-fluid">
						<div class="theme-content">
							<div class="wpb_row vc_row vc_row-fluid mk-fullwidth-false attched-false vc_row-fluid">
								<div style="" class="vc_col-sm-12 wpb_column column_container ">
									<div class="loop-main-wrapper">
										<section data-style="classic" data-uniqid="1409321998-54008c0e0cca3" class="mk-blog-container mk-theme-loop mk-classic-wrapper mag-one-column page-nav-style ">
											<c:if test="${empty articles[0]}">
											<article id="509" class="mk-blog-classic-item classic-1409321998-54008c0e0cca3 mk-isotop-item image-post-type mk-blog-landscape">
												<div class="mk-blog-meta">
													<h3 class="the-title">검색 결과가 없습니다.</h3>
												</div>
											</article>
											</c:if>
											<c:forEach var="article" items="${articles}" varStatus="aloop">
											<article id="509" class="mk-blog-classic-item classic-1409321998-54008c0e0cca3 mk-isotop-item image-post-type mk-blog-landscape">
												<c:if test="${!empty article.images[0]}">
												<div class="featured-image">
													<a class="mk-lightbox blog-classic-lightbox" data-fancybox-group="blog-classic" href="javascript:;" onclick="jQuery('#article-form${aloop.index}').submit();">
														<img src="${article.images[0]}">
														<div class="image-hover-overlay"></div>
													</a>
												</div>
												</c:if>
												<div class="mk-blog-meta">
													<div class="clearboth"></div>
													<h3 class="the-title"><a href="javascript:;" onclick="jQuery('#article-form${aloop.index}').submit();">${article.title}</a></h3>
													<div class="the-excerpt">
														<p>
														<c:choose>
															<c:when test="${fn:length(article.description) > 300}">
																<c:out value="${fn:substring(article.description,0,299)}"/>...
															</c:when>
															<c:otherwise>
																<c:out value="${article.description}"/>
															</c:otherwise>
														</c:choose>
														</p>
													</div>
													<div class="mk-blog-author">
														${article.press} &nbsp;&nbsp;&#8227;&nbsp;&nbsp; ${article.year}년&nbsp;&nbsp;${article.month}월&nbsp;&nbsp;${article.day}일
													</div>
													<div class="clearboth"></div>
												</div>
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
											</article>
											</c:forEach>
										</section>
									</div>
								</div>
							</div>
						</div>
						<aside id="mk-sidebar" class="mk-builtin">
							<div class="sidebar-wrapper">
								<section id="recent-posts-2" class="widget widget_recent_entries">
								<ul class="time-slide">
								<c:set var="loopNum" value="7"/>
								 <c:forEach begin="1" end="${loopNum * 2 - 1}" varStatus="i">
								 	<c:if test="${i.count == loopNum}">
										<c:set var="loopYear" value="${section.searchYear}"/>
										<c:set var="loopMonth" value="${section.searchMonth}"/>
										<li class="active">
											<a href="javascript:;" onclick="jQuery('#search-form${i.count}').submit();">${loopYear}년 ${loopMonth}월</a>
										</li>
								 	</c:if>
								 	<c:if test="${i.count != loopNum}">
									 	<c:choose>
									 		<c:when test="${section.searchMonth - loopNum + i.count < 1}">
												<c:set var="loopYear" value="${section.searchYear - 1}"/>
												<c:set var="loopMonth" value="${12 + section.searchMonth - loopNum + i.count}"/>
									 		</c:when>
									 		<c:when test="${section.searchMonth - loopNum + i.count > 12}">
												<c:set var="loopYear" value="${section.searchYear + 1}"/>
												<c:set var="loopMonth" value="${section.searchMonth - loopNum + i.count - 12}"/>
									 		</c:when>
									 		<c:otherwise>
												<c:set var="loopYear" value="${section.searchYear}"/>
												<c:set var="loopMonth" value="${section.searchMonth - loopNum + i.count}"/>
									 		</c:otherwise>
									 	</c:choose>	
									 	<c:if test="${loopYear > 2009 && loopYear < 2016}">
										 	<c:if test="${loopYear != 2015 || loopMonth < 3}">
										 		<li class="nomal search-date">
													<a href="javascript:;" onclick="jQuery('#search-form${i.count}').submit();">${loopYear}년 ${loopMonth}월</a>
												</li>
											</c:if>
										</c:if>
								 	</c:if>
								 	<form id="search-form${i.count}" accept-charset="utf-8" action="/Frontpage/search.do" method="post">
								 		<input type="hidden" name="query" value="${query}">
										<input type="hidden" name="searchYear" value="${loopYear}"/>
										<input type="hidden" name="searchMonth" value="${loopMonth}"/>
										<input type="hidden" name="startYear" value="${section.startYear}"/>
										<input type="hidden" name="startMonth" value="${section.startMonth}"/>
										<input type="hidden" name="endYear" value="${section.endYear}"/>
										<input type="hidden" name="endMonth" value="${section.endMonth}"/>
										<input type="hidden" name="pageIndex" value="${section.pageIndex-5+i.count}"/>
										<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
											<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
										</c:forEach>
									</form>	
								 </c:forEach>
								</ul>
								</section>
							</div>
						</aside>
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
	 </div>

	

