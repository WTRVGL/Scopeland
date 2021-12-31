FROM mcr.microsoft.com/mssql/server:2019-latest
COPY ./db.sql .

ENV MSSQL_PID='Express'
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD='Enterpasswordhere123#'


RUN /opt/mssql/bin/sqlservr --accept-eula & sleep 10 \
    && /opt/mssql-tools/bin/sqlcmd -S 127.0.0.1 -U SA -P $SA_PASSWORD -i db.sql  \
    && pkill sqlservr 
    