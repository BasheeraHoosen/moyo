using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moyoAPI.Data
{
    public class MoyoDbContext : DbContext
    {
        public MoyoDbContext(DbContextOptions<MoyoDbContext> options):base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<ProductPrice> ProductPrices { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<OrderStatus> OrderStatuses { get; set; }
        public DbSet<OrderLine> OrderLines { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Client> Clients { get; set; }

    }
}
