<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page language="java" contentType="text/html;charset=UTF-8" %>

	<script type="text/javascript">
        var abb = {};
        var php = {};

        var ajaxurl = ""
        var seturl = "grid.do";
        var mk_responsive_nav_width = 1140;
    </script>
	
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
		                                	<a class="menu-item-link" href="javascript:;" onclick="jQuery('#mainview').submit();">커버스토리</a>
		                                </li>
		                                <li id="menu-item-23" class="menu-item current-menu-ancestor">
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
                    <div id="mk-page-id-3615" class="theme-page-wrapper mk-main-wrapper full-layout  mk-grid vc_row-fluid">
                        <div class="theme-content ">
                            <div class="wpb_row vc_row  vc_row-fluid  mk-fullwidth-false  attched-false vc_row-fluid">
                                <div style="" class="vc_col-sm-12 wpb_column column_container ">
                                    <div class="loop-main-wrapper">
                                        <section data-style="grid" data-uniqid="1409322181-54008cc5805de" class="mk-blog-container mk-theme-loop mk-grid-wrapper mag-one-column page-nav-style  ">
                                        	<c:forEach var="video" items="${videos}" varStatus="aloop">
                                            <article id="entry-509" class="mk-blog-grid-item mk-isotop-item grid-1409322181-54008cc5805de three-column">
                                                <div class="blog-grid-holder">
                                                    <div class="featured-image">
                                                        <a class="mk-lightbox blog-grid-lightbox" data-fancybox-group="blog-grid" href="javascript:;" onclick="jQuery('#video-form${aloop.index}').submit();">
                                                        	<img alt="Curabitur ac neque at arcu" title="Curabitur ac neque at arcu" src="${video.thumnail}">
                                                        	<i class="mk-li-image blog-grid-hover-icon"></i>
                                                            <div class="image-hover-overlay"></div>
                                                        </a>
                                                    </div>
                                                    <div class="mk-blog-meta">
                                                        <h3 class="the-title"><a href="javascript:;" onclick="jQuery('#video-form${aloop.index}').submit();">${video.title}</a></h3>
                                                        <div class="the-excerpt">
                                                            <p>
                                                            <c:choose>
																<c:when test="${fn:length(video.description) > 120}">
																	<c:out value="${fn:substring(video.description,0,119)}"/>...
																</c:when>
																<c:otherwise>
																	<c:out value="${video.description}"/>
																</c:otherwise>
															</c:choose>
                                                            </p>
                                                        </div>
                                                        <time>${video.press} &nbsp;&nbsp;&#8227;&nbsp;&nbsp; ${video.year}년&nbsp;&nbsp;${video.month}월&nbsp;&nbsp;${video.day}일</time>
                                                    </div>
                                                </div>
                                                <form id="video-form${aloop.index}" accept-charset="utf-8" action="/Frontpage/video.do" method="post">
													<input type="hidden" name="id" value="${video.id}"/>
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
                            <div class="clearboth"></div>
                        </div>
                        <div class="clearboth"></div>
                    </div>
                    <div class="clearboth"></div>
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

	

