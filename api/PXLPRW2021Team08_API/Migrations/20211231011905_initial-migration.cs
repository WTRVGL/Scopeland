using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PXLPRW2021Team08_API.Migrations
{
    public partial class initialmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductNaam = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductPrijs = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ProductCategory = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductOmschrijving = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductMerk = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Stock = table.Column<int>(type: "int", nullable: false),
                    AmountSold = table.Column<int>(type: "int", nullable: false),
                    FocalLength = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PriceSold = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Resolution = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Aperture = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Weight = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Difficulty = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateLastSale = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateFirstStockage = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
