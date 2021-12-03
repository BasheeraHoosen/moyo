using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using moyoAPI.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace moyoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private MoyoDbContext db;

        public OrderController(MoyoDbContext dbContext)
        {
            db = dbContext;
        }

        [HttpGet("products")]
        public IActionResult ReadProducts()
        {
            try
            {
                List<Product> returnList = new List<Product>();
                List<Product> products = db.Products.ToList();
                foreach (Product product in products)
                {
                    ProductPrice price = db.ProductPrices.Where(s => s.ProductID == product.ProductID).OrderByDescending(s => s.Date).FirstOrDefault();
                    product.price = price;
                    returnList.Add(product);
                }

                return Ok(returnList);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpGet("order/{id}")]
        public IActionResult ReadOrders(int id)
        {
            try
            {
                List<Order> returnList = new List<Order>();
                List<Order> orders = db.Orders
                    .Include(s => s.orderLine)
                    .Include(s => s.status)
                    .Where(s => s.ClientID == id)
                    .ToList();

                foreach (Order order in orders)
                {
                    foreach (OrderLine line in order.orderLine)
                    {
                        Product product = db.Products.Find(line.ProductID);
                        ProductPrice price = db.ProductPrices.Where(s => s.ProductID == product.ProductID).OrderByDescending(s => s.Date).FirstOrDefault();
                        product.price = price;
                        line.product = product;
                    }
                    returnList.Add(order);
                }
                return Ok(returnList);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("neworder")]
        public IActionResult PostOrder(Order order)
        {
            try
            {
                order.OrderDate = DateTime.Now;
                db.Orders.Add(order);
                db.SaveChanges();

                return Ok(order.OrderID);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("orderline")]
        public IActionResult PostOrderLine(OrderLine line)
        {
            try
            {
                db.OrderLines.Add(line);
                db.SaveChanges();

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
