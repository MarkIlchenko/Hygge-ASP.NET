using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;
using System.Xml.Linq;
using static Hygge.Pages.Interfaces.MyClasses;

namespace Hygge.Pages.Clients
{
    public class SignUpModel : PageModel
    {
        private readonly string _connectionString = "Data Source=.\\sqlexpress;Initial Catalog=hygge;Integrated Security=True";
        public String errorMessage { get; private set; } = "";
        public String successMessage { get; private set; } = "";

        public UserRegistration userRegistration { get; set; } = new UserRegistration();

        public IActionResult OnPost()
        {
            userRegistration.email = Request.Form["email"];
            userRegistration.password = Request.Form["password"];
            userRegistration.name = Request.Form["name"];
            userRegistration.phone = Request.Form["phone"];

            if (userRegistration.email.Length == 0 || userRegistration.password.Length == 0 || userRegistration.name.Length == 0 || userRegistration.phone.Length == 0) 
            {
                return new JsonResult(new { errorMessage = "All the fields are required" });
            }

            try
            {
                using(SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();

                    String myRegistrationForm = "INSERT INTO registeredUsers (email, password, name, phone) VALUES (@email, @password, @name, @phone);";

                    connection.Execute(myRegistrationForm, new 
                    { 
                        email = userRegistration.email,
                        password = userRegistration.password,
                        name = userRegistration.name,
                        phone = userRegistration.phone
                    });

                    return new JsonResult(new { errorMessage = "You have successfully created an account" });
                }
            }
            catch (Exception ex)
            {
                return new JsonResult(new { errorMessage = ex.Message });
            }
        }
    }
}
