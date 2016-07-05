<!DOCTYPE HTML>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ page language="java"  contentType="text/html;charset=UTF-8"  %>
<html>

<tiles:insertAttribute name="header"/>
<tiles:insertAttribute name="body" />
<tiles:insertAttribute name="footer"/>

</html>
