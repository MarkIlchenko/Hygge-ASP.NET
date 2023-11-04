namespace Hygge.Pages.Interfaces
{
    public class MyClasses
    {
        public class MyProducts
        {
            public String id;
            public String title;
            public String brand;
            public String price;
            public String guarantee;
            public String discount;
            public String category;
            public String sku;
            public String image_path;
        }

        public class ClientMessage
        {
            public String id;
            public String name;
            public String created_at;
            public String mesage;
            public String img;
        }

        public class ClientArticles
        {
            public String id;
            public String title;
            public String category;
            public String created_at;
            public String img;
        }

        public class NewsLetter
        {
            public String id;
            public String email;
            public String created_at;
        }

        public class UserRegistration
        {
            public String id;
            public String email;
            public String password;
            public String name;
            public String phone;
        }
    }
}
