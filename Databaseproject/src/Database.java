
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException; 
import java.sql.Statement;


public class Database {
    String jdbcDriver ="";
    String dbURL ="";
    String username ="";
    String password="";
            
    Connection connection;
    private String Statement;
    public Database ()throws SQLException,ClassNotFoundException
    {
  jdbcDriver ="com.mysql.jdbc.Driver";
        
dbURL="jdbc:mysql://localhost:3306/gcudb";
      username ="root";
      password ="root";
      Class.forName(jdbcDriver);
              connection = DriverManager.getConnection(dbURL,username,password);
    }
public ResultSet executeQuery(String query)throws SQLException
{
PreparedStatement st = connection.prepareStatement(query);
return  st.executeQuery();

}
public int executeUpdate(String statement)throws SQLException
{
    PreparedStatement st = connection.prepareStatement(statement);
    return st.executeUpdate();
}
public void close()
{
try
{
  connection.close();
}
catch (SQLException sqlException)
{

}
}
protected void finalize()
{
close();
}
}
