using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace moyoAPI.Data
{
    [Table("ProductPrice")]
    public class ProductPrice
    {
        [Key]
        public int PriceID { get; set; }

        public DateTime Date { get; set; }
        public double Amount { get; set; }
        public int ProductID { get; set; }

    }
}
