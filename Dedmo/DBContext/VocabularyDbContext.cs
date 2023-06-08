using GRE.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GRE.DBContext
{
    public class VocabularyDbContext : DbContext
    {
      
        
        public VocabularyDbContext(DbContextOptions<VocabularyDbContext> connection) : base(connection)
        { }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Vocabulary>().HasKey(t => t.Id);
        }
        public DbSet<Vocabulary> Vocabulary { get; set; }
    }
}
