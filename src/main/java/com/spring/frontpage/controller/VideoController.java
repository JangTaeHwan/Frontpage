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
@RequestMapping(value = "/video.do")
public class VideoController {
	@Autowired
	private ArticleService articleService;
	Logger log = LoggerFactory.getLogger(this.getClass());
	
	@RequestMapping(method = RequestMethod.POST)
	public String videoPost(@RequestParam(value="id", required=true)String id, ArticleSection section, Model model){
		model.addAttribute("articles", this.articleService.getRelativeArticles(id));
		model.addAttribute("videos", this.articleService.getRelativeVideos(id));
		model.addAttribute("section", section);
		return "video";
	}
}