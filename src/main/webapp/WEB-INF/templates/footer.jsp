<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page language="java" contentType="text/html;charset=UTF-8" %>

    <div class="mk-fullscreen-search-overlay">
        <a href="#" class="mk-fullscreen-close"><i class="mk-moon-close-2"></i></a>
        <div id="mk-fullscreen-search-wrapper">
            <p>설정한 구간 내에서 기사를 검색합니다. 검색어를 입력하세요.</p>
            <form id="mk-fullscreen-searchform" method="post" action="search.do">
                <input type="text" value="" name="query" id="mk-fullscreen-search-input">
                <i class="mk-icon-search fullscreen-search-icon"><input value="" type="submit"></i>
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
            <script>
            function show_preloader(){
            	jQuery('.mk-fullscreen-search-overlay').removeClass('mk-fullscreen-search-overlay-show');
            	jQuery('.mk-preloader').show();
            	jQuery('.mk-preloader').css('z-index', 100);
            	jQuery('.mk-preloader').css('margin-top', '300px');
            	jQuery('.mk-preloader').css('position', 'fixed');
            	jQuery('#mk-boxed-layout').fadeTo(500, 0.2);
            	jQuery('#mk-boxed-layout form').remove();
            }
            jQuery('.fullscreen-search-icon').click(function(){
            	show_preloader();
            });
            jQuery('.search-date').click(function(){
            	show_preloader();
            });
            </script>
        </div>
    </div>
    <div id="sw-main-box">
        <div class="sw-img-bg"></div>
        <div id="sw-open-icon">
        	<a href="#"><i class="mk-icon-cog"></i></a>
        </div>
        <p class="sw-title">시작 시점</p>
        <section class="sw-layout clear">
            <div class="styled-select">
	            <select id="start-year" class="sw-option-left">
	            <c:forEach begin="0" end="5" var="loop">
				   <c:if test="${section.startYear == 2015-loop}"><option selected>${2015-loop}년 </option></c:if>
				   <c:if test="${section.startYear != 2015-loop}"><option>${2015-loop}년 </option></c:if>
				</c:forEach>
				</select>
			</div>
			<div class="styled-select">
				<select id="start-month" class="sw-option-right">
        		<c:forEach begin="1" end="12" var="loop">
				   <c:if test="${section.startMonth == loop}"><option selected>${loop}월 </option></c:if>
				   <c:if test="${section.startMonth != loop}"><option>${loop}월 </option></c:if>
				</c:forEach>
				</select>
			</div>
        </section>
        <div class="sw-separator"></div>
        <p class="sw-title">종료 시점</p>
        <section class="sw-layout clear">
            <div class="styled-select">
	            <select id="end-year" class="sw-option-left">
	        		<c:forEach begin="0" end="5" var="loop">
					   <c:if test="${section.endYear == 2015-loop}"><option selected>${2015-loop}년 </option></c:if>
					   <c:if test="${section.endYear != 2015-loop}"><option>${2015-loop}년 </option></c:if>
					</c:forEach>
				</select>
			</div>
			<div class="styled-select">
				<select id="end-month" class="sw-option-right">
	        		<c:forEach begin="1" end="12" var="loop">
					   <c:if test="${section.endMonth == loop}"><option selected>${loop}월 </option></c:if>
					   <c:if test="${section.endMonth != loop}"><option>${loop}월 </option></c:if>
					</c:forEach>
				</select>
			</div>
        </section>
        <div class="sw-separator"></div>
        <p class="sw-title">카테고리</p>
        <section id="categories" class="sw-layout clear">
        	<c:forEach var="category" items="${section.categories}" varStatus="loop">
        		<c:if test="${section.categoryIdx[loop.index]==1}">
        			<a id = "${category}" class="sw-btn mk-active" data-name="${category}" href="#">${section.categoryKRs[loop.index]} </a>
        		</c:if>
        		<c:if test="${section.categoryIdx[loop.index]==0}">
        			<a id = "${category}" class="sw-btn" data-name="${category}" href="#">${section.categoryKRs[loop.index]} </a>
        		</c:if>
        	</c:forEach>
        </section>
        <div class="sw-separator-final"></div>
        <section class="sw-templates">
            <p>설정한 기간과 카테고리 내에서<br/> 기사를 가져옵니다.</p>
        </section>  
        <section class="sw-search clear">
        	<a id = "article-load" data-name="load" class="sw-btn" href="#">가져오기 </a>
        </section>
    </div>
	 <form id="mainview" accept-charset="utf-8" action="/Frontpage/main.do" method="post">
		<input type="hidden" name="startYear" value="${section.startYear}"/>
		<input type="hidden" name="startMonth" value="${section.startMonth}"/>
		<input type="hidden" name="endYear" value="${section.endYear}"/>
		<input type="hidden" name="endMonth" value="${section.endMonth}"/>
		<input type="hidden" name="pageIndex" value="${section.pageIndex}"/>
		<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
			<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
		</c:forEach>
	</form>
	<form id="mainview-prev" accept-charset="utf-8" action="/Frontpage/main.do" method="post">
		<input type="hidden" name="startYear" value="${section.startYear}"/>
		<input type="hidden" name="startMonth" value="${section.startMonth}"/>
		<input type="hidden" name="endYear" value="${section.endYear}"/>
		<input type="hidden" name="endMonth" value="${section.endMonth}"/>
		<input type="hidden" name="pageIndex" value="${section.pageIndex-1}"/>
		<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
			<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
		</c:forEach>
	</form>
	<form id="mainview-next" accept-charset="utf-8" action="/Frontpage/main.do" method="post">
		<input type="hidden" name="startYear" value="${section.startYear}"/>
		<input type="hidden" name="startMonth" value="${section.startMonth}"/>
		<input type="hidden" name="endYear" value="${section.endYear}"/>
		<input type="hidden" name="endMonth" value="${section.endMonth}"/>
		<input type="hidden" name="pageIndex" value="${section.pageIndex+1}"/>
		<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
			<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
		</c:forEach>
	</form>
    <form id="gridview" accept-charset="utf-8" action="/Frontpage/grid.do" method="post">
		<input type="hidden" name="startYear" value="${section.startYear}"/>
		<input type="hidden" name="startMonth" value="${section.startMonth}"/>
		<input type="hidden" name="endYear" value="${section.endYear}"/>
		<input type="hidden" name="endMonth" value="${section.endMonth}"/>
		<input type="hidden" name="pageIndex" value="${section.pageIndex}"/>
		<c:forEach var="i" items="${section.categoryIdx}" varStatus="loop">
			<input type="hidden" name="categoryIdx[${loop.index}]" value="${i}"/>
		</c:forEach>
	</form>
    <form id="dynamic-form"></form>
</body>