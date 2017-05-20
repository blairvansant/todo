using Microsoft.Owin;
using Newtonsoft.Json.Serialization;
using Owin;
using System.Web.Http;

[assembly: OwinStartupAttribute(typeof(Todo.Startup))]
namespace Todo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

            HttpConfiguration config = GlobalConfiguration.Configuration;
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.JsonFormatter.UseDataContractJsonSerializer = false;
        }
    }
}
