import './Footer.css'

const Footer = () => {
  return(
    <footer className='footerPage'> 
      <section>
        <ul>
          <li>
            <a href='facebook.com'>
              <img src='/images/facebook.png' alt=''/>
            </a>
          </li>

          <li>
            <a href='twitter.com'>
              <img src='/images/twitter.png' alt=''/>
            </a>
          </li>

          <li>
            <a href='instagram.com' target='_blank'> 
              <img src='/images/instagram.png' alt=''/>
            </a>
          </li>
        </ul>
      </section>
      <section className='logoFooter'>
        <ul>
          <li>
            <img src='/images/1.png' alt='' />
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer