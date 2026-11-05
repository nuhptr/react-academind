import { useState } from "react"

import TabButton from "./tab-button"
import { EXAMPLE_CONTENT } from "../../example-content.js"

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
        <section className="flex min-w-0 flex-col gap-4 sm:mx-4 sm:gap-6 md:mx-8 lg:mx-12">
            <div className="flex flex-col gap-4">
                <h2 className="text-left font-roboto-condensed text-xl font-bold text-heading sm:text-2xl">
                    Examples
                </h2>
                <menu className="m-0 flex list-none flex-wrap gap-1 p-0 sm:gap-2">
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
            </div>
            <div className="mb-6 min-w-0 overflow-x-auto rounded-md bg-example-panel p-3 sm:mb-4 sm:p-4">
                <code className="block whitespace-pre-wrap wrap-break-word text-sm sm:text-base">
                    {tabContent}
                </code>
            </div>
        </section>
    )
}

export default Example
