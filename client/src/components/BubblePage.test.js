import React from "react";
import { render, screen, getByText} from "@testing-library/react";
import BubblePage from "./BubblePage";
import {testFetch as mockTestFetch} from "../utils/testFetch"
import ColorList from "./ColorList";

jest.mock("../utils/testFetch")

const testColors = {
  colors: [ 
  {
    color: 'aliceblue',
    code: {
      hex: '#f0f8ff'
    },
    id: 1
  },
  {
    color: 'limegreen',
    code: {
      hex: '#99ddbc'
    },
    id: 2
  },
  {
    color: 'aqua',
    code: {
      hex: '#00ffff'
    },
    id: 3
  }
  ]}

test("Fetches data and renders the bubbles", async () => {

  // Finish this test
    mockTestFetch.mockResolvedValueOnce(testColors)
    const {findByText} = render(<BubblePage colors = {[]}/>)  
    const title = await findByText(/bubbles/i)
    expect(title).toBeVisible
  })
  
 
  
  

  



