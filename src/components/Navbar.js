
export default function Navbar() {
    return (
      <div className="bg-white-800">
       <div>
    
          <nav className="bg-white p-4 ">
            <div className="container mx-auto flex justify-between items-center ">


              <div className="space-x-7 flex items-center text-xl">
                <a href="/" className="text-black">
                  Home
                </a>
                <a href="/about" className="text-black">
                  Menu
                </a>
                <a href="/skills" className="text-black">
                 About Us 
                </a>
                <a href="/projects" className="text-black">
                  Service
                </a>
              </div>
              <div className="h-12 w-12  ml-auto">
              <img src='/avatar.png' alt="logo" className="ml-auto"/>
              </div>
              
            </div>
          </nav>
        </div>
      </div>
    );
  }
  