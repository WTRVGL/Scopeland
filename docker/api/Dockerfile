FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 5000

ENV ASPNETCORE_URLS=http://+:5000

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY api/PXLPRW2021Team08_API/PXLPRW2021Team08_API.csproj .

COPY . .
WORKDIR "/src/api/PXLPRW2021Team08_API"
RUN dotnet build "PXLPRW2021Team08_API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PXLPRW2021Team08_API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PXLPRW2021Team08_API.dll"]
