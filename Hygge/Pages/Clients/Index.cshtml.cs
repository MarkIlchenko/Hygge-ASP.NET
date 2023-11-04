using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;

namespace Hygge.Pages.Clients
{
    public class IndexModel : PageModel
    {
        public List<ClientInfo> listClient = new List<ClientInfo>();
        public void OnGet()
        {
            try
            {
                String connectionString = "Data Source=.\\sqlexpress;Initial Catalog=hygge;Integrated Security=True";

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    String sql = "SELECT * FROM productslist";
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                ClientInfo clientInfo = new ClientInfo();
                                clientInfo.id = reader.GetInt32(0).ToString(); // Преобразование в строку
                                clientInfo.title = reader.GetString(1);
                                clientInfo.brand = reader.GetString(2);
                                clientInfo.price = reader.GetInt32(3).ToString(); // Преобразование в строку
                                clientInfo.guarantee = reader.GetInt32(4).ToString();
                                clientInfo.discount = reader.GetInt32(5).ToString();
                                clientInfo.category = reader.GetString(6);
                                clientInfo.sku = reader.GetString(7);
                                clientInfo.img = reader.GetString(8);

                                listClient.Add(clientInfo);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception: " + ex.ToString());
            }
        }
    }

    public class ClientInfo
    {
        public String id;
        public String title;
        public String brand;
        public String price;
        public String guarantee;
        public String discount;
        public String category;
        public String sku;
        public String img;
    }
}
