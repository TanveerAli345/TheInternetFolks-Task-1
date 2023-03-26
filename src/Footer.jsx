import logo from './assets/logo.png'

function Footer() {
    return(
        <footer className="footer">
            <img width="161px" height="125px" src={logo} alt="Food Truck Logo PNG" />
            <div className='footer--content'>
                <h3 className='footer--heading'>Contact Us</h3>
                <ul>
                    <li>
                        <p>
                            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                        </p>
                    </li>
                    <li>example2020@gmail.com</li>
                    <li>(904) 443-0343</li>
                </ul>
            </div>
                <div className='footer--content'>
                    <h3 className='footer--heading'>More</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
        </footer>
    )
}

export default Footer