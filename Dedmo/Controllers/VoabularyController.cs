using GRE.CommonClass;
using GRE.DBContext;
using GRE.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dedmo.Controllers
{
    public class VocabularyController : Controller
    {
        private readonly VocabularyDbContext vocabularyDbContext;

        GreHttpResponse<object> responseData = new GreHttpResponse<object>();

        public VocabularyController(VocabularyDbContext context)
        {
            vocabularyDbContext = context;
        }
        [HttpPost("~/api/Vocabulary/PostVocabulary")]
        public IActionResult PostVocabulary([FromBody] Vocabulary data)
        {
            vocabularyDbContext.Vocabulary.Add(data);
            vocabularyDbContext.SaveChanges();
            responseData.Status = "OK";
            responseData.Results = data;
            return Ok(responseData);
        
        }
        [HttpGet("~/api/Vocabulary/GetVocabularyList")]
        public IActionResult GetVocabularyList()
        {
            var VocabularyList = (from mem in vocabularyDbContext.Vocabulary
                                  select new
                                  {
                                      mem.Word,
                                      mem.Meaning,
                                      mem.Synonyms,
                                      mem.Antonyms,
                                      mem.MeaningInNepali
                                  }).ToList();

            responseData.Status = "OK";
            responseData.Results = VocabularyList;
            return Ok(responseData);
        }
        [HttpPost("~/api/Vocabulary/DeleteVocabulary")]
        public IActionResult DeleteVocabulary([FromBody] int Index )
        {
            vocabularyDbContext.Remove(vocabularyDbContext.Vocabulary.Single(a => a.Id == Index));
            vocabularyDbContext.SaveChanges();
            responseData.Status = "OK";
            return Ok(responseData);
        }
    }
}
