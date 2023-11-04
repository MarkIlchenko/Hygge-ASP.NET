using System.Data.SqlClient;
using Dapper;
using Hygge.Pages.Clients;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using static Hygge.Pages.Interfaces.MyClasses;

namespace Hygge.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly string _connectionString = "Data Source=.\\sqlexpress;Initial Catalog=hygge;Integrated Security=True";

        public String errorMessage { get; private set; } = "";
        public String successMessage { get; private set; } = "";

        public NewsLetter newsletter { get; set; } = new NewsLetter();
        public List<MyProducts> listClient { get; set; } = new List<MyProducts>();
        public List<ClientMessage> messageClient { get; set; } = new List<ClientMessage>();
        public List<ClientArticles> articlesClient { get; set; } = new List<ClientArticles>();
        

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }


        public IActionResult OnPost()
        {
            newsletter.email = Request.Form["email"];

            if (newsletter.email.Length == 0)
            {
                return new JsonResult(new { errorMessage = "All the fields are required" });
            }

            try
            {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    String sql = "INSERT INTO newsletter (email) VALUES (@email);";
                    connection.Execute(sql, new { email = newsletter.email });

                    return new JsonResult(new { successMessage = "Your email was successfully received" });
                }
            }
            catch (Exception ex)
            {
                return new JsonResult(new { errorMessage = ex.Message });
            }
        }


        public void OnGet()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    String myProduct = "SELECT TOP 8 * FROM productslist";
                    String messageSQL = "SELECT * FROM userreviews";
                    String articlesSQL = "SELECT TOP 7 * FROM productarticles";

                    listClient = connection.Query<MyProducts>(myProduct).AsList();
                    messageClient = connection.Query<ClientMessage>(messageSQL).AsList();
                    articlesClient = connection.Query<ClientArticles>(articlesSQL).AsList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError("Exception: " + ex.ToString());
            }
        }
    }
}