using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace moyoAPI.Data
{
    [Table("OrderLine")]
    public class OrderLine
    {
        [Key]
        public int OrderLineID { get; set; }

        public int OrderID { get; set; }
        public int ProductID { get; set; }

        public virtual Product product { get; set; }

    }
}
