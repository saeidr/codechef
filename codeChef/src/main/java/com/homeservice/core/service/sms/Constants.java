package com.homeservice.core.service.sms;

import java.io.PrintWriter;
import java.io.StringWriter;

public class Constants {
    public static final short ERROR_RESPONCE_RECEIVE_TOO_LATE = 68;
    public static final short NO_ERROR = 1;

    public static String getStackTrace(Throwable t)
     {
         StringWriter sw = new StringWriter();
         PrintWriter pw = new PrintWriter(sw, true);
         t.printStackTrace(pw);
         pw.flush();
         sw.flush();
         return sw.toString();
     }

    
}
