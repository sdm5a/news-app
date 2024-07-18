import React from 'react'

const  Footer = () => {

    return (
      
      <div>
        <footer className="text-center text-white" style={{backgroundColor: "#221c2e"}}>
      
      <div className="container">
         
        <section className="mt-5">
         
          <div className="row text-center d-flex justify-content-center pt-5">
              
            <div className="col-md-2">
              <h6 className=" font-weight-bold">
                <a href="https://github.com/sdm5a" className="text-white text-decoration-none">GitHub</a>
              </h6>
            </div>
              
            <div className="col-md-2">
              <h6 className=" font-weight-bold">
                <a href="https://www.linkedin.com/in/saddam-ansari-2b2572228/" className="text-white text-decoration-none">LinkedIn</a>
              </h6>
            </div>
              
            <div className="col-md-2">
              <h6 className=" font-weight-bold">
                <a href="https://leetcode.com/sdm__a/" className="text-white text-decoration-none">LeetCode</a>
              </h6>
            </div>
              
          </div>
           
        </section>
          
  
        <hr className="my-5" />
  
          
        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                This site is not for production or any kind of business so please don't refresh or relode the page again and again.
                Because it may exceed the daily limit of api feching and as a result you will get an error.
                Thank you!. 
              </p>
            </div>
          </div>
        </section>
          
        
        
      </div>
       
      <div
           className="text-center p-3"
           style={{backgroundColor: "#332d40"}}
           >
        © 2024 Copyright:
        <a className="text-white text-decoration-none" href="/"
           >www.news-monks.com</a
          >
      </div>
       
    </footer>
      </div>
    

    );
  }

export default Footer;
