const Sidebar = () => {
  return (
    <div className="flex w-80 border-r border-r-color-line-50">
      <div className="flex flex-col space-y-5 border-r border-r-color-line-50 p-5">
        <i className="ri-terminal-box-fill"></i>
        <i className="ri-user-4-fill"></i>
        <i className="ri-gamepad-fill"></i>
      </div>
      <div className="flex-grow">
        <div className="flex space-x-2 border-b border-b-color-line-50 px-3 py-2 text-size-label text-white">
          <i className="ri-arrow-down-s-fill"></i>
          <span>personal-info</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
