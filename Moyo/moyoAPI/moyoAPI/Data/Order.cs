using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace moyoAPI.Data
{
    [Table("Order")]
    public class Order
    {

        public Order()
        {
            orderLine = new HashSet<OrderLine>();
        }

        [Key]
        public int OrderID { get; set; }

        public int ClientID { get; set; }
        public int OrderStatusID { get; set; }
        public DateTime OrderDate { get; set; }
        public double Total { get; set; }


        public virtual OrderStatus status { get; set; }
        public virtual ICollection<OrderLine> orderLine { get; set; }

    }
}
