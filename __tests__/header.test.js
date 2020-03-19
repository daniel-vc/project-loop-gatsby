import React from "react"
import renderer from "react-test-renderer"
import Header from "../src/components/header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="testing testing 1 2 3" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})