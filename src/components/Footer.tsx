const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full justify-between border-t border-t-color-line-50 bg-color-primary-100 text-size-label">
      <div className="flex">
        <div className="border-r border-r-color-line-50 px-4 py-4">
          find me in:
        </div>
        <a
          href="https://twitter.com/leonard_laput"
          className="border-r border-r-color-line-50 px-4 py-4 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-twitter-fill"></i>
        </a>
        <a
          href="https://www.facebook.com/leonard.laput/"
          className="border-r border-r-color-line-50 px-4 py-4 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-facebook-fill"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/leonard-laput/"
          className="border-r border-r-color-line-50 px-4 py-4 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-box-fill"></i>
        </a>
        <a
          href="https://discordapp.com/users/149825827687759883"
          className="border-r border-r-color-line-50 px-4 py-4 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-discord-fill"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=639263198650"
          className="border-r border-r-color-line-50 px-4 py-4 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-whatsapp-fill"></i>
        </a>
        <a
          href="mailto:online.lorno@gmail.com"
          className="border-r border-r-color-line-50 px-4 py-4 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-mail-fill"></i>
        </a>
      </div>
      <a
        href="https://github.com/online-lorno"
        className="border-l border-l-color-line-50 px-4 py-4 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        @online-lorno <i className="ri-github-fill"></i>
      </a>
    </footer>
  )
}

export default Footer
