import React from "react";
import Sidebar from "./shared/sidebar/sidebar";
import Footer from "./tasks/components/footer";
import Navbar from "./tasks/components/navbar";
import Tasks from "./tasks/components/tasks";



class App extends React.Component{  


  render() {
    return (
      <div>
        <header>
          <Navbar/>
        </header>
        <main className="row container mt-4">
          
          <div className="col-3">
          <Sidebar/>
          </div>
          <div className="col">
          <Tasks/>  
          </div>
        </main>
        <footer className="text-white-50 bg-primary text-center text-lg-start">
        <Footer />
        </footer>
      </div>
      
    );
  }
}




export default App;
