export const AppHeader = () => {
  return (
    <div className="">
      <header className="flex flex-justify-end wp-100 h-50 flex-row position-relative pl-10 pr-10" style={{ backgroundColor: '#191919', color: '#fff' }}>
        <div className="position-absolute tp-0 lp-50 fs-24" style={{lineHeight:'50px'}}>ToDo</div>
        <button>Logout</button>
      </header>
    </div>
  )
}
