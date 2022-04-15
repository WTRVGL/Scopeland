using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using PXLPRW2021Team08_API.Middleware;
using PXLPRW2021Team08_API.Repositories;
using PXLPRW2021Team08_API.Services;

namespace PXLPRW2021Team08_API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddTransient<IProductRepository, ProductRepositorySql>();
            services.AddTransient<IUserRepository, UserRepositorySql>();

            services.AddTransient<IAuthService, AuthService>();
            services.AddSingleton<ITokenService, TokenService>();
            services.AddSingleton<IHashPasswordService, HashPasswordService>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        RequireExpirationTime = false,
                        IssuerSigningKey =
                            new SymmetricSecurityKey(Convert.FromBase64String("eW93YXNzdXBwb3Bpc2VwaWNyZWVlZWVlZWVlZWVlZWU=")),
                        ValidateIssuerSigningKey = true

                    };
                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = context =>
                        {
                            context.Token = context.Request.Cookies["JWTkoek"];
                            return Task.CompletedTask;
                        }
                    };
                });

            services.AddCors(options =>
            {
                options.AddPolicy(name: "AllowAll", builder =>
                {
                    builder.WithOrigins(
                        "http://localhost:8000", 
                        "http://localhost:9000", 
                        "https://www.wouter.land", 
                        "http://www.wouter.land",
                        "https://scopeland.netlify.app/" )
                         .AllowAnyMethod()
                         .AllowAnyHeader()
                         .AllowCredentials();
                }); 
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
            public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("AllowAll");

            app.UseAuthentication();
            app.UseAuthorization();
            app.UseMiddleware<JwtMiddleware>();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            
        }
    }
}
