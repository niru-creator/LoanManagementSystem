using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace LoanManagementSystem.CommonClass
{
    public class Security
    {
        static string Salt = "Application_loan";
        public static string EncryptPassword(string Password)
        {
            string encryptedPwd = string.Empty;
            byte[] data = UTF8Encoding.UTF8.GetBytes(Password);
            using (MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider())
            {
                byte[] keys = md5.ComputeHash(UTF8Encoding.UTF8.GetBytes(Salt));
                using (TripleDESCryptoServiceProvider tripdes = new TripleDESCryptoServiceProvider() { Key = keys, Mode = CipherMode.ECB, Padding = PaddingMode.PKCS7 })
                {
                    ICryptoTransform transform = tripdes.CreateEncryptor();
                    byte[] results = transform.TransformFinalBlock(data, 0, data.Length);
                    encryptedPwd = Convert.ToBase64String(results, 0, results.Length);

                }
            }
            return encryptedPwd;
        }
    }
}
