package com.spring.frontpage.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spring.frontpage.model.ArticleSection;
import com.spring.frontpage.service.ArticleService;

@Controller
@RequestMapping(value = "/main.do")
public class MainController {
	@Autowired
	private ArticleService articleService;

	Logger log = LoggerFactory.getLogger(this.getClass());
	
	@RequestMapping(method = RequestMethod.GET)
	public String mainGet(Model model){
		ArticleSection section = new ArticleSection();
		model.addAttribute("articles", articleService.getMainArticles(section));
		model.addAttribute("section", section);
		return "main";
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public String mainPost(ArticleSection section, Model model){
		model.addAttribute("articles", articleService.getMainArticles(section));
		model.addAttribute("section", section);
		return "main";
	}
}
