using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GRE.Model
{
    public class Vocabulary
    {
        public int Id { get; set; }
        public string Word { get; set; }
        public string Meaning { get; set; }
        public string Synonyms { get; set; }
        public string Antonyms { get; set; }
        public string MeaningInNepali { get; set; }

    }
}
