using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using moyoAPI.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Text;
using System.Security.Cryptography;
using System.Dynamic;

namespace moyoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private MoyoDbContext db;

        public UserController(MoyoDbContext dbContext)
        {
            db = dbContext;  
        }

        [Route("login")]
        [HttpPost]
        public object LoginUser([FromBody] User User)
        {
            try
            {
                if (User != null)
                {
                    string pass = User.Password;
                    var hash = GenerateHash(ApplySomeSalt(pass));

                    User user = db.Users.Where(s => s.UserName == User.UserName && s.Password == hash).FirstOrDefault();

                    if(user == null)
                    {
                        dynamic obj = new ExpandoObject();
                        obj.Error = ("Email/Password invalid.");
                        return BadRequest(obj.Error);
                    }
                    else 
                    {
                        refreshUserToken(user);
                        return Ok(user);
                    }
                    
                }
                else
                {
                    dynamic toReturn = new ExpandoObject();
                    toReturn.Error = ("Please try again.");
                    return BadRequest(toReturn.Error);
                }
            }
            catch (Exception e)
            {
                dynamic toReturn = new ExpandoObject();
                toReturn.Error = (e.Message);
                return BadRequest(toReturn.Error);
            }
        }

        [HttpGet("client/{id}")]
        public IActionResult GetUser(int id)
        {
            try
            {
                var user = db.Clients.Where(s => s.UserID == id).FirstOrDefault();

                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        public User refreshUserToken(User user)
        {
            User User = db.Users.Where(x => x.UserID == user.UserID).FirstOrDefault();
            if (User.Token == null)
            {
                User.Token = Guid.NewGuid().ToString();
            }
            db.SaveChanges();
            return (User);
        }

        //hash password 
        public static string ApplySomeSalt(string input)
        {
            try
            {
                return input + "hijsbdlhishvhisabhbhahvbchlsbv";
            }
            catch
            {
                return null;
            }
        }
        public static string GenerateHash(string Inputstring)
        {
            try
            {
                SHA256 sha256 = SHA256Managed.Create();
                byte[] bytes = Encoding.UTF8.GetBytes(Inputstring);
                byte[] hash = sha256.ComputeHash(bytes);
                return GetStringFromHash(hash);
            }
            catch
            {
                return null;
            }
        }

        private static string GetStringFromHash(byte[] hash)
        {
            try
            {
                StringBuilder result = new StringBuilder();
                for (int i = 0; i < hash.Length; i++)
                {
                    result.Append(hash[i].ToString("X2"));
                }
                return result.ToString();
            }
            catch
            {
                return null;
            }
        }
    }
}
