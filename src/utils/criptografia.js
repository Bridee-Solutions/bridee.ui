import CryptoJS from "crypto-js" 

const secretKey = import.meta.env.VITE_SECRET_KEY;

export const encrypt = (text) => {
  return CryptoJS.AES.encrypt(text.toString(), secretKey).toString();
};

export const decrypt = (encrypted) => {
  const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};