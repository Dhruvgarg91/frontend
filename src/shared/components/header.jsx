import logo from "../../shared/img/logo.png";
import "../../shared/style.css";
import "../services/logic.jsx";
export const Header = () => {
  return (
    <div class="container">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,0,0" />
    <aside>
        <div class="top">
            <div class="logo">
                <img src={logo}alt="logo"></img>
                <h2>Do <span class="danger">iT</span></h2>
            </div>
            <div class="close" id="close-btn">
                <span class="material-symbols-outlined">close</span>
            </div>
        </div>

        <div class="sidebar">
            <a href="#" class="active">
                <span class="material-symbols-outlined">grid_view</span>
                <h3>Dashboard</h3>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">person</span>
                <h3>Customers</h3>
            </a>
            <a href="RAD Orders V.1.0.html">
                <span class="material-symbols-outlined">order_approve</span>
                <h3>Orders</h3>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">insights</span>
                <h3>Analistics</h3>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">mail</span>
                <h3>Messages</h3>
                <span class="message-count">26</span>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">inventory</span>
                <h3>Products</h3>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">report </span>
                <h3>Reports</h3>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">settings</span>
                <h3>Settings</h3>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">add</span>
                <h3>Add Product</h3>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">logout</span>
                <h3>Logout</h3>
            </a>

        </div>
    </aside>

    <main>
        <h1>Dashboard</h1>
        
        
        <div class="insights">
            <div class="sales">
                <span class="material-symbols-sharp">analytics</span>
                    
                <div class="middle">
                    <div class="left">
                        <h3>Total Sales</h3>
                        
                    </div>
                    
                </div>
                <small class="text-muted">Last 24 hours</small>
            </div>
            <div class="expenses">
                <span class="material-symbols-sharp">bar_chart</span>
                <div class="middle">
                    <div class="left">
                        <h3>Total Sales</h3>
                        
                    </div>
                    
                </div>
                <small class="text-muted">Last 24 hours</small>
            </div>
            <div class="income">
                <span class="material-symbols-sharp">stacked_line_chart</span>
                <div class="middle">
                    <div class="left">
                        <h3>Total Income</h3>
                        
                    </div>
                    
                </div>
                <small class="text-muted">Last 24 hours</small>
            </div>
        </div>

        <div class="recent-orders">
            <h2>Recent Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Number</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            <a href="RAD Orders V.1.0.html">Show All</a>
        </div>
    </main>


    <div class="right">


        <div class="top">
            <button id="menu-btn">
                <span class="material-symbols-sharp">menu</span>
            </button>
            <div class="theme-toggler">
                <span class="material-symbols-sharp active">light_mode</span>
                <span class="material-symbols-sharp">dark_mode</span>
            </div>
            <div class="profile">
                <div class="info">
                  
                    <small class="text-muted">Admin</small>
                </div>
                <div class="profile-photo">
                    <img src="img/user.png" alt="user"></img>
                </div>
            </div>
        </div>

     
        

      
        <div class="sales-analytics">
            <h2>Sales Analytics</h2>
            
            <div class="item online">
               <div class="icon">
                    <span class="material-symbols-sharp">shopping_cart</span>
               </div>
               <div class="right">
                    <div class="info">
                        <h3>ONLINE BORDERS</h3>
                        <small class="text-muted">Last 24 Hours</small>
                    </div>
                    
               </div>
            </div>
            <div class="item offline">
                <div class="icon">
                     <span class="material-symbols-sharp">local_mall</span>
                </div>
                <div class="right">
                     <div class="info">
                         <h3>OFFLINE BORDERS</h3>
                         <small class="text-muted">Last 24 Hours</small>
                     </div>
                     
                </div>
             </div>
             <div class="item customers">
                <div class="icon">
                     <span class="material-symbols-sharp">person</span>
                </div>
                <div class="right">
                     <div class="info">
                         <h3>NEW CUSTOMERS</h3>
                         <small class="text-muted">Last 24 Hours</small>
                     </div>
                    
                </div>
             </div>
             <div class="item add-product">
                <div>
                    <span class="material-symbols-sharp">add</span>
                    <h3>Add Product</h3>
                </div>
             </div>
        </div>
    </div>
</div>

  );
};
