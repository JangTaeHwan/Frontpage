package com.spring.frontpage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.spring.frontpage.model.ArticleSection;
import com.spring.frontpage.service.ArticleService;

@Controller
public class GridController {
	@Autowired
	private ArticleService articleService;
	
	@RequestMapping(value = "/grid.do", method = RequestMethod.POST)
	public String gridPage(ArticleSection section, Model model){
		model.addAttribute("articles", articleService.getMainArticles(section));
		model.addAttribute("section", section);
		return "grid";
	}	
	@RequestMapping(value = "/moreArticle.do", method = RequestMethod.POST)
	public String moreArticlePage(@RequestParam(value="id", required=true)String id, ArticleSection section, Model model){
		model.addAttribute("articles", this.articleService.getRelativeArticles(id));
		model.addAttribute("section", section);
		return "moreArticle";
	}	
	@RequestMapping(value = "/moreVideo.do", method = RequestMethod.POST)
	public String moreVideoPage(@RequestParam(value="id", required=true)String id, ArticleSection section, Model model){
		model.addAttribute("videos", this.articleService.getRelativeVideos(id));
		model.addAttribute("section", section);
		return "moreVideo";
	}
}
