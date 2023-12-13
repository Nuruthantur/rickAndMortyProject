
  function MainLayout(props) {
    console.log(props)
  return (
    <>
      <nav style={{ border: "solid black 1px", padding: "1em" }}>
        here is nav
      </nav>
        { props.children }
      <footer style={{ border: "solid black 1px", padding: "1em" }}>
        here is footer
      </footer>
    </>
  )
}

export default MainLayout