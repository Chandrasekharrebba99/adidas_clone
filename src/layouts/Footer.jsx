import '../styles/global.scss'
const Footer = ()=>{
    return(
        <footer className="footer-main">
            <div className='footer-links'>
                <ul className='row-elements'>
                    <li className='list-item-footer'>help</li>
                    <li className='list-item-footer'>privacy policy</li>
                    <li className='list-item-footer'>terms and conditions</li>
                    <li className='list-item-footer'>about us</li>
                </ul>
            </div>
            <div className='copyright'>
                <p>�� 2022 adidas </p>
            </div>
        </footer>
    )
}

export default Footer