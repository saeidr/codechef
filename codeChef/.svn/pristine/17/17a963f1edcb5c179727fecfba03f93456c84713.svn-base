package com.homeservice.core.service.encription;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;
import org.springframework.stereotype.Repository;

@Repository("AES128")
public class AES128 {
	private static String key1 = ""; 
	private static String key2 = "";

	public static String encrypt(String value) {
		try {
			FileInputStream fs = new FileInputStream("d:\\projectKey.io");
			DataInputStream is = new DataInputStream(fs);
			BufferedReader br = new BufferedReader(new InputStreamReader(is));
			key1 = br.readLine();
			key2 = br.readLine();
			
			IvParameterSpec iv = new IvParameterSpec(key2.getBytes("UTF-8"));

			SecretKeySpec skeySpec = new SecretKeySpec(key1.getBytes("UTF-8"),
					"AES");
			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
			cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);
			byte[] encrypted = cipher.doFinal(value.getBytes());
			return  Base64.encodeBase64String(encrypted);
		} catch (Exception ex) {
		}
		return null;
	}

	public static String encryptSha1Aes128(String value) {
//		return encryptToSHA1(encrypt(value));
		return encrypt(value);
	}

	public static String decrypt(String encrypted) {
		try {
			FileInputStream fs = new FileInputStream("d:\\projectKey.io");
			DataInputStream is = new DataInputStream(fs);
			BufferedReader br = new BufferedReader(new InputStreamReader(is));
			key1 = br.readLine();
			key2 = br.readLine();

			IvParameterSpec iv = new IvParameterSpec(key2.getBytes("UTF-8"));

			SecretKeySpec skeySpec = new SecretKeySpec(key1.getBytes("UTF-8"),
					"AES");
			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
			cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);
			byte[] original = cipher.doFinal(Base64.decodeBase64(encrypted));

			return new String(original);
		} catch (Exception ex) {
		}
		return null;
	}

	static String encryptToSHA1(String input) {
		String resultSHA1 = "";
		try {
			MessageDigest mDigest = MessageDigest.getInstance("SHA1");
			byte[] result = mDigest.digest(input.getBytes());
			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < result.length; i++) {
				sb.append(Integer.toString((result[i] & 0xff) + 0x100, 16)
						.substring(1));
			}
			resultSHA1 = sb.toString();
		} catch (NoSuchAlgorithmException e) {
		}

		return resultSHA1;
	}

	public static void main(String[] args) {
		System.out.println(decrypt("vdB8kVIdYRShhwSiE8Fwng=="));
//		System.out.println(((decrypt("DoF2oklhSi7jay1okhQHrg=="))));
//		System.out.println((encryptToSHA1(encrypt("ali110"))));
		//2fcbf4dfc69a2d986d5db7040f130e67bd0dafe1
	}
}