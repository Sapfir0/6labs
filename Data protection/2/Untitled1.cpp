//-------------------------------------------------------------------
#include "windows.h"
#include "Wincrypt.h"
#include <stdio.h>
#include <iostream>


int main() {
	DWORD dwIndex=0;
	DWORD dwType;
	DWORD cbName;
	LPTSTR pszName;
	while (CryptEnumProviders(dwIndex, NULL, 0, &dwType, NULL, &cbName))
	{
	  if (!cbName)
	    break;
	   
	  if (!(pszName = (LPTSTR)LocalAlloc(LMEM_ZEROINIT, cbName)))
	    return 0;
	  
	  if (!CryptEnumProviders(dwIndex++, NULL, 0, &dwType, pszName, &cbName))
	  { 
	    //Error("CryptEnumProviders");
	    return 0;
	  }
	  
	  std::cout<<"--------------------------------"<<std::endl;
	  std::cout<<"Provider name: "<<pszName<<std::endl; 
	  std::cout<<"Provider type: "<<dwType<<std::endl;
	  
	  LocalFree(pszName);
	}	
	
	
	
	
	
	
	
	
	HCRYPTPROV hProv;
	HCRYPTKEY hSessionKey;
	
	if (!CryptAcquireContext(&hProv, NULL, NULL, 
	PROV_RSA_FULL, CRYPT_VERIFYCONTEXT))
	{
			std::cout << "CryptAcquireContext" << std::endl;
	  return 0;
	}
	
	std::cout << "Cryptographic provider initialized" << std::endl;
	
	
	int key0 = CryptGenKey(hProv, CALG_RC4, CRYPT_ENCRYPT | CRYPT_DECRYPT, &hSessionKey);
	std::cout << key0 << std::endl;
	
	if (!CryptGenKey(hProv, CALG_RC4, CRYPT_ENCRYPT | CRYPT_DECRYPT, &hSessionKey))
	{
		std::cout << "CryptGenKey" << std::endl;
	  return 0;
	}
	
	std::cout << "Session key generated" << std::endl;
	
	char string[]="Test";
	DWORD count=strlen(string);
	
	if (!CryptEncrypt(hSessionKey, 0, true, 0, (BYTE*)string, &count, strlen(string)))
	{
			std::cout << "CryptEncrypt" << std::endl;
	  return 0;
	}
	
	std::cout << "Encryption completed" << std::endl;
	
	// ???????? ????? ?? ?????
	std::cout << "Encrypted string: " << string << std::endl;
		
}

