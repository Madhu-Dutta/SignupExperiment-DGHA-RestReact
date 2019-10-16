using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LoginApplication.Models;
using LoginApplication.VM;

namespace LoginApplication.Controllers
{
    [RoutePrefix("Api/login")]

    public class LoginController : ApiController

    {

        MemberDbEntities1 DB = new MemberDbEntities1();

        [Route("InsertMember")]

        [HttpPost]

        public object InsertMember(Register Reg)

        {

            try

            {

                MemberLogin ML = new MemberLogin();

                if (ML.Id == 0)

                {

                    ML.UserName = Reg.UserName;

                    ML.FirstName = Reg.FirstName;

                    ML.LastName = Reg.LastName;

                    ML.Email = Reg.Email;

                    ML.Password = Reg.Password;

                    DB.MemberLogins.Add(ML);

                    DB.SaveChanges();

                    return new Response

                    { Status = "Success", Message = "Record SuccessFully Saved." };

                }

            }

            catch (Exception)

            {

                throw;

            }

            return new Response

            { Status = "Error", Message = "Invalid Data." };

        }

        [Route("Login")]

        [HttpPost]

        public Response memberLogin(Login login)

        {

            var log = DB.MemberLogins.Where(x => x.UserName.Equals(login.UserName) && x.Password.Equals(login.Password)).FirstOrDefault();

            if (log == null)

            {

                return new Response { Status = "Invalid", Message = "Invalid User." };

            }

            else

                return new Response { Status = "Success", Message = "Login Successfully" };

        }

    }
}
