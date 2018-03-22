package com.homeservice.core.service.sms;

import java.io.IOException;
import java.io.InputStream;
import java.util.PropertyResourceBundle;
import java.util.ResourceBundle;

import org.apache.log4j.Logger;

public class ClientInfo {
    static Logger logger = Logger.getLogger(ClientInfo.class) ;

    public static String connUrl;
    public static String connClass;
    public static String connUser;
    public static String connPass;
    public static String field_Mtid;
    public static String field_refNum;
    public static String table_name;
    public static String webServiceLocation ;
    public static int maxAttempt ;
    public static int attemptInterval;
    public static String merchantID ;
    public static String merchantPass ;
    public static String merchantUser ;
    public static String serviceName ;
    public static String nameSpace ;
    public static String portName ;
    


    public ClientInfo() {
        //setInfo("saman");
        logger.debug("an instanc of ClientInfo was built and setInfo() is called");

    }



    public void setInfo(String bankName) {
        try {
        	InputStream inputFile = null;
            
        	if(bankName.equals("saman"))
            	inputFile = getClass().getResourceAsStream("/ir/org/karnik/mainParts/helper/payment/saman/webservice/configFile/config.properties");
            else if(bankName.equals("mellat"))
            	inputFile = getClass().getResourceAsStream("/ir/org/karnik/car/helper/payment/mellat/webservice/configFile/config.properties");
            
            
            ResourceBundle resourceBundle = new PropertyResourceBundle(inputFile);
            connUrl = resourceBundle.getString("connection-url");
            connClass = resourceBundle.getString("connection-class");
            connUser =resourceBundle.getString("connection-userName");
            connPass = resourceBundle.getString("connection-password");
            field_Mtid = resourceBundle.getString("field-mtid");
            field_refNum = resourceBundle.getString("field-refNum");
            table_name = resourceBundle.getString("table-name");
            webServiceLocation = resourceBundle.getString("webServiceLocation");
            maxAttempt = Integer.parseInt(resourceBundle.getString("maxAttempt"));
            attemptInterval = Integer.parseInt(resourceBundle.getString("attemptInterval"));
            merchantID = resourceBundle.getString("merchantID");
            merchantUser = resourceBundle.getString("merchantUser");
            merchantPass = resourceBundle.getString("merchantPass");
            serviceName = resourceBundle.getString("serviceName");
            nameSpace = resourceBundle.getString("nameSpace");
            
            portName = resourceBundle.getString("portName");
            

            logger.debug("parameter in ClientInfo is :" + "**connUrl: " +connUrl
                                                        + "**connClass: "+ connClass
                                                        + "**connUser : " + connUser
                                                        + "**field-mtid: "+ field_Mtid
                                                        + "**table_name: "+ table_name
                                                        + "**webServiceLocation: "+ webServiceLocation
                                                        + "**maxAttempt: " + maxAttempt
                                                        + "**attemptInterval:" + attemptInterval
                                                      ) ;


        } catch (IOException e) {
            logger.error("IOException is caught in ClientInfo :");
           // logger.error(Constants.getStackTrace(e));e.printStackTrace();
        }

    }
}
