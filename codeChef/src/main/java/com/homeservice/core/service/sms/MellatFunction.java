/*package com.homeservice.core.service.sms;


import javax.xml.namespace.QName;

import org.apache.axis.AxisFault;
import org.apache.axis.client.Call;
import org.apache.axis.client.Service;


public class MellatFunction {
	public String getRefNumber(String  callbackURL , long amount,long orderId , String localDate, String localTime,String additionalData, long payerId) throws Exception
	{
	java.lang.Object resp = null;
	try {
		Call call1=null;
		ClientInfo clientInfo = new ClientInfo();
		clientInfo.setInfo("mellat");
		call1=makeWebServiceCall(clientInfo,"bpPayRequest");
		resp = call1.invoke(new java.lang.Object[] {ClientInfo.merchantID, ClientInfo.merchantUser, ClientInfo.merchantPass,orderId,amount,localDate,localTime,additionalData ,callbackURL,payerId});
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

public String doRequest(String operationName,long orderId,long saleOrderId,long saleReferenceId)throws Exception{
	java.lang.Object resp = null;
	Call call1=null;
	ClientInfo clientInfo = new ClientInfo();
	clientInfo.setInfo("mellat");
	call1=makeWebServiceCall(clientInfo,operationName);
	resp = call1.invoke(new java.lang.Object[] {ClientInfo.merchantID, ClientInfo.merchantUser, ClientInfo.merchantPass,orderId,saleOrderId,saleReferenceId});
	System.out.println("response from mellat bank : " + resp);
	if(resp != null)
		return resp.toString();
	else
		return null;		
}

public Call makeWebServiceCall(ClientInfo clientInfo,String operationName) throws Exception{
	String wsdlLocation =ClientInfo.webServiceLocation;
	String nameSpace =ClientInfo.nameSpace;
	QName serviceName = new QName(nameSpace, ClientInfo.serviceName);
	Service service = new Service(wsdlLocation, serviceName);
	QName portName = new QName(nameSpace, ClientInfo.portName);
	return (Call)service.createCall( portName, operationName);
	return null;
}

public String getErrorMessage(int r)
{
	String errorMessage = ""; 

	switch (r) {
	case 0:
		//errorMessage = MellatPaymentErrors.Error0;
		break;
	case 11:
		//errorMessage = MellatPaymentErrors.Error11;
		break;


	default:
		//errorMessage = MellatPaymentErrors.DigitalPaymentError;
		break;
	}

	return errorMessage;
}

}
*/