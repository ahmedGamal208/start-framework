import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
      <div className='second-bg text-white py-5 text-center'>
      <div className="container py-5 ">
        <div className="row g-5 ">
            <div className="col-md-4">
                <div>
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <h3>AROUND THE WEB</h3>
                    <ul className="list-unstyled d-flex justify-content-center align-items-center gap-2">
                        <li><i class="fa-brands fa-facebook mx-1"></i></li>
                        <li><i class="fa-brands fa-twitter mx-1"></i></li>
                        <li><i class="fa-brands fa-linkedin-in mx-1"></i></li>
                        <li><i class="fa-solid fa-globe mx-1"></i></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
        
      </div>
      </div>
      <div className="lower-footer text-white text-center py-3">
            <p className='m-0 py-1'>Copyright © Your Website 2021</p>
        </div>
    </footer>
    
    </>
  )
}

export default Footer
