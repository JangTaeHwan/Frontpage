package com.spring.frontpage.config;

import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Aspect
@Component
public class FrontpageAspect {
	String ip;
	Logger log = LoggerFactory.getLogger(this.getClass());
	
	public void client_lp(){
		HttpServletRequest req = ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getRequest();
		ip = req.getHeader("X-FORWARDED-FOR");
		if (ip == null) ip = req.getRemoteAddr();
	}

    @Around("execution(* com.spring.frontpage.controller.* + .*(..))")
    public Object aroundAdvice(ProceedingJoinPoint thisJoinPoint) throws Throwable {
        String className = thisJoinPoint.getTarget().getClass().getSimpleName();
        String methodName = thisJoinPoint.getSignature().getName();
        String argsName = Arrays.toString(thisJoinPoint.getArgs());
        client_lp();
        log.info("Client ip: {}   Controller: {}   method: {}	argument: {}", ip, className, methodName, argsName);        
    	
        Object retVal= thisJoinPoint.proceed();

    /*	if(ip.equals("210.118.64.103"));
    	else retVal = "error";*/
        
    	return retVal;
    }
	
    
	/*

    @AfterReturning(pointcut="execution(* com.spring.frontpage.controller.GridController.gridPage(..))", returning="result")
    public void allStringMethodArguments(JoinPoint joinPoint, Object result){
    	result = "main";
    	System.out.println("Method returned value is : " + result);
    }
    
    @Before("execution(* com.spring.frontpage.controller.* + .*(..))")
    public void beforeTargetMethod(JoinPoint thisJoinPoint) {
        String className = thisJoinPoint.getTarget().getClass().getSimpleName();
        String methodName = thisJoinPoint.getSignature().getName();
        String argsName = Arrays.toString(thisJoinPoint.getArgs());
        if(ip == null) client_lp();
        log.info("Client ip: {}   Controller: {}   method: {}	argument: {}", ip, className, methodName, argsName);
    }
    
    */
}
