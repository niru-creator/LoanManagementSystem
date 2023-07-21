using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GRE.CommonClass
{
    public class LoanHttpResponse<T>
    {
            public T Results { get; set; }
            public string Status { get; set; }
            public string ErrorMessage { get; set; }

            public LoanHttpResponse()
            {
                this.Status = string.Empty;
                this.ErrorMessage = string.Empty;
            }

            public static LoanHttpResponse<T> FormatResult(T results)
            {
                return new LoanHttpResponse<T>() { Results = results };
            }

            public static LoanHttpResponse<T> FormatResult(T results, string status)
            {
                return new LoanHttpResponse<T>() { Status = status, Results = results };
            }

            public static LoanHttpResponse<T> FormatResult(T results, string status, string errorMessage)
            {
                return new LoanHttpResponse<T>() { Status = status, Results = results, ErrorMessage = errorMessage };
            }

        }
    }
