import { AccessNavigation } from "@kadoui/react"

function Page() {
  return (
    <div className="container my-3">
      <AccessNavigation direction="x" className="f-align gap-3">
        <button className="btn-fill">Click me 1</button>
        <button className="btn-fill">Click me 2</button>
        <button className="btn-fill">Click me 3</button>
      </AccessNavigation>
    </div>
  )
}

export default Page