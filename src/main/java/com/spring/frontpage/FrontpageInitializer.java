package com.spring.frontpage;

import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.DispatcherServlet;

import com.spring.frontpage.config.FrontpageConfig;

public class FrontpageInitializer implements WebApplicationInitializer {
	
	@Override
	public void onStartup(final ServletContext servletContext) throws ServletException{
		try{
		    FilterRegistration.Dynamic encodingFilter = servletContext.addFilter("encoding-filter", new CharacterEncodingFilter());
		    encodingFilter.setInitParameter("encoding", "UTF-8");
		    encodingFilter.setInitParameter("forceEncoding", "true");
		    encodingFilter.addMappingForUrlPatterns(null, true, "/*");
			registerDispatcherServlet(servletContext);
		}
		catch(Throwable e){
			System.out.println(e.getMessage());
		}
	}
	
	private void registerDispatcherServlet(ServletContext servletContext){
        AnnotationConfigWebApplicationContext dispatcherContext = createContext(FrontpageConfig.class);
        ServletRegistration.Dynamic dispatcher;
        dispatcher = servletContext.addServlet("dispatcher", new DispatcherServlet(dispatcherContext));
		dispatcher.setLoadOnStartup(1);
		dispatcher.addMapping("*.do");
	}
	
   private AnnotationConfigWebApplicationContext createContext(final Class<?>... annotatedClasses) {
        AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
        context.register(annotatedClasses);
        return context;
   }
}
