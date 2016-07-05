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
                            <div class="header-logo logo-has-sticky">
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
                        <div class="theme-content">
                            <div class="wpb_row vc_row  vc_row-fluid  mk-fullwidth-false  attched-false vc_row-fluid">
                                <div style="" class="vc_col-sm-12 wpb_column column_container ">
                                    <div class="loop-main-wrapper">
                                        <section data-style="grid" data-uniqid="1409322181-54008cc5805de" class="mk-blog-container mk-theme-loop mk-grid-wrapper mag-one-column page-nav-style  ">
                                        	<c:forEach var="article" items="${articles}" varStatus="aloop">
                                            <article id="entry-509" class="mk-blog-grid-item mk-isotop-item grid-1409322181-54008cc5805de three-column">
                                                <div class="blog-grid-holder">
                                               		<c:if test="${!empty article.images[0]}">
                                                    <div class="featured-image">
                                                        <a class="mk-lightbox blog-grid-lightbox" data-fancybox-group="blog-grid" href="javascript:;" onclick="jQuery('#article-form${aloop.index}').submit();">
                                                        	<img alt="Curabitur ac neque at arcu" title="Curabitur ac neque at arcu" src="${article.images[0]}">
                                                        	<i class="mk-li-image blog-grid-hover-icon"></i>
                                                            <div class="image-hover-overlay"></div>
                                                        </a>
                                                    </div>
                                                    </c:if>
                                                    <div class="mk-blog-meta">
                                                        <h3 class="the-title"><a href="javascript:;" onclick="jQuery('#article-form${aloop.index}').submit();">${article.title}</a></h3>
                                                        <div class="the-excerpt">
                                                            <p>
                                                            <c:choose>
																<c:when test="${fn:length(article.description) > 120}">
																	<c:out value="${fn:substring(article.description,0,119)}"/>...
																</c:when>
																<c:otherwise>
																	<c:out value="${article.description}"/>
																</c:otherwise>
															</c:choose>
                                                            </p>
                                                        </div>
                                                        <time>${article.press} &nbsp;&nbsp;&#8227;&nbsp;&nbsp; ${article.year}년&nbsp;&nbsp;${article.month}월&nbsp;&nbsp;${article.day}일</time>
                                                    </div>
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
                                        <div class="mk-pagination mk-grid">
                                            <div class="mk-pagination-previous">
                                            	<c:if test="${section.pageIndex > 1}">
                                            	<a href="javascript:;" onclick="jQuery('#grid-form-prev').submit();"></a>
                                            	</c:if>
                                            </div>                                
                                            <div class="mk-pagination-inner">
                                            <c:if test="${section.pageIndex >= 5}">
                                            <c:forEach begin="1" end="9" varStatus="i"> 
								           		<c:if test="${i.count == 5}">
								           		<span class="current-page">${section.pageIndex}</span>
												</c:if> 
												<c:if test="${i.count != 5 && section.pageIndex-5+i.count <= section.pageIndexLimit}">
												<a class="page-number" title="${section.pageIndex-5+i.count}" href="javascript:;" onclick="jQuery('#grid-form${i.count}').submit();">${section.pageIndex-5+i.count}</a>
												</c:if>
											</c:forEach>
											</c:if>
											<c:if test="${section.pageIndex < 5}">
                                            <c:forEach begin="1" end="9" varStatus="i"> 
								           		<c:if test="${i.count == section.pageIndex}">
								           		<span class="current-page">${section.pageIndex}</span>
												</c:if> 
												<c:if test="${i.count != section.pageIndex && i.count <= section.pageIndexLimit}">
												<a class="page-number" title="${i.count}" href="javascript:;" onclick="jQuery('#grid-form${i.count}').submit();">${i.count}</a>
												</c:if>
											</c:forEach>
                                            </c:if>
                                            </div>
                                            <div class="mk-pagination-next">
                                            	<c:if test="${section.pageIndex < section.pageIndexLimit}">
                                            	<a href="javascript:;" onclick="jQuery('#grid-form-next').submit();"></a>
                                            	</c:if>
                                            </div>
                                            <div class="mk-total-pages">page&nbsp;&nbsp;${section.pageIndex}&nbsp;&nbsp;of&nbsp;&nbsp;${section.pageIndexLimit}</div>
                                        </div>
                                        
                                        <!-- 페이지 리스트 form 부분 -->
                                        <form id="grid-form-prev" accept-charset="utf-8" action="/Frontpage/grid.do" method="post">
											<input type="hidden" name="startYear" value="${section.startYear}"/>
											<input type="hidden" name="startMonth" value="${section.startMonth}"/>
											<input type="hidden" name="endYear" value="${section.endYear}"/>
											<input type="hidden" name="endMonth" value="${section.endMonth}"/>
											<c:if test="${section.pageIndex < 10}">
												<input type="hidden" name="pageIndex" value="1"/>
											</c:if>  	
											<c:if test="${section.pageIndex > 10}">
												<input type="hidden" name="pageIndex" value="${section.pageIndex-10}"/>
											</c:if>
											<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
												<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
											</c:forEach>
										</form>
										<form id="grid-form-next" accept-charset="utf-8" action="/Frontpage/grid.do" method="post">
											<input type="hidden" name="startYear" value="${section.startYear}"/>
											<input type="hidden" name="startMonth" value="${section.startMonth}"/>
											<input type="hidden" name="endYear" value="${section.endYear}"/>
											<input type="hidden" name="endMonth" value="${section.endMonth}"/>
											<c:if test="${section.pageIndex + 10 >= section.pageIndexLimit}">
												<input type="hidden" name="pageIndex" value="${section.pageIndexLimit}"/>
											</c:if>  	
											<c:if test="${section.pageIndex + 10 < section.pageIndexLimit}">
												<input type="hidden" name="pageIndex" value="${section.pageIndex+10}"/>
											</c:if>
											<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
												<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
											</c:forEach>
										</form>
										<c:if test="${section.pageIndex >= 5}">
											<c:forEach begin="1" end="9" varStatus="i"> 
											<c:if test="${i.count != 5 && section.pageIndex-5+i.count <= section.pageIndexLimit}">
											<form id="grid-form${i.count}" accept-charset="utf-8" action="/Frontpage/grid.do" method="post">
												<input type="hidden" name="startYear" value="${section.startYear}"/>
												<input type="hidden" name="startMonth" value="${section.startMonth}"/>
												<input type="hidden" name="endYear" value="${section.endYear}"/>
												<input type="hidden" name="endMonth" value="${section.endMonth}"/>
												<input type="hidden" name="pageIndex" value="${section.pageIndex-5+i.count}"/>
												<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
													<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
												</c:forEach>
											</form>	
											</c:if>
											</c:forEach>
										</c:if>
										<c:if test="${section.pageIndex < 5}">
											<c:forEach begin="1" end="9" varStatus="i">
											<c:if test="${i.count != section.pageIndex && i.count <= section.pageIndexLimit}">
											<form id="grid-form${i.count}" accept-charset="utf-8" action="/Frontpage/grid.do" method="post">
												<input type="hidden" name="startYear" value="${section.startYear}"/>
												<input type="hidden" name="startMonth" value="${section.startMonth}"/>
												<input type="hidden" name="endYear" value="${section.endYear}"/>
												<input type="hidden" name="endMonth" value="${section.endMonth}"/>
												<input type="hidden" name="pageIndex" value="${i.count}"/>
												<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
													<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
												</c:forEach>
											</form>
											</c:if>
											</c:forEach>
										</c:if>
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

	

