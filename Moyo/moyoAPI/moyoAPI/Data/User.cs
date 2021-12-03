using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace moyoAPI.Data
{
    [Table("User")]
    public class User
    {
        [Key]
        public int UserID { get; set; }

        public string UserName { get; set; }
        public string Password { get; set; }


        public virtual Client client { get; set; }
    }
}
