package com.spring.frontpage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.spring.frontpage.model.*;

@Service
@Component
public class ArticleService {

	@Autowired
	private	HbaseService hbaseService;
	
	public List<Article> getMainArticles(ArticleSection section){
		return this.hbaseService.getMainArticles(section);
	}
	
	public List<Article> getSearchArticles(String query, ArticleSection section){
		return this.hbaseService.getSearchArticles(query, section);
	}
	
	public List<Article> getRelativeArticles(String id){
		return this.hbaseService.getRelativeArticles(id);
	}
	
	public List<Video> getRelativeVideos(String id){
		return this.hbaseService.getRelativeVideos(id);
	}
}
