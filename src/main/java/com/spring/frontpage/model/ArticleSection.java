package com.spring.frontpage.model;

public class ArticleSection {
	private Integer startYear;
	private Integer startMonth;
	private Integer endYear;
	private Integer endMonth;
	private Integer searchYear;
	private Integer searchMonth;
	private Integer pageIndex;
	private Integer pageIndexLimit;
	private String[] categories = {"general", "politics", "economy", "society", "culture", "world", "it", "entertainment", "sports", "weather"};
	private String[] categoryKRs = {"종합", "정치", "경제", "사회", "문화", "세계", "IT", "연예", "스포츠", "날씨"};
	private Integer[] categoryIdx = {1, 0, 0, 0, 0, 0, 0, 0, 0, 0};
	
	public ArticleSection(){
		startYear = 2015;
		startMonth = 1;
		endYear = 2015;
		endMonth = 2;
		pageIndex = 1;
		pageIndexLimit = 100;
	}
	public Integer getStartYear() {
		return startYear;
	}
	public void setStartYear(Integer startYear) {
		this.startYear = startYear;
	}
	public Integer getStartMonth() {
		return startMonth;
	}
	public void setStartMonth(Integer startMonth) {
		this.startMonth = startMonth;
	}
	public Integer getEndYear() {
		return endYear;
	}
	public void setEndYear(Integer endYear) {
		this.endYear = endYear;
	}
	public Integer getEndMonth() {
		return endMonth;
	}
	public void setEndMonth(Integer endMonth) {
		this.endMonth = endMonth;
	}
	public Integer getSearchYear() {
		return searchYear;
	}
	public void setSearchYear(Integer searchYear) {
		this.searchYear = searchYear;
	}
	public Integer getSearchMonth() {
		return searchMonth;
	}
	public void setSearchMonth(Integer searchMonth) {
		this.searchMonth = searchMonth;
	}
	public Integer getPageIndex() {
		return pageIndex;
	}
	public void setPageIndex(Integer pageIndex) {
		this.pageIndex = pageIndex;
	}
	public Integer getPageIndexLimit() {
		return pageIndexLimit;
	}
	public void setPageIndexLimit(Integer pageIndexLimit) {
		this.pageIndexLimit = pageIndexLimit;
	}
	public String[] getCategories() {
		return categories;
	}
	public void setCategories(String[] categories) {
		this.categories = categories;
	}
	public String[] getCategoryKRs() {
		return categoryKRs;
	}
	public void setCategoryKRs(String[] categoryKRs) {
		this.categoryKRs = categoryKRs;
	}
	public Integer[] getCategoryIdx() {
		return categoryIdx;
	}
	public void setCategoryIdx(Integer[] categoryIdx) {
		this.categoryIdx = categoryIdx;
	}
}
