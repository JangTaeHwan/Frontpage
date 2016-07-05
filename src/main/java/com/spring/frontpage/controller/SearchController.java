package com.spring.frontpage.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.spring.frontpage.model.ArticleSection;
import com.spring.frontpage.service.ArticleService;

@Controller
@RequestMapping(value = "/search.do")
public class SearchController {
	@Autowired
	private ArticleService articleService;

	Logger log = LoggerFactory.getLogger(this.getClass());
	
	@RequestMapping(method = RequestMethod.POST)
	public String searchPage(@RequestParam(value="query", required=true)String query, ArticleSection section, Model model){
		log.info("{} {} {}", section.getSearchYear(), section.getSearchMonth(), query);
		model.addAttribute("articles", articleService.getSearchArticles(query, section));
		model.addAttribute("section", section);
		model.addAttribute("query", query);
		return "search";
	}
}
