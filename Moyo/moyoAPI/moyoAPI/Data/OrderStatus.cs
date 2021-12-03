using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace moyoAPI.Data
{
    [Table("OrderStatus")]
    public class OrderStatus
    {
        [Key]
        public int OrderStatusID { get; set; }

        public string OrderStatusDesc { get; set; }
    }
}
