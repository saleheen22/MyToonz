
import './App.css'
import 'animate.css';
function App() {


  return (
    <>

      <div className='bg '>

        <div className='cont animate__animated animate__backInDown'>
          <button className='button'>
            <div className='blob'>
              <svg
                xmlns: xlink='http://www.w3.org/1999/xlink'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 310 350'
              >
                <path d='M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z' />

              </svg>
            </div>
            <div className='line'></div>
            <div className='text'>
              <p>M</p>
              <p>Y</p>
              <p>T</p>
              <p>O</p>
              <p>O</p>
              <p>N</p>
              <p>Z</p>
            </div>
          </button>
        </div>
        <div className='text-2xl my-10'>
          Logo
        </div>
        <div className='md:text-3xl text-xl animate__animated animate__rotateIn p-text font-bold ms-10'>
          A safe Platform for kids and family entertainment content
        </div>
        <div className='my-10 md:text-2xl animate__animated animate__bounceInLeft'>
          <span className='lg:ms-48 '>  Subscribe for <span className='font-bold'>UNLIMITED ACCESS</span></span>
          <div className='grid grid-cols-1 lg:grid-cols-3 my-5 gap-10'>
            <div><button className='s-btn p-3 rounded-lg '>Daily @5 Tk</button></div>
            <div><button className='s-btn p-3 rounded-lg'>Weekly @30 Tk</button></div>
            <div><button className='s-btn p-3 rounded-lg'>Monthly @120 Tk</button></div>
          </div>
        </div>
     
      </div>
      <div className='w-screen'>
        <footer className="footer p-10 lg:ps-80 bg-neutral text-neutral-content  m-0">
          <div>
            {/* <span className="footer-title">Services</span> */}
            <a className="link link-hover">My Account</a>
            {/* <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a> */}
          </div>
          <div>
            {/* <span className="footer-title">Company</span> */}
            <a className="link link-hover">Terms</a>
            {/* <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a> */}
          </div>
          <div>
            {/* <span className="footer-title">Legal</span> */}
            <a className="link link-hover">Privacy</a>
            {/* <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a> */}
          </div>
        </footer>
      </div>
     
    </>
  )
}

export default App
