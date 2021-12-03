using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace moyoAPI.Data
{
    [Table("Product")]
    public class Product
    {
        [Key]
        public int ProductID { get; set; }

        public string ProductName { get; set; }
        public string ProductDesc { get; set; }
        public byte[] ProductPic { get; set; }

        public virtual ProductPrice price { get; set; }

    }
}
