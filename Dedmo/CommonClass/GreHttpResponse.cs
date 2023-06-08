using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GRE.CommonClass
{
    public class GreHttpResponse<T>
    {
            public T Results { get; set; }
            public string Status { get; set; }
            public string ErrorMessage { get; set; }

            public GreHttpResponse()
            {
                this.Status = string.Empty;
                this.ErrorMessage = string.Empty;
            }

            public static GreHttpResponse<T> FormatResult(T results)
            {
                return new GreHttpResponse<T>() { Results = results };
            }

            public static GreHttpResponse<T> FormatResult(T results, string status)
            {
                return new GreHttpResponse<T>() { Status = status, Results = results };
            }

            public static GreHttpResponse<T> FormatResult(T results, string status, string errorMessage)
            {
                return new GreHttpResponse<T>() { Status = status, Results = results, ErrorMessage = errorMessage };
            }

        }
    }
