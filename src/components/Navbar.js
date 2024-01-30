
export default function Navbar() {
  return (
    <div className="bg-white-800">
     <div>
      {/* bgc */}
     
  
        <nav className="bg-white mt-4 ">
        
          <div className="container mx-auto flex justify-between items-center ">
          <div className="flex items-center"> 
              <div className="h-12 w-12 mr-auto">
                <img src='/logo.png' alt="logo" />
              </div>
              <h1 className="text-black font-bold ml-2 text-2xl">City</h1>
            </div>

            <div className="space-x-7 flex items-center text-xl ml-auto ">
              <a href="/" className="text-black">
                Home
              </a>
              <a href="/about" className="text-black ">
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
            <img src='/avatar.png' alt="avtar" className="ml-auto"/>
            </div>
            

          </div>
        </nav>
      </div>
    </div>
  );
}

