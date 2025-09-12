
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;


public class DBFirst {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        try {
            Database db = new Database();
            String query1 = "Select * from dindatabase where username = 'AMI'";
            ResultSet rs = db.executeQuery(query1);
            if (rs.next())
            {
            
            String username = rs.getString("username");
            System.out.println(username);
            String pass = rs.getString("opw");
            System.out.println(pass);
            String mobile = rs.getString("ram");
            System.out.println(mobile);
            String mail = rs.getString("uin");
            System.out.println(mail);
            String pl = rs.getString("eim");
            System.out.println(pl);
                    
            }
            
            
            //db.executeUpdate(query1);
            //System.out.println("Data inserted");
            
            
            
        } catch (SQLException ex) {
            Logger.getLogger(DBFirst.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DBFirst.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}
