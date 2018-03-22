package com.homeservice.core.service.sms;

import javax.xml.namespace.QName;


import org.apache.axis.AxisFault;
import org.apache.axis.client.Call;
import org.apache.axis.client.Service;

public class SendSms {

	
	public String register;
	public String Password;
	
	public static Call makeWebServiceCall(ClientInfo clientInfo,String operationName) throws Exception{
		String wsdlLocation ="http://panel.rahyab.ir/RahyabSMSService.asmx?wsdl";
		String nameSpace ="http://tempuri.org/";
		QName serviceName = new QName(nameSpace, "SendWebService");
		Service service = new Service(wsdlLocation , serviceName);
		QName portName = new QName(nameSpace, "SendWebServiceSoap");
		return (Call)service.createCall( portName, operationName);
		
	}
	
	public static String sendSingelSms(String register_mobile,String Password) throws Exception
	{
	java.lang.Object resp = null;
	try {
		Call call1=null;
		ClientInfo clientInfo = new ClientInfo();
		call1=makeWebServiceCall(clientInfo,"SendSMS_Single");
		resp = call1.invoke(new java.lang.Object[] {"RahyabSMS","R@hy@bSoap_V1" , Password , register_mobile,"10001701995120","fanavasystem10","F@as10102015", "FANAVASYSTEM" , "" , ""   });
		System.out.println("response from mellat bank : " + resp);

	}catch (AxisFault ax) {
		ax.printStackTrace();
		throw ax;

	}catch (Exception e) {
		e.printStackTrace();
		throw e;
	}
	if(resp != null)
		return resp.toString();
	else
		return null;
}
	public static void main(String []arg){
		try{
		sendSingelSms("09127141848","123");
		}catch(Exception e){
			e.printStackTrace();
		}
	}

}
