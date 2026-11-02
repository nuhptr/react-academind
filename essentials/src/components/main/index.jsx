import { useState } from "react"

import "./index.css"
import TabButton from "./tab-button"
import { EXAMPLE_CONTENT } from "../../constant/example-content.js"

const TABS = [
   { name: "components", label: "Components" },
   { name: "jsx", label: "JSX" },
   { name: "props", label: "Props" },
   { name: "state", label: "State" },
]

const Example = () => {
   const [activeTab, setActiveTab] = useState(null)

   // Find the content for the active tab
   const selectedExample = EXAMPLE_CONTENT.find((example) => example[activeTab])
   // If no tab is selected, show a default message
   const tabContent = selectedExample
      ? selectedExample[activeTab]
      : "Please click on a tab to see the content"

   return (
      <section id="examples">
         <h2>Examples</h2>
         <menu>
            {TABS.map(({ name, label }) => (
               <TabButton
                  key={name}
                  onClick={() => setActiveTab(name)}
                  isActive={activeTab === name}
               >
                  {label}
               </TabButton>
            ))}
         </menu>
         <div id="tab-content">
            <code>{tabContent}</code>
         </div>
      </section>
   )
}

export default Example
